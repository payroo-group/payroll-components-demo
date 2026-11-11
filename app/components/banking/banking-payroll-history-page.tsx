"use client";

import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "~/components/ui/button";
import { PayrunHistory } from "@payroo-group/embedded-react";
import { EmbeddedPayroll } from "~/components/embedded-payroll";
import { PRODUCT_THEMES } from "~/lib/embedded-config";

export function BankingPayrollHistoryPage() {
    const navigate = useNavigate();

    return (
        <div className="p-6">
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold">Payroll History</h2>
                        <p className="text-muted-foreground mt-2">
                            View and manage past payroll runs for your business
                        </p>
                    </div>
                    <div id="banking-payroll-history-container">
                        <EmbeddedPayroll theme={PRODUCT_THEMES.banking}>
                            <PayrunHistory />
                        </EmbeddedPayroll>
                    </div>
        </div>
    );
}

