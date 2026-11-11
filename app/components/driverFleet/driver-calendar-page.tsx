"use client";

import { Calendar } from "@payroo-group/embedded-react";
import { EmbeddedPayroll } from "~/components/embedded-payroll";
import { PRODUCT_THEMES } from "~/lib/embedded-config";

export function DriverCalendarPage() {
    return (
        <div className="p-6">
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold">Driver Schedule & Calendar</h2>
                        <p className="text-muted-foreground mt-2">
                            Manage driver schedules, shifts, and appointments
                        </p>
                    </div>
                    <div id="driver-calendar-component-container">
                        <EmbeddedPayroll theme={PRODUCT_THEMES.driverFleet}>
                            <Calendar />
                        </EmbeddedPayroll>
                    </div>
        </div>
    );
}

