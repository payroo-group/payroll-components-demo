"use client";

import {
    SidebarProvider,
    SidebarInset,
    SidebarTrigger,
} from "~/components/ui/sidebar";
import { BankingSidebar } from "~/components/banking-sidebar";
import { usePayrollComponent } from "~/hooks/use-payroll-component";
import { useSession } from "~/hooks/use-session";
import { ViewReport } from "@payroo-group/embed-sdk-react";

export function BankingSuperBatchesPage() {
    const { accountId, userId } = useSession();
    const { getEmbedUrl } = usePayrollComponent(accountId, userId);

  

    return (
        <SidebarProvider>
            <BankingSidebar />
            <SidebarInset>
                <header className="flex h-16 items-center gap-2 border-b px-4">
                    <SidebarTrigger />
                    <h1 className="text-lg font-semibold">NeoBank Business</h1>
                </header>
                <main className="flex-1 p-6">
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold">Super Batches</h2>
                        <p className="text-muted-foreground mt-2">
                            Manage superannuation contribution batches and payments
                        </p>
                    </div>

                    <div id="super-batches-container">
                        <ViewReport
                            getEmbedUrl={getEmbedUrl}
                            reportType="super"
                            options={{
                                autoHeightAdjust: true,
                                extraAllowedOrigins: [
                                    "https://sandbox-embed.payroo.com.au",
                                ],
                            }}
                        />
                    </div>
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}

