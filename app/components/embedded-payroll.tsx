import { useEffect, useState, type ReactNode } from "react";
import {
    createServerSessionAdapter,
    type EmbeddedAdapter,
    type ThemeTokens,
} from "@payroo-group/embedded-core";
import { createMockBackend, type MockBackend } from "@payroo-group/embedded-mock";
import { PayrooProvider } from "@payroo-group/embedded-react";
import { useSession } from "~/hooks/use-session";
import {
    EMBEDDED_API_BASE_URL,
    EMBEDDED_MODE,
    FRAME_ORIGIN,
} from "~/lib/embedded-config";

const SESSION_URL = "/api/embedded/session";

// Mock mode: one in-browser mock per page load. It answers the components' API calls and
// adopts sessions minted by our session route (which uses the same mock package).
let browserMock: MockBackend | null = null;
function getBrowserMock(): MockBackend {
    browserMock ??= createMockBackend({
        frameOrigin: FRAME_ORIGIN,
        apiOrigin: FRAME_ORIGIN,
        extraOrigins: [window.location.origin],
    });
    return browserMock;
}

async function postSession(body: Record<string, unknown>) {
    const res = await fetch(SESSION_URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify(body),
    });
    if (!res.ok) {
        const e = (await res.json().catch(() => ({}))) as {
            error?: { code?: string; message?: string };
        };
        throw new Error(
            e.error?.code
                ? `${e.error.code}: ${e.error.message ?? ""}`
                : `session route failed: ${res.status}`,
        );
    }
    return res.json();
}

function createAdapter(employerId: string, externalUserId: string): EmbeddedAdapter {
    const mock = EMBEDDED_MODE === "mock";
    const base = createServerSessionAdapter({
        mode: EMBEDDED_MODE,
        capabilities: mock ? ["mock", "v1-embedded"] : ["v1-embedded"],
        apiBaseUrl: mock ? `${FRAME_ORIGIN}/v1/embedded` : EMBEDDED_API_BASE_URL,
        sessionUrl: SESSION_URL,
        ...(mock && { fetch: getBrowserMock().fetch }),
    });
    // The stock adapter POSTs only { action }; carry the switcher's employer and user so
    // the session route knows who to mint for.
    return {
        ...base,
        getSession: () => postSession({ action: "mint", employerId, externalUserId }),
        refreshSession: (s) => postSession({ action: "refresh", sessionId: s.sessionId }),
        getBootstrap: (s, opts) =>
            postSession({ action: "bootstrap", sessionId: s.sessionId, ...(opts ?? {}) }),
    };
}

/**
 * Mounts Payroo embedded components for the current demo account/user.
 * Remounts with a fresh session when the session switcher changes them.
 */
export function EmbeddedPayroll({
    children,
    theme,
}: {
    children: ReactNode;
    theme?: ThemeTokens;
}) {
    const { accountId, userId } = useSession();
    // Client only: the adapter (and the mock) need window.
    const [adapter, setAdapter] = useState<EmbeddedAdapter | null>(null);
    useEffect(() => {
        setAdapter(createAdapter(accountId, userId));
    }, [accountId, userId]);

    if (!adapter) {
        return <div aria-busy="true" className="min-h-20" />;
    }
    return (
        <PayrooProvider
            key={`${accountId}:${userId}`}
            adapter={adapter}
            theme={theme}
            onEvent={(e) => console.debug("[payroo]", e.name, e.payload)}
            onThemeIssues={(issues) => console.warn("[payroo] theme", issues)}
        >
            {children}
        </PayrooProvider>
    );
}
