"use client"

import { FileText, Download, Filter, Search } from "lucide-react";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "~/components/ui/sidebar";
import { DriverManagementSidebar } from "~/components/driver-management-sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export function ReportsPage() {
  return (
    <SidebarProvider>
      <DriverManagementSidebar />
      <SidebarInset>
        <header className="flex h-16 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <h1 className="text-lg font-semibold">Reports</h1>
        </header>
        <main className="flex-1 p-6">
          <div className="mb-6 flex items-start justify-between">
            <div>
              <h2 className="text-3xl font-bold">Financial Reports & Payslips</h2>
              <p className="text-muted-foreground mt-2">
                Access payslips, financial reports, and payment documentation
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          {/* Search and Actions */}
          <div className="mb-6 flex gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search reports..."
                className="pl-9"
              />
            </div>
          </div>

          {/* Placeholder for Embedded Payslip/Reports Component */}
          <Card className="min-h-[600px]">
            <CardHeader>
              <CardTitle>Payslips & Financial Reports</CardTitle>
              <CardDescription>Embedded reports component will be added here</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center min-h-[500px]">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center">
                  <FileText className="h-10 w-10 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Embedded Payslip & Reports Placeholder</h3>
                  <p className="text-sm text-muted-foreground max-w-md">
                    This section is reserved for your embedded reports component.
                    Add payslip management, financial reports, payment summaries, and document downloads here.
                  </p>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <code className="text-sm text-muted-foreground">
                      {`{/* Add your embedded reports component here */}`}
                    </code>
                  </div>
                  
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

