import { type ActionFunctionArgs } from "react-router";
/**
 * [docs](https://docs.payroo.com.au/guide/embedding-payroll-components/getting-started)
 * Creates a new Payroo embed URL from a session
 */
async function createEmbedURL(sessionId: string, component: string, params: Record<string, any>) {
    const apiKey = process.env.PAYROO_API_KEY;
    if (!apiKey) {
        throw new Error("PAYROO_API_KEY is not set in environment variables");
    }

    const apiUrl =
        process.env.PAYROO_API_URL || "https://sandbox-embed.payroo.com.au/api";
    const response = await fetch(`${apiUrl}/embed/create-url`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": apiKey,
        },
        body: JSON.stringify({
            sessionId,
            component,
            params,
        }),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to create an embed URL: ${errorText}`);
    }

    return await response.json();
}

// Action function to handle embed URL creation requests
// Expects a JSON body with 'sessionId', 'component' and params fields
// Example request body:
// {
//     "sessionId": "abc123sessionid",
//     "component": "list_payruns",
//     "params": {
//         "showStatSummary": false,
//         "showFilter": true
//     }
// }
// Returns the created embed URL in response object
// Important: Ensure that the PAYROO_API_KEY environment variable is set
// Ensure that this route is protected and only accessible to authorized users
export async function action({ request }: ActionFunctionArgs) {
    const { sessionId, component, params } = await request.json();
    try {
        const response = await createEmbedURL(sessionId, component, params);
        return new Response(JSON.stringify(response), {
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error creating an embed URL:", error);
        return new Response(JSON.stringify({ error: "Failed to create an embed URL" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
