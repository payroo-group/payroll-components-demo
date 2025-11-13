import { SidebarProvider } from "~/components/ui/sidebar";
import { HRManagementSidebar } from "~/components/hr-management-sidebar";

export function Welcome() {
  return (
    <SidebarProvider>
      <HRManagementSidebar />
    </SidebarProvider>
  );
}
