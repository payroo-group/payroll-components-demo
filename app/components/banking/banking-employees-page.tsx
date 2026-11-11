"use client";

import { Employees } from "@payroo-group/embedded-react";
import { EmbeddedPayroll } from "~/components/embedded-payroll";
import { PRODUCT_THEMES } from "~/lib/embedded-config";
import { Button } from "~/components/ui/button";
import { UserPlus } from "lucide-react";

export function BankingEmployeesPage() {
    return (
        <div className="p-6">
                    <div className="mb-6 flex items-start justify-between">
                        <div>
                            <h2 className="text-3xl font-bold">Employees</h2>
                            <p className="text-muted-foreground mt-2">
                                View and manage your employee directory
                            </p>
                        </div>
                        <Button className="bg-[#002e9b] hover:bg-[#153fa3]">
                            <UserPlus className="mr-2 h-4 w-4" />
                            Onboard Employee
                        </Button>
                    </div>

                    <div id="employees-container">
                        <EmbeddedPayroll theme={PRODUCT_THEMES.banking}>
                            <Employees />
                        </EmbeddedPayroll>
                    </div>
        </div>
    );
}

