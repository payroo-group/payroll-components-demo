"use client";

import { History } from "lucide-react";
import { Link, useNavigate, useSearchParams } from "react-router";
import { RunPayroll } from "@payroo-group/embedded-react";
import { EmbeddedPayroll } from "~/components/embedded-payroll";
import { PRODUCT_THEMES } from "~/lib/embedded-config";
import { Button } from "~/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { useState } from "react";

export function DriverPayrollPage() {
    const navigate = useNavigate();
    const [query] = useSearchParams();
    const [setupRequired] = useState(query.get("onboarded") !== "true");
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
                        <EmbeddedPayroll theme={PRODUCT_THEMES.driverFleet}>
                            <RunPayroll />
                        </EmbeddedPayroll>
                    </div>
        </div>
    );
}

