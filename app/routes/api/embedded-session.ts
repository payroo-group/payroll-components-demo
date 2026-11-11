import type { ActionFunctionArgs } from "react-router";
import {
    createMockBackend,
    PARTNER_ZERO_CREDENTIAL,
} from "@payroo-group/embedded-mock";
import {
    EMBEDDED_MODE,
    FRAME_ORIGIN,
    MOCK_EMPLOYER_ID,
    MOCK_EXTERNAL_USER_ID,
} from "~/lib/embedded-config";

/**
 * [docs](https://payroo-embedded.apidocumentation.com/getting-started)
 * The partner's session route: the only place the Payroo credential is used.
 *
 * `PayrooProvider` (via `createServerSessionAdapter`) POSTs here with one of:
 *   { action: "mint",      employerId, externalUserId }
 *   { action: "refresh",   sessionId }
 *   { action: "bootstrap", sessionId, purpose?, parentOrigin?, componentId? }
 * and expects Payroo's response passed through as is.
 *
 * Modes (VITE_PAYROO_EMBEDDED_MODE):
 *   mock    (default) mints with the in-process mock from @payroo-group/embedded-mock: synthetic
 *           data, no credential, no network. The browser's mock adopts the session.
 *   staging forwards to the Payroo Embedded API at PAYROO_API_URL with PAYROO_API_KEY.
 */

const EMPLOYER_COMPONENTS = [
    "calendar",
    "company-setup",
    "employees",
    "run-payroll",
    "payrun-history",
];

const EMPLOYER_SCOPES = [
    "company:read",
    "company:write",
    "employees:read",
    "employees:write",
    "payruns:read",
    "payruns:write",
    "payruns:lodge",
    "documents:read",
    "calendar:read",
];

interface SessionRouteBody {
    action?: "mint" | "refresh" | "bootstrap";
    employerId?: string;
    externalUserId?: string;
    sessionId?: string;
    purpose?: "component" | "secure-field";
    parentOrigin?: string;
    componentId?: string;
}

function json(status: number, body: unknown) {
    return Response.json(body, {
        status,
        headers: { "Cache-Control": "no-store" },
    });
}

function error(status: number, code: string, message: string) {
    return json(status, { error: { code, message } });
}

/** Origin of the page that mounts components: must match Payroo's allowedOrigins exactly. */
function hostOrigin(request: Request): string {
    return process.env.APP_ORIGIN || new URL(request.url).origin;
}

/** Path and body of the Payroo call for one session-route action. */
function payrooCall(
    b: SessionRouteBody,
    origin: string,
): { path: string; body?: unknown } | Response {
    const sid = encodeURIComponent(b.sessionId ?? "");
    switch (b.action ?? "mint") {
        case "refresh":
            if (!b.sessionId) return error(400, "invalid_request", "sessionId is required");
            return { path: `/sessions/${sid}/refresh` };
        case "bootstrap":
            if (!b.sessionId) return error(400, "invalid_request", "sessionId is required");
            return {
                path: `/sessions/${sid}/bootstraps`,
                body: {
                    purpose: b.purpose ?? "component",
                    ...(b.parentOrigin && { parentOrigin: b.parentOrigin }),
                    ...(b.componentId && { componentId: b.componentId }),
                },
            };
        case "mint": {
            const mock = EMBEDDED_MODE === "mock";
            // Mock data has its own synthetic employer and user; the switcher's ids are real ones.
            const employerId = mock ? MOCK_EMPLOYER_ID : b.employerId;
            const externalUserId = mock ? MOCK_EXTERNAL_USER_ID : b.externalUserId;
            if (!employerId || !externalUserId) {
                return error(400, "invalid_request", "employerId and externalUserId are required");
            }
            return {
                path: "/sessions",
                body: {
                    employerId,
                    user: { externalUserId },
                    sessionType: "employer",
                    components: EMPLOYER_COMPONENTS,
                    scopes: EMPLOYER_SCOPES,
                    // This demo has no real sign-in, so report the assurance honestly.
                    // A real host app passes how and when its user actually authenticated.
                    assurance: {
                        method: "unknown",
                        authenticatedAt: new Date().toISOString(),
                    },
                    hostOrigin: origin,
                    ttlSeconds: 900,
                },
            };
        }
        default:
            return error(400, "invalid_request", "Unknown action");
    }
}

// Important: in a real app, protect this route and derive the employer/user from the
// signed-in user rather than trusting the request body.
export async function action({ request }: ActionFunctionArgs) {
    if (request.method !== "POST") return error(405, "method_not_allowed", "POST only");

    // Same-origin only: the browser's Origin header must match where we are served from.
    const from = request.headers.get("origin");
    if (from && from !== new URL(request.url).origin) {
        return error(403, "cross_origin", "Session route is same-origin only");
    }

    const b = (await request.json().catch(() => ({}))) as SessionRouteBody;
    const origin = hostOrigin(request);
    const call = payrooCall(b, origin);
    if (call instanceof Response) return call;

    const init = (key: string): RequestInit => ({
        method: "POST",
        headers: {
            "x-api-key": key,
            "content-type": "application/json",
            "idempotency-key": crypto.randomUUID(),
        },
        body: call.body === undefined ? undefined : JSON.stringify(call.body),
    });

    try {
        if (EMBEDDED_MODE === "mock") {
            const backend = createMockBackend({
                frameOrigin: FRAME_ORIGIN,
                apiOrigin: FRAME_ORIGIN,
                extraOrigins: [origin],
            });
            const res = await backend.handle(
                new Request(`http://mock.local/v1/embedded${call.path}`, init(PARTNER_ZERO_CREDENTIAL)),
            );
            return json(res.status, await res.json());
        }

        const apiKey = process.env.PAYROO_API_KEY;
        if (!apiKey) {
            return error(501, "unconfigured", "PAYROO_API_KEY is not set");
        }
        const apiUrl =
            process.env.PAYROO_API_URL ||
            "https://sandbox.payroo.com.au/api/v1/embedded";
        const res = await fetch(`${apiUrl}${call.path}`, init(apiKey));
        const text = await res.text();
        try {
            return json(res.status, JSON.parse(text));
        } catch {
            // Non-JSON error body (e.g. a 404 page while the API isn't deployed).
            return error(
                res.ok ? 502 : res.status,
                "upstream_error",
                text.slice(0, 500) || res.statusText,
            );
        }
    } catch (err) {
        console.error("Error calling Payroo session route:", err);
        return error(502, "upstream_unreachable", "Could not reach Payroo");
    }
}
