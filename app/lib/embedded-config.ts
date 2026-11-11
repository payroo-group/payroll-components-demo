// Shared by the session route (server) and the PayrooProvider wrapper (browser).
// VITE_* values are inlined at build time, so both sides always agree.

export type EmbeddedMode = "mock" | "staging";

/**
 * mock    (default): synthetic data from @payroo-group/embedded-mock; no credential, no network
 *         calls to Payroo's API. Frames come from Payroo's hosted mock frame host.
 * staging: Payroo Embedded API at PAYROO_API_URL with PAYROO_API_KEY (server-side).
 */
export const EMBEDDED_MODE: EmbeddedMode =
    import.meta.env.VITE_PAYROO_EMBEDDED_MODE === "staging" ? "staging" : "mock";

/** Mock mode only: where Payroo-origin frames (secure fields, dialogs, PayrooFrame) load from. */
export const FRAME_ORIGIN: string =
    import.meta.env.VITE_PAYROO_FRAME_ORIGIN || "https://payroo-embedded-frame.vercel.app";

/** Staging mode: the API the components call from the browser (with the session token only). */
export const EMBEDDED_API_BASE_URL: string =
    import.meta.env.VITE_PAYROO_EMBEDDED_API_URL ||
    "https://sandbox.payroo.com.au/api/v1/embedded";

/**
 * Brand colour per demo host product, so embedded components match the host app.
 * Same values as --banking-primary / --hr-primary / --driver-primary in
 * app/payroll-components.css (which styles the old SDK only).
 */
export const PRODUCT_THEMES = {
    banking: { colorPrimary: "#002e9b" },
    hr: { colorPrimary: "#0f766e" },
    driverFleet: { colorPrimary: "#7f22fe" },
} as const;

/** Mock mode: the seeded "Demo Cafe" employer and its admin user (Partner Zero). */
export const MOCK_EMPLOYER_ID = "org_pz_1";
export const MOCK_EXTERNAL_USER_ID = "pz-user-admin";
