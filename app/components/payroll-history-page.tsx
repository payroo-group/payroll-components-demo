"use client";

import { ArrowLeft, Database } from "lucide-react";
import { useNavigate } from "react-router";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "~/components/ui/sidebar";
import { HRManagementSidebar } from "~/components/hr-management-sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";

export function PayrollHistoryPage() {
  const navigate = useNavigate();

  return (
    <SidebarProvider>
      <HRManagementSidebar />
      <SidebarInset>
        <header className="flex h-16 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/payroll")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h1 className="text-lg font-semibold">Payroll History</h1>
        </header>
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h2 className="text-3xl font-bold">Payroll History</h2>
            <p className="text-muted-foreground mt-2">
              View past payroll transactions, payment records, and historical data
            </p>
          </div>

          {/* Placeholder for Embedded Component */}
          <Card className="min-h-[600px]">
            <CardHeader>
              <CardTitle>Payroll Transaction History</CardTitle>
              <CardDescription>
                View detailed payment records and transaction history
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center min-h-[500px]">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center">
                  <Database className="h-10 w-10 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Payroll History Records
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-md">
                    This section displays your payroll transaction history.
                    Add detailed payment records, transaction history,
                    and payroll documentation here.
                  </p>
                </div>
                <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                  <code className="text-sm text-muted-foreground">
                    {`{/* Add your embedded component here */}`}
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
