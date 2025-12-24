"use client";

import { History, Users, FileText } from "lucide-react";
import { Link, useNavigate, useSearchParams } from "react-router";
import { PayrunList } from "@payroo-group/embed-sdk-react";
import {
    SidebarProvider,
    SidebarInset,
    SidebarTrigger,
} from "~/components/ui/sidebar";
import { BankingSidebar } from "~/components/banking/banking-sidebar";
import { Button } from "~/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { useState } from "react";
import { usePayrollComponent } from "~/hooks/use-payroll-component";
import { useSession } from "~/hooks/use-session";

export function BankingPayrollPage() {
    const navigate = useNavigate();
    const [query] = useSearchParams();
    const [setupRequired] = useState(query.get("onboarded") !== "true");
    const { accountId, userId } = useSession();
    const { getEmbedUrl } = usePayrollComponent(accountId, userId);

    return (
        <SidebarProvider>
            <BankingSidebar />
            <SidebarInset>
                <header className="flex h-16 items-center gap-2 border-b px-4">
                    <SidebarTrigger />
                    <h1 className="text-lg font-semibold">NeoBank Business</h1>
                </header>
                <main className="flex-1 p-6">
                    <div className="mb-6 flex items-start justify-between">
                        <div>
                            <h2 className="text-3xl font-bold">Run Payroll</h2>
                            <p className="text-muted-foreground mt-2">
                                Process employee salaries and manage payroll for your business
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" onClick={() => navigate("#")} hidden={setupRequired}>
                                <Users className="mr-2 h-4 w-4" />
                                Employees
                            </Button>
                            <Button variant="outline" onClick={() => navigate("#")} hidden={setupRequired}>
                                <History className="mr-2 h-4 w-4" />
                                History
                            </Button>
                        </div>
                    </div>

                    <Alert variant="default" hidden={!setupRequired}>
                        <AlertTitle>Payroll Setup Required</AlertTitle>
                        <AlertDescription>
                            <p className="my-2">
                                To run payroll for your employees, please complete the payroll
                                setup process. This will enable you to process salaries, manage
                                tax withholdings, and handle direct deposits.
                            </p>
                            <Link to="/payroll/onboarding">
                                <Button className="cursor-pointer">Setup Payroll</Button>
                            </Link>
                        </AlertDescription>
                    </Alert>

                    <div className="my-6" />

                    <div id="banking-payrun-container" hidden={setupRequired}>
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
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}

