"use client";

import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import {
    SidebarProvider,
    SidebarInset,
    SidebarTrigger,
} from "~/components/ui/sidebar";
import { HRManagementSidebar } from "~/components/hr-management-sidebar";
import { Button } from "~/components/ui/button";
import { PayrunList } from "@payroo-group/embed-sdk-react";
import { usePayrollComponent } from "~/hooks/use-payroll-component";
import { useSession } from "~/hooks/use-session";

export function PayrollHistoryPage() {
    const navigate = useNavigate();
    const { accountId, userId } = useSession();
    const { getEmbedUrl } = usePayrollComponent(accountId, userId);

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
                        <h2 className="text-3xl font-bold">Historical Payroll Records</h2>
                        <p className="text-muted-foreground mt-2">
                            View and manage past payroll cycles
                        </p>
                    </div>
                    <div id="payroll-embed-container">
                        <PayrunList
                            getEmbedUrl={getEmbedUrl}
                            showStatSummary={false}
                            showFilter={true}
                            startDate="2024-07-01"
                            options={{
                                autoHeightAdjust: true,
                                extraAllowedOrigins: ["https://sandbox-embed.payroo.com.au"],
                            }}
                        />
                    </div>

                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}
