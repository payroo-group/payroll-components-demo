"use client";

import { usePayrollComponent } from "~/hooks/use-payroll-component";
import { useSession } from "~/hooks/use-session";
import { EmbedContainer } from "@payroo-group/embed-sdk-react";
import { Suspense } from "react";
import { Await } from "react-router";
import { Components } from "@payroo-group/embed-sdk";

export function BankingSettingsPage() {
    const { accountId, userId } = useSession();
    const { getEmbedUrl } = usePayrollComponent(accountId, userId);

    return (
        <div className="p-6">
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold">Settings</h2>
                        <p className="text-muted-foreground mt-2">
                            Configure payroll settings and preferences
                        </p>
                    </div>

                    <div id="settings-container">
                        <Suspense fallback={<div className="embed-loading">Loading...</div>}>
                            <Await resolve={getEmbedUrl(Components.PAYROLL_SETTINGS)}>
                                {(url) => (
                                    <EmbedContainer
                                        url={url}
                                        id="payroll-settings"
                                        options={{
                                            autoHeightAdjust: true,
                                            extraAllowedOrigins: [
                                                "https://sandbox-embed.payroo.com.au",
                                            ],
                                        }}
                                    />
                                )}
                            </Await>
                        </Suspense>
                    </div>
        </div>
    );
}

