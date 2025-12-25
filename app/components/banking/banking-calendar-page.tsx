"use client";

import { usePayrollComponent } from "~/hooks/use-payroll-component";
import { useSession } from "~/hooks/use-session";
import { useEffect } from "react";
import { CalendarComponent } from "@payroo-group/payroll-components";

export function BankingCalendarPage() {
    const { accountId, userId } = useSession();
    const { core } = usePayrollComponent(accountId, userId);

    useEffect(() => {
        const calendar = new CalendarComponent(core, {
            companyId: accountId,
            month: "2025-12",
        });
        calendar.mount("#banking-calendar-container");
    }, [core, accountId]);

    return (
        <div className="p-6">
            <div className="mb-6">
                <h2 className="text-3xl font-bold">Business Calendar</h2>
                <p className="text-muted-foreground mt-2">
                    View payroll dates, payment schedules, and important deadlines
                </p>
            </div>
            <div id="banking-calendar-container" />
        </div>
    );
}

