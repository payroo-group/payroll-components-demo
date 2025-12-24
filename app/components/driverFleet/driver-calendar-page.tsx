"use client";

import {
    SidebarProvider,
    SidebarInset,
    SidebarTrigger,
} from "~/components/ui/sidebar";
import { DriverManagementSidebar } from "~/components/driverFleet/driver-management-sidebar";
import { usePayrollComponent } from "~/hooks/use-payroll-component";
import { useSession } from "~/hooks/use-session";
import { useEffect } from "react";
import { CalendarComponent } from "@payroo-group/payroll-components";

export function DriverCalendarPage() {
    const { accountId, userId } = useSession();
    const { core } = usePayrollComponent(accountId, userId);

    useEffect(() => {
        // Initialize and mount your calendar component here
        const calendar = new CalendarComponent(core, {
            companyId: accountId,
            month: "2025-11",
        });
        calendar.mount("#driver-calendar-component-container");
    }, [core]);

    return (
        <SidebarProvider>
            <DriverManagementSidebar />
            <SidebarInset>
                <header className="flex h-16 items-center gap-2 border-b px-4">
                    <SidebarTrigger />
                    <h1 className="text-lg font-semibold">Driver Calendar</h1>
                </header>
                <main className="flex-1 p-6">
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold">Driver Schedule & Calendar</h2>
                        <p className="text-muted-foreground mt-2">
                            Manage driver schedules, shifts, and appointments
                        </p>
                    </div>
                    <div id="driver-calendar-component-container" />
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}

