import { UserCircle, Car, Route, AlertTriangle } from "lucide-react";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "~/components/ui/sidebar";
import { DriverManagementSidebar } from "~/components/driver-management-sidebar";

export function Welcome() {
  return (
    <SidebarProvider>
      <DriverManagementSidebar />
      <SidebarInset>
        <header className="flex h-16 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <h1 className="text-lg font-semibold">Driver Management System</h1>
        </header>
        <main className="flex-1 p-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">Fleet Control Dashboard</h2>
            <p className="text-muted-foreground mt-2">
              Manage your drivers, vehicles, and operations from one central hub
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Quick Stats Placeholder */}
            <div className="rounded-lg border bg-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Drivers</p>
                  <p className="text-2xl font-bold mt-2">248</p>
                </div>
                <UserCircle className="h-8 w-8 text-muted-foreground" />
              </div>
            </div>
            
            <div className="rounded-lg border bg-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Vehicles</p>
                  <p className="text-2xl font-bold mt-2">156</p>
                </div>
                <Car className="h-8 w-8 text-muted-foreground" />
              </div>
            </div>
            
            <div className="rounded-lg border bg-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Routes</p>
                  <p className="text-2xl font-bold mt-2">89</p>
                </div>
                <Route className="h-8 w-8 text-muted-foreground" />
              </div>
            </div>
            
            <div className="rounded-lg border bg-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Incidents</p>
                  <p className="text-2xl font-bold mt-2">3</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-muted-foreground" />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-semibold mb-4">Getting Started</h3>
              <p className="text-muted-foreground">
                Use the sidebar to navigate through different sections of the driver management system.
                Start by viewing driver profiles, managing your fleet, or checking operational status.
              </p>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
