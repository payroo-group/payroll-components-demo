"use client";

import {
    SidebarProvider,
    SidebarInset,
    SidebarTrigger,
} from "~/components/ui/sidebar";
import { HRManagementSidebar } from "~/components/hr-management-sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { ViewReport } from "@payroo-group/embed-sdk-react";
import { useSession } from "~/hooks/use-session";
import { usePayrollComponent } from "~/hooks/use-payroll-component";

export function ReportsPage() {
    const { accountId, userId } = useSession();
    const { getEmbedUrl } = usePayrollComponent(accountId, userId);
    return (
        <SidebarProvider>
            <HRManagementSidebar />
            <SidebarInset>
                <header className="flex h-16 items-center gap-2 border-b px-4">
                    <SidebarTrigger />
                    <h1 className="text-lg font-semibold">HR Reports</h1>
                </header>
                <main className="flex-1 p-6">
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold">HR Analytics & Reports</h2>
                        <p className="text-muted-foreground mt-2">
                            Access payroll reports, employee analytics, payslips, and comprehensive HR documentation
                        </p>
                    </div>
                    {/* Tabs Navigation */}
                    <Tabs defaultValue="payroll-summary" className="w-full">
                        <TabsList className="w-full h-auto flex flex-wrap justify-start gap-0 bg-transparent p-0 border-b border-border">
                            <TabsTrigger
                                value="payroll-summary"
                                className="rounded-none border-0 border-b-2 border-b-transparent data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2"
                            >
                                Payroll Summary
                            </TabsTrigger>
                            <TabsTrigger
                                value="payroll-variance"
                                className="rounded-none border-0 border-b-2 border-b-transparent data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2"
                            >
                                Payroll Variance
                            </TabsTrigger>
                            <TabsTrigger
                                value="finalisations"
                                className="rounded-none border-0 border-b-2 border-b-transparent data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2"
                            >
                                Finalisations
                            </TabsTrigger>
                            <TabsTrigger
                                value="leave-balances"
                                className="rounded-none border-0 border-b-2 border-b-transparent data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2"
                            >
                                Leave Balances
                            </TabsTrigger>
                            <TabsTrigger
                                value="super-contributions"
                                className="rounded-none border-0 border-b-2 border-b-transparent data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2"
                            >
                                Super Contributions
                            </TabsTrigger>

                        </TabsList>

                        {/* Payroll Summary Tab */}
                        <TabsContent value="payroll-summary">
                            <ViewReport
                                getEmbedUrl={getEmbedUrl}
                                reportType="summary"
                                options={{
                                    autoHeightAdjust: true,
                                    extraAllowedOrigins: ["https://sandbox-embed.payroo.com.au"],
                                }}
                            />
                        </TabsContent>

                        {/* Payroll Variance Tab */}
                        <TabsContent value="payroll-variance">
                            <ViewReport
                                getEmbedUrl={getEmbedUrl}
                                reportType="variance"
                                options={{
                                    autoHeightAdjust: true,
                                    extraAllowedOrigins: ["https://sandbox-embed.payroo.com.au"],
                                }}
                            />
                        </TabsContent>

                        {/* Finalisations Tab */}
                        <TabsContent value="finalisations">
                            <ViewReport
                                getEmbedUrl={getEmbedUrl}
                                reportType="finalisations"
                                options={{
                                    autoHeightAdjust: true,
                                    extraAllowedOrigins: ["https://sandbox-embed.payroo.com.au"],
                                }}
                            />
                        </TabsContent>

                        {/* Leave Balances Tab */}
                        <TabsContent value="leave-balances">
                            <ViewReport
                                getEmbedUrl={getEmbedUrl}
                                reportType="leaves"
                                options={{
                                    autoHeightAdjust: true,
                                    extraAllowedOrigins: ["https://sandbox-embed.payroo.com.au"],
                                }}
                            />
                        </TabsContent>

                        {/* Super Contributions Tab */}
                        <TabsContent value="super-contributions">
                            <ViewReport
                                getEmbedUrl={getEmbedUrl}
                                reportType="super"
                                options={{
                                    autoHeightAdjust: true,
                                    extraAllowedOrigins: ["https://sandbox-embed.payroo.com.au"],
                                }}
                            />
                        </TabsContent>
                    </Tabs>
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}
