"use client";

import { Calendar } from "@payroo-group/embedded-react";
import { EmbeddedPayroll } from "~/components/embedded-payroll";
import { PRODUCT_THEMES } from "~/lib/embedded-config";

export function HRCalendarPage() {
    return (
        <div className="p-6">
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold">Employee Schedule & Calendar</h2>
                        <p className="text-muted-foreground mt-2">
                            Manage employee schedules, leave, and appointments
                        </p>
                    </div>
                    <div id="hr-calendar-component-container">
                        <EmbeddedPayroll theme={PRODUCT_THEMES.hr}>
                            <Calendar />
                        </EmbeddedPayroll>
                    </div>
        </div>
    );
}

