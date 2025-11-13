// For testing purposes, we define static session identifiers.
const SESSION_ACCOUNT_ID = "78cc8d2b-8cae-4cbe-ba00-1103a275e1a8";
const SESSION_USER_ID = "b99a803d-7bfe-4111-ac03-a71b15f77c9f";

export function useSession() {
    return { accountId: SESSION_ACCOUNT_ID, userId: SESSION_USER_ID };
}
