"use client";

import { Calendar } from "@payroo-group/embedded-react";
import { EmbeddedPayroll } from "~/components/embedded-payroll";
import { PRODUCT_THEMES } from "~/lib/embedded-config";

export function BankingCalendarPage() {
    return (
        <div className="p-6">
            <div className="mb-6">
                <h2 className="text-3xl font-bold">Business Calendar</h2>
                <p className="text-muted-foreground mt-2">
                    View payroll dates, payment schedules, and important deadlines
                </p>
            </div>
            <div id="banking-calendar-container">
                <EmbeddedPayroll theme={PRODUCT_THEMES.banking}>
                    <Calendar />
                </EmbeddedPayroll>
            </div>
        </div>
    );
}

