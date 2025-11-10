import { SidebarProvider } from "~/components/ui/sidebar";
import { DriverManagementSidebar } from "~/components/driver-management-sidebar";

export function Welcome() {
  return (
    <SidebarProvider>
      <DriverManagementSidebar />
    </SidebarProvider>
  );
}
