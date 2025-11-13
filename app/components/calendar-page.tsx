"use client";

import { Calendar as CalendarIcon } from "lucide-react";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "~/components/ui/sidebar";
import { HRManagementSidebar } from "~/components/hr-management-sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export function CalendarPage() {
  return (
    <SidebarProvider>
      <HRManagementSidebar />
      <SidebarInset>
        <header className="flex h-16 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <h1 className="text-lg font-semibold">Calendar</h1>
        </header>
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h2 className="text-3xl font-bold">Employee Calendar</h2>
            <p className="text-muted-foreground mt-2">
              Manage employee schedules, shifts, time off, and appointments
            </p>
          </div>

          {/* Placeholder for Embedded Calendar Component */}
          <Card className="min-h-[700px]">
            <CardHeader>
              <CardTitle>Schedule Calendar</CardTitle>
              <CardDescription>
                View and manage employee schedules and time off requests
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center min-h-[600px]">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center">
                  <CalendarIcon className="h-10 w-10 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Employee Calendar System
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-md">
                    This section displays your employee calendar and schedule
                    management system. Add your custom calendar view, schedule
                    management, time off requests, or appointment booking system here.
                  </p>
                </div>
                <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                  <code className="text-sm text-muted-foreground">
                    {`{/* Add your embedded calendar component here */}`}
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
