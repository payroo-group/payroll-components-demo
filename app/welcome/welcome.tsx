import { SidebarProvider } from "~/components/ui/sidebar";
import { DriverManagementSidebar } from "~/components/driverFleet/driver-management-sidebar";

export function Welcome() {
  return (
    <SidebarProvider>
      <DriverManagementSidebar />
    </SidebarProvider>
  );
}
