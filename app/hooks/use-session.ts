// Default static session identifiers for testing; override via VITE_SESSION_* env vars.
const DEFAULT_ACCOUNT_ID = "78cc8d2b-8cae-4cbe-ba00-1103a275e1a8";
const DEFAULT_USER_ID = "b99a803d-7bfe-4111-ac03-a71b15f77c9f";

const SESSION_ACCOUNT_ID =
    import.meta.env.VITE_SESSION_ACCOUNT_ID || DEFAULT_ACCOUNT_ID;
const SESSION_USER_ID =
    import.meta.env.VITE_SESSION_USER_ID || DEFAULT_USER_ID;

export function useSession() {
    return { accountId: SESSION_ACCOUNT_ID, userId: SESSION_USER_ID };
}
