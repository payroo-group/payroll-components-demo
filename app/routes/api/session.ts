import type { ActionFunctionArgs } from "react-router";

/**
 * [docs](https://docs.payroo.com.au/guide/embedding-payroll-components/getting-started)
 * Creates a new Payroo embed session
 */
async function createSession(account: string, user: string, userName: string) {
    const apiKey = process.env.PAYROO_API_KEY;
    if (!apiKey) {
        throw new Error("PAYROO_API_KEY is not set in environment variables");
    }

    const apiUrl =
        process.env.PAYROO_API_URL || "https://sandbox-embed.payroo.com.au/api";
    const response = await fetch(`${apiUrl}/embed/session`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": apiKey,
        },
        body: JSON.stringify({
            account: {
                id: account, // Example: d56d3914-faaa-49d4-b23b-56393ac4c5f2
            },
            user: {
                id: user, // Example: 8ba609ea-5d82-4e03-b7be-1601f2c72254
                name: userName,
            },
            allowOrigin: process.env.APP_ORIGIN, // Adjust this to your frontend origin
        }),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to create Payroo session: ${errorText}`);
    }

    return await response.json();
}

// Action function to handle session creation requests
// Expects a JSON body with 'account' and 'user' fields
// Example request body:
// {
//     "account": "d56d3914-faaa-49d4-b23b-56393ac4c5f2",
//     "user": "8ba609ea-5d82-4e03-b7be-1601f2c72254"
//     "userName": "John Doe"
// }
// Returns the created session as JSON
// Important: Ensure that the PAYROO_API_KEY environment variable is set
// Ensure that this route is protected and only accessible to authorized users
export async function action({ request }: ActionFunctionArgs) {
    const { account, user, userName } = await request.json();
    try {
        const session = await createSession(account, user, userName);
        return new Response(JSON.stringify(session), {
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error creating Payroo session:", error);
        return new Response(JSON.stringify({ error: "Failed to create session" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
