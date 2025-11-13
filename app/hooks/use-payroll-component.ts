import type { Components, ComponentSchemaMap } from "@payroo-group/embed-sdk";
import { PayrollComponents } from "@payroo-group/payroll-components";
import { useCallback, useMemo, useState } from "react";
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
    component: Components,
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

export function usePayrollComponent(accountId: string, userId: string) {
    const [sessionId, setSessionId] = useState<string | null>(null);
    const onSessionCreate = useCallback(async () => {
        const session = await createSession(accountId, userId);
        setSessionId(session.id);

        return session;
    }, [accountId, userId]);

    const onCreateEmbedURL = useMemo(
        () => createEmbedURL.bind(null, sessionId ?? ""),
        [sessionId],
    );

    const [core] = useState(
        new PayrollComponents({
            environment: "sandbox",
            onSessionCreate,
        }),
    );

    return { core, getEmbedUrl: onCreateEmbedURL };
}
