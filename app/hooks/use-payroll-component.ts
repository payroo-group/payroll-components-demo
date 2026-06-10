import type { Components, ComponentSchemaMap } from "@payroo-group/embed-sdk";
import { PayrollComponents } from "@payroo-group/payroll-components";
import { useCallback, useMemo, useRef } from "react";
// Note: This function does not call Payroo API directly; it calls our own API route
// which in turn calls Payroo API with the necessary authentication
// This is to keep the Payroo API key secure and not exposed on the client side
const createSession = async (accountId: string, userId: string) => {
    const response = await fetch("/api/session", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            account: accountId,
            user: userId,
            userName: "Embedded User", // You can customize the user name as needed
        }),
    });

    if (!response.ok) {
        throw new Error("Failed to create Payroo session");
    }

    return await response.json();
};

// Note: This function does not call Payroo API directly; it calls our own API route
// which in turn calls Payroo API with the necessary authentication
// This is to keep the Payroo API key secure and not exposed on the client side
const createEmbedURL = async <K extends Components>(
    sessionId: string,
    component: K,
    params?: ComponentSchemaMap[K],
) => {
    const response = await fetch("/api/embed-url", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            sessionId,
            component,
            params,
        }),
    });

    if (!response.ok) {
        throw new Error("Failed to create embed URL");
    }

    return await response.json();
};

type Session = Awaited<ReturnType<typeof createSession>>;

export function usePayrollComponent(accountId: string, userId: string) {
    // Pass as `key` to embed components so they remount (and reload their
    // iframe) when the session account/user changes.
    const sessionKey = `${accountId}:${userId}`;

    // Session promise cached per account/user pair: created lazily on first use,
    // shared between concurrent callers, and replaced when the pair changes.
    const sessionRef = useRef<{ key: string; promise: Promise<Session> } | null>(
        null,
    );

    const onSessionCreate = useCallback(() => {
        const key = `${accountId}:${userId}`;
        if (sessionRef.current?.key !== key) {
            const promise = createSession(accountId, userId);
            promise.catch(() => {
                // Don't cache failures; the next call retries.
                if (sessionRef.current?.promise === promise) {
                    sessionRef.current = null;
                }
            });
            sessionRef.current = { key, promise };
        }
        return sessionRef.current.promise;
    }, [accountId, userId]);

    const onCreateEmbedURL = useCallback(
        async <K extends Components>(
            component: K,
            params?: ComponentSchemaMap[K],
        ) => {
            const session = await onSessionCreate();
            const response = await createEmbedURL(session.id, component, params);
            return response.url;
        },
        [onSessionCreate],
    );

    const core = useMemo(
        () =>
            new PayrollComponents({
                environment: "sandbox",
                onSessionCreate,
            }),
        [onSessionCreate],
    );

    return { core, getEmbedUrl: onCreateEmbedURL, sessionKey };
}
