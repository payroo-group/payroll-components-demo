"use client";

import {
  ClipboardList,
  Download,
  Filter,
  Search,
  Calendar,
} from "lucide-react";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "~/components/ui/sidebar";
import { DriverManagementSidebar } from "~/components/driver-management-sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export function TimesheetsPage() {
  return (
    <SidebarProvider>
      <DriverManagementSidebar />
      <SidebarInset>
        <header className="flex h-16 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <h1 className="text-lg font-semibold">Timesheets</h1>
        </header>
        <main className="flex-1 p-6">
          <div className="mb-6 flex items-start justify-between">
            <div>
              <h2 className="text-3xl font-bold">Driver Timesheets</h2>
              <p className="text-muted-foreground mt-2">
                Track and manage driver work hours and attendance
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Calendar className="mr-2 h-4 w-4" />
                Select Period
              </Button>
              <Button size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          {/* Placeholder for Embedded Timesheets Component */}
          <Card className="min-h-[600px]">
            <CardHeader>
              <CardTitle>Timesheet Management</CardTitle>
              <CardDescription>
                Embedded timesheets component will be added here
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center min-h-[500px]">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center">
                  <ClipboardList className="h-10 w-10 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Embedded Timesheets Placeholder
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-md">
                    This section is reserved for your embedded timesheets
                    component. Add time tracking, work hours management, shift
                    scheduling, and attendance records here.
                  </p>
                </div>
                <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                  <code className="text-sm text-muted-foreground">
                    {`{/* Add your embedded timesheets component here */}`}
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
