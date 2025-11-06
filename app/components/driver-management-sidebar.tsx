import {
  LayoutDashboard,
  Bell,
  CalendarDays,
  UserCircle,
  UserPlus,
  ClipboardList,
  CircleDot,
  GraduationCap,
  Car,
  Wrench,
  Fuel,
  MapPin,
  DollarSign,
  CreditCard,
  Receipt,
  PieChart,
  Settings,
  Users,
  Building2,
  Lock,
} from "lucide-react";
import { useLocation } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarSeparator,
} from "~/components/ui/sidebar";

export function DriverManagementSidebar() {
  const location = useLocation();
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Car className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Driver Management</span>
            <span className="text-xs text-muted-foreground">Fleet Control</span>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        {/* Overview Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Overview</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={location.pathname === "/dashboard"}>
                  <a href="/dashboard">
                    <LayoutDashboard className="h-4 w-4" />
                    <span>Dashboard</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Bell className="h-4 w-4" />
                  <span>Notifications</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Driver Management Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Driver Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={location.pathname === "/driver-profiles" || location.pathname.startsWith("/driver-detail")}>
                  <a href="/driver-profiles">
                    <UserCircle className="h-4 w-4" />
                    <span>Driver Profiles</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={location.pathname === "/timesheets"}>
                  <a href="/timesheets">
                    <ClipboardList className="h-4 w-4" />
                    <span>Timesheets</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={location.pathname === "/calendar"}>
                  <a href="/calendar">
                    <CalendarDays className="h-4 w-4" />
                    <span>Calendar</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <CircleDot className="h-4 w-4" />
                  <span>Driver Status</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

         {/* Financial Section */}
             <SidebarGroup>
              <SidebarGroupLabel>Financial</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={location.pathname === "/payroll"}>
                      <a href="/payroll">
                        <DollarSign className="h-4 w-4" />
                        <span>Payroll</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <CreditCard className="h-4 w-4" />
                  <span>Expenses</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Receipt className="h-4 w-4" />
                  <span>Invoicing</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={location.pathname === "/reports"}>
                  <a href="/reports">
                    <PieChart className="h-4 w-4" />
                    <span>Reports</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Settings Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Administration</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Users className="h-4 w-4" />
                  <span>User Management</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Building2 className="h-4 w-4" />
                  <span>Company Profile</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Lock className="h-4 w-4" />
                  <span>Security</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

