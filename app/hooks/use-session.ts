import * as React from "react";

// Default static session identifiers for testing; override via VITE_SESSION_* env vars
// or at runtime through the session switcher UI (persisted to localStorage).
const DEFAULT_ACCOUNT_ID = "78cc8d2b-8cae-4cbe-ba00-1103a275e1a8";
const DEFAULT_USER_ID = "b99a803d-7bfe-4111-ac03-a71b15f77c9f";

const STORAGE_KEY = "payroo-demo-session";

export interface SessionValues {
    accountId: string;
    userId: string;
}

const ENV_SESSION: SessionValues = {
    accountId: import.meta.env.VITE_SESSION_ACCOUNT_ID || DEFAULT_ACCOUNT_ID,
    userId: import.meta.env.VITE_SESSION_USER_ID || DEFAULT_USER_ID,
};

function readStoredSession(): SessionValues | null {
    if (typeof window === "undefined") return null;
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        if (
            typeof parsed?.accountId === "string" &&
            parsed.accountId &&
            typeof parsed?.userId === "string" &&
            parsed.userId
        ) {
            return { accountId: parsed.accountId, userId: parsed.userId };
        }
    } catch {
        // Ignore corrupt storage and fall back to env/defaults.
    }
    return null;
}

let stored: SessionValues | null = readStoredSession();
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
}

function getSnapshot(): SessionValues | null {
    return stored;
}

function getServerSnapshot(): SessionValues | null {
    return null;
}

export function setSession(values: SessionValues) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
    stored = values;
    listeners.forEach((listener) => listener());
}

export function resetSession() {
    window.localStorage.removeItem(STORAGE_KEY);
    stored = null;
    listeners.forEach((listener) => listener());
}

export function useSession() {
    const storedValues = React.useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot
    );
    return {
        ...(storedValues ?? ENV_SESSION),
        /** True when the current values come from localStorage rather than env/defaults. */
        isCustomized: storedValues !== null,
        setSession,
        resetSession,
    };
}
