"use client";
import { CompanyOverviewComponent } from "@payroo-group/payroll-components";
import { useNavigate } from "react-router";
import {
    SidebarProvider,
    SidebarInset,
    SidebarTrigger,
} from "~/components/ui/sidebar";
import { HRManagementSidebar } from "~/components/hr/hr-management-sidebar";
import { useEffect, useState } from "react";
import { Badge } from "~/components/ui/badge";
import { usePayrollComponent } from "~/hooks/use-payroll-component";
import { Button } from "~/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";
import { useSession } from "~/hooks/use-session";

type State = "initial" | "onboarding" | "completed";

export function HROnboardPayrollPage() {
    const navigate = useNavigate();
    const [state, setState] = useState<State>("onboarding");
    const { accountId, userId } = useSession();
    const { core } = usePayrollComponent(accountId, userId);

    useEffect(() => {
        if (state === "onboarding") {
            const component = new CompanyOverviewComponent(core, {
                companyId: accountId,
            });
            component.mount("#hr-company-overview-container");
        }
    }, [state]);

    const handleComplete = () => {
        setState("completed");
    };

    return (
        <SidebarProvider>
            <HRManagementSidebar />
            <SidebarInset>
                <header className="flex h-16 items-center gap-2 border-b px-4">
                    <SidebarTrigger />
                    <h1 className="text-lg font-semibold">Employee Payroll Management</h1>
                </header>
                <main className="flex-1 p-6">
                    <div className="mb-6 flex items-start justify-between">
                        <div>
                            <h2 className="text-3xl font-bold">Enable Employee Payroll</h2>
                            <p className="text-muted-foreground mt-2">
                                Get started by setting up your employee payroll system
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
                                            <AlertTitle>Employee Payroll Setup Required</AlertTitle>
                                            <AlertDescription>
                                                It looks like you haven't set up your employee payroll system
                                                yet. Click the button below to start the onboarding
                                                process.
                                            </AlertDescription>
                                        </Alert>
                                        <div id="hr-company-overview-container" />
                                        <Button onClick={handleComplete} className="bg-[#0f766e] hover:bg-[#0d6559]">
                                            Simulate Completion
                                        </Button>
                                    </div>
                                );
                            case "completed":
                                return (
                                    <div className="flex flex-col items-center min-h-screen pt-12">
                                        <p className="mb-6 text-center max-w-md">
                                            Congratulations! You have completed the onboarding
                                            process. You can now access your employee payroll dashboard.
                                        </p>
                                        <Button onClick={() => navigate("/hr-payroll?onboarded=true")} className="bg-[#0f766e] hover:bg-[#0d6559]">
                                            Go to Employee Payroll Dashboard
                                        </Button>
                                    </div>
                                );
                            default:
                                return null;
                        }
                    })()}
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}

