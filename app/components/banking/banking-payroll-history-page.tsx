"use client";

import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "~/components/ui/button";
import { PayrunList } from "@payroo-group/embed-sdk-react";
import { usePayrollComponent } from "~/hooks/use-payroll-component";
import { useSession } from "~/hooks/use-session";

export function BankingPayrollHistoryPage() {
    const navigate = useNavigate();
    const { accountId, userId } = useSession();
    const { getEmbedUrl } = usePayrollComponent(accountId, userId);

    return (
        <div className="p-6">
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold">Payroll History</h2>
                        <p className="text-muted-foreground mt-2">
                            View and manage past payroll runs for your business
                        </p>
                    </div>
                    <div id="banking-payroll-history-container">
                        <PayrunList
                            getEmbedUrl={getEmbedUrl}
                            showStatSummary={false}
                            showFilter={true}
                            startDate="2024-07-01"
                            options={{
                                autoHeightAdjust: true,
                                extraAllowedOrigins: ["https://sandbox-embed.payroo.com.au"],
                            }}
                        />
                    </div>
        </div>
    );
}

