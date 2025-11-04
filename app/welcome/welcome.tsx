import { UserCircle, Car, Route, AlertTriangle } from "lucide-react";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "~/components/ui/sidebar";
import { DriverManagementSidebar } from "~/components/driver-management-sidebar";

export function Welcome() {
  return (
    <SidebarProvider>
      <DriverManagementSidebar />
      
    </SidebarProvider>
  );
}
