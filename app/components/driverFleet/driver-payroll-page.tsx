"use client";

import { History } from "lucide-react";
import { Link, useNavigate, useSearchParams } from "react-router";
import { PayrunList } from "@payroo-group/embed-sdk-react";
import { Button } from "~/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { useState } from "react";
import { usePayrollComponent } from "~/hooks/use-payroll-component";
import { useSession } from "~/hooks/use-session";

export function DriverPayrollPage() {
    const navigate = useNavigate();
    const [query] = useSearchParams();
    const [setupRequired] = useState(query.get("onboarded") !== "true");
    const { accountId, userId } = useSession();
    const { getEmbedUrl } = usePayrollComponent(accountId, userId);
    return (
        <div className="p-6">
                    <div className="mb-6 flex items-start justify-between">
                        <div>
                            <h2 className="text-3xl font-bold">Run Payroll</h2>
                            <p className="text-muted-foreground mt-2">
                                Manage and process driver salaries and payments
                            </p>
                        </div>
                        <Button onClick={() => navigate("/payroll-history")} hidden={setupRequired}>
                            <History className="mr-2 h-4 w-4" />
                            Payroll History
                        </Button>
                    </div>
                    <Alert variant="default" hidden={!setupRequired}>
                        <AlertTitle>Payroll Setup Required</AlertTitle>
                        <AlertDescription>
                            <p className="my-2">
                                To manage driver payroll, please onboard your business onto your
                                payroll solution. This will enable you to process salaries and
                                payments efficiently.
                            </p>
                            <Link to="/driver-payroll/onboarding">
                                <Button className="cursor-pointer">Enable Payroll</Button>
                            </Link>
                        </AlertDescription>
                    </Alert>
                    <div className="my-6" />

                    <div id="payrun-embed-container" hidden={setupRequired}>
                        <PayrunList
                            getEmbedUrl={getEmbedUrl}
                            showStatSummary={false}
                            showFilter={true}
                            startDate="2025-07-01"
                            options={{
                                autoHeightAdjust: true,
                                extraAllowedOrigins: ["https://sandbox-embed.payroo.com.au"],
                            }}
                        />
                    </div>
        </div>
    );
}

