"use client";

import { History, Database } from "lucide-react";
import { Link, useNavigate, useSearchParams } from "react-router";
import { PayrunList } from "@payroo-group/embed-sdk-react";
import {
    SidebarProvider,
    SidebarInset,
    SidebarTrigger,
} from "~/components/ui/sidebar";
import { DriverManagementSidebar } from "~/components/driver-management-sidebar";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { useState } from "react";
import { usePayrollComponent } from "~/hooks/use-payroll-component";
import { useSession } from "~/hooks/use-session";

export function PayrollPage() {
    const navigate = useNavigate();
    const [query] = useSearchParams();
    const [setupRequired] = useState(query.get("onboarded") !== "true");
    const { accountId, userId } = useSession();
    const { getEmbedUrl } = usePayrollComponent(accountId, userId);
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
                            <Link to="/payroll/onboarding">
                                <Button className="cursor-pointer">Enable Payroll</Button>
                            </Link>
                        </AlertDescription>
                    </Alert>
                    <div className="my-6" />

                    <div id="payrun-embed-container" hidden={!setupRequired}>
                        <PayrunList
                            getEmbedUrl={getEmbedUrl}
                            showStatSummary={true}
                            showFilter={true}
                        />
                    </div>

                    {/* Placeholder for Embedded Component */}
                    <Card className="min-h-[600px]" hidden={setupRequired}>
                        <CardHeader>
                            <CardTitle>Run Payroll</CardTitle>
                            <CardDescription>
                                Embedded component will be added here
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center justify-center min-h-[500px]">
                            <div className="flex flex-col items-center gap-4 text-center">
                                <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center">
                                    <Database className="h-10 w-10 text-muted-foreground" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        Embedded Component Placeholder
                                    </h3>
                                    <p className="text-sm text-muted-foreground max-w-md">
                                        This section is reserved for your embedded current payroll
                                        component. Replace this placeholder with your custom payroll
                                        data component when ready.
                                    </p>
                                </div>
                                <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                                    <code className="text-sm text-muted-foreground">
                                        {`{/* Add your embedded payroll component here */}`}
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
