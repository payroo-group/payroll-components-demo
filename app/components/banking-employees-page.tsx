"use client";

import {
    SidebarProvider,
    SidebarInset,
    SidebarTrigger,
} from "~/components/ui/sidebar";
import { BankingSidebar } from "~/components/banking-sidebar";
import { usePayrollComponent } from "~/hooks/use-payroll-component";
import { useSession } from "~/hooks/use-session";
import { EmbedContainer } from "@payroo-group/embed-sdk-react";
import { Suspense } from "react";
import { Await } from "react-router";
import { Components } from "@payroo-group/embed-sdk";

export function BankingEmployeesPage() {
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
                        <h2 className="text-3xl font-bold">Employees</h2>
                        <p className="text-muted-foreground mt-2">
                            View and manage your employee directory
                        </p>
                    </div>

                    <div id="employees-container">
                        <Suspense fallback={<div className="embed-loading">Loading...</div>}>
                            <Await resolve={getEmbedUrl(Components.EMPLOYEE_LIST)}>
                                {(url) => (
                                    <EmbedContainer
                                        url={url}
                                        id="employees-list"
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
                    </div>
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}

