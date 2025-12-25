"use client";
import { CompanyOverviewComponent } from "@payroo-group/payroll-components";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Badge } from "~/components/ui/badge";
import { usePayrollComponent } from "~/hooks/use-payroll-component";
import { Button } from "~/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";
import { useSession } from "~/hooks/use-session";

type State = "initial" | "onboarding" | "completed";

export function BankingOnboardPayrollPage() {
    const navigate = useNavigate();
    const [state, setState] = useState<State>("onboarding");
    const { accountId, userId } = useSession();
    const { core } = usePayrollComponent(accountId, userId);

    useEffect(() => {
        if (state === "onboarding") {
            const component = new CompanyOverviewComponent(core, {
                companyId: accountId,
            });
            component.mount("#banking-company-overview-container");
        }
    }, [state]);

    const handleComplete = () => {
        setState("completed");
    };

    return (
        <div className="p-6">
                    <div className="mb-6 flex items-start justify-between">
                        <div>
                            <h2 className="text-3xl font-bold">Setup Payroll</h2>
                            <p className="text-muted-foreground mt-2">
                                Get started by setting up your business payroll system
                            </p>
                        </div>
                        <Badge variant="secondary" className="ml-4">
                            {state === "onboarding" && "Not Enabled"}
                            {state === "completed" && "Payroll Enabled"}
                        </Badge>
                    </div>
                    {(() => {
                        switch (state) {
                            case "onboarding":
                                return (
                                    <div className="flex flex-col items-center min-h-screen pt-12 gap-1">
                                        <Alert variant="default" className="w-full max-w-lg">
                                            <AlertCircleIcon />
                                            <AlertTitle>Payroll Setup Required</AlertTitle>
                                            <AlertDescription>
                                                It looks like you haven't set up your payroll system
                                                yet. Click the button below to start the onboarding
                                                process.
                                            </AlertDescription>
                                        </Alert>
                                        <div id="banking-company-overview-container" />
                                        <Button className="bg-[#002e9b] hover:bg-[#153fa3]" onClick={handleComplete}>
                                            Simulate Completion
                                        </Button>
                                    </div>
                                );
                            case "completed":
                                return (
                                    <div className="flex flex-col items-center min-h-screen pt-12">
                                        <p className="mb-6 text-center max-w-md">
                                            Congratulations! You have completed the onboarding
                                            process. You can now access your payroll dashboard.
                                        </p>
                                        <Button className="bg-[#002e9b] hover:bg-[#153fa3]" onClick={() => navigate("/banking/payroll?onboarded=true")}>
                                            Go to Payroll Dashboard
                                        </Button>
                                    </div>
                                );
                            default:
                                return null;
                        }
                    })()}
        </div>
    );
}

