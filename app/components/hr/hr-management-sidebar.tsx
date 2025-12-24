import {
    LayoutDashboard,
    Bell,
    CalendarDays,
    UserCircle,
    ClipboardList,
    Briefcase,
    DollarSign,
    CreditCard,
    Receipt,
    PieChart,
    Settings,
    Users,
    Building2,
    Lock,
    ChevronDown,
    Landmark,
    Car,
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
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "~/components/ui/dropdown-menu";
  
  export function HRManagementSidebar() {
    const location = useLocation();
    
    return (
      <Sidebar>
        <SidebarHeader>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex w-full items-center gap-2 px-4 py-3 hover:bg-accent/50 transition-colors rounded-md focus:outline-none">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0f766e] text-white">
              <Users className="h-4 w-4" />
            </div>
              <div className="flex flex-1 flex-col items-start">
              <span className="text-sm font-semibold">HR Management</span>
              <span className="text-xs text-muted-foreground">Workforce Control</span>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-64">
            <div className="px-2 py-1.5">
              <p className="text-sm font-semibold">HR Management</p>
              <p className="text-xs text-muted-foreground">Workforce Control</p>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild className="flex items-center gap-3 py-2 cursor-pointer">
              <a href="/dashboard">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Car className="h-4 w-4" />
                </div>
                <div className="flex flex-1 flex-col">
                  <span className="text-sm font-medium">Driver Management</span>
                  <span className="text-xs text-muted-foreground">Fleet Control</span>
                </div>
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="flex items-center gap-3 py-2 cursor-pointer">
              <a href="/banking">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#002e9b] text-white">
                  <Landmark className="h-4 w-4" />
                </div>
                <div className="flex flex-1 flex-col">
                  <span className="text-sm font-medium">NeoBank</span>
                  <span className="text-xs text-muted-foreground">Banking Demo</span>
          </div>
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <SidebarSeparator />
        </SidebarHeader>
  
        <SidebarContent>
          {/* Overview Section */}
          <SidebarGroup>
            <SidebarGroupLabel>Overview</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === "/hr-dashboard"}
                  >
                    <a href="/hr-dashboard">
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
  
          {/* Employee Management Section */}
          <SidebarGroup>
            <SidebarGroupLabel>Employee Management</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={
                      location.pathname === "/employee-profiles" ||
                      location.pathname.startsWith("/employee-detail")
                    }
                  >
                    <a href="/employee-profiles">
                      <UserCircle className="h-4 w-4" />
                      <span>Employees</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === "/hr-timesheets"}
                  >
                    <a href="/hr-timesheets">
                      <ClipboardList className="h-4 w-4" />
                      <span>Timesheets</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === "/hr-calendar"}
                  >
                    <a href="/hr-calendar">
                      <CalendarDays className="h-4 w-4" />
                      <span>Calendar</span>
                    </a>
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
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === "/hr-payroll"}
                  >
                    <a href="/hr-payroll">
                      <DollarSign className="h-4 w-4" />
                      <span>Payroll</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === "/hr-reports"}
                  >
                    <a href="/hr-reports">
                      <PieChart className="h-4 w-4" />
                      <span>Reports</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <CreditCard className="h-4 w-4" />
                    <span>Benefits</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Receipt className="h-4 w-4" />
                    <span>Compensation</span>
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
                    <span>Roles & Permissions</span>
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
  