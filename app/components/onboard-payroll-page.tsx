"use client";
import { CompanyOverviewComponent } from "@payroo-group/payroll-components";
import { useNavigate } from "react-router";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "~/components/ui/sidebar";
import { DriverManagementSidebar } from "~/components/driver-management-sidebar";
import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { usePayrollComponent } from "~/hooks/use-payroll-component";
import { Button } from "./ui/button";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertCircleIcon } from "lucide-react";

type State = "initial" | "onboarding" | "completed";

const SESSION_ACCOUNT_ID = "78cc8d2b-8cae-4cbe-ba00-1103a275e1a8";
const SESSION_USER_ID = "b99a803d-7bfe-4111-ac03-a71b15f77c9f";

export function OnboardPayrollPage() {
  const navigate = useNavigate();
  const [state, setState] = useState<State>("onboarding");
  const core = usePayrollComponent(SESSION_ACCOUNT_ID, SESSION_USER_ID);

  useEffect(() => {
    if (state === "onboarding") {
      const component = new CompanyOverviewComponent(core, {
        companyId: SESSION_ACCOUNT_ID,
      });
      component.mount("#company-overview-container");
    }
  }, [state]);

  const handleComplete = () => {
    setState("completed");
  };

  return (
    <SidebarProvider>
      <DriverManagementSidebar />
      <SidebarInset>
        <header className="flex h-16 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <h1 className="text-lg font-semibold">Payroll Management</h1>
        </header>
        <main className="flex-1 p-6">
          <div className="mb-6 flex items-start justify-between">
            <div>
              <h2 className="text-3xl font-bold">Enable Payroll</h2>
              <p className="text-muted-foreground mt-2">
                Get started by setting up your payroll system
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
                    <div id="company-overview-container" />
                    <Button onClick={handleComplete}>
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
                    <Button onClick={() => navigate("/payroll?onboarded=true")}>
                      Go to Payroll Dashboard
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
