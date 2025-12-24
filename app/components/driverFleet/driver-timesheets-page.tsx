"use client";

import {
    Download, Calendar
} from "lucide-react";
import {
    SidebarProvider,
    SidebarInset,
    SidebarTrigger,
} from "~/components/ui/sidebar";
import { DriverManagementSidebar } from "~/components/driverFleet/driver-management-sidebar";
import { Button } from "~/components/ui/button";
import { usePayrollComponent } from "~/hooks/use-payroll-component";
import { useSession } from "~/hooks/use-session";
import { EmbedContainer } from "@payroo-group/embed-sdk-react";
import { Await } from "react-router";
import { Components } from "@payroo-group/embed-sdk";
import { Suspense, useMemo } from "react";

export function DriverTimesheetsPage() {
    const { accountId, userId } = useSession();
    const { getEmbedUrl } = usePayrollComponent(accountId, userId);

    const url = useMemo(() => {
        return getEmbedUrl(Components.TIMESHEET_LIST, { showFilter: true });
    }, [getEmbedUrl]);

    return (
        <SidebarProvider>
            <DriverManagementSidebar />
            <SidebarInset>
                <header className="flex h-16 items-center gap-2 border-b px-4">
                    <SidebarTrigger />
                    <h1 className="text-lg font-semibold">Driver Timesheets</h1>
                </header>
                <main className="flex-1 p-6">
                    <div className="mb-6 flex items-start justify-between">
                        <div>
                            <h2 className="text-3xl font-bold">Driver Timesheets</h2>
                            <p className="text-muted-foreground mt-2">
                                Track and manage driver work hours and attendance
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                                <Calendar className="mr-2 h-4 w-4" />
                                Select Period
                            </Button>
                            <Button size="sm">
                                <Download className="mr-2 h-4 w-4" />
                                Export
                            </Button>
                        </div>
                    </div>

                    <div id="payroll-embed-container"> </div>
                    <Suspense fallback={<div className="embed-loading">Loading...</div>}>
                        <Await resolve={url}>
                            {(url) => (
                                <EmbedContainer
                                    url={url}
                                    id="driver-timesheets"
                                    options={{
                                        autoHeightAdjust: true,
                                        extraAllowedOrigins: [
                                            "https://sandbox-embed.payroo.com.au",
                                        ],
                                    }}
                                />
                            )}
                        </Await>
                    </Suspense>
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}

