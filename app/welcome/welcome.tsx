import {
  LayoutDashboard,
  Bell,
  TrendingUp,
  UserCircle,
  UserPlus,
  Award,
  CircleDot,
  GraduationCap,
  Car,
  Wrench,
  Fuel,
  MapPin,
  Route,
  Calendar,
  Package,
  Clock,
  AlertTriangle,
  FileText,
  Shield,
  CheckCircle,
  FileSignature,
  Search,
  DollarSign,
  CreditCard,
  Receipt,
  PieChart,
  MessageSquare,
  PhoneCall,
  Megaphone,
  Settings,
  Users,
  Building2,
  Lock,
} from "lucide-react";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
  SidebarHeader,
  SidebarSeparator,
} from "~/components/ui/sidebar";

export function Welcome() {
  return (
    <SidebarProvider>
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
                  <SidebarMenuButton isActive={true}>
                    <LayoutDashboard className="h-4 w-4" />
                    <span>Dashboard</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Bell className="h-4 w-4" />
                    <span>Notifications</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <TrendingUp className="h-4 w-4" />
                    <span>Analytics</span>
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
                  <SidebarMenuButton>
                    <UserCircle className="h-4 w-4" />
                    <span>Driver Profiles</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <UserPlus className="h-4 w-4" />
                    <span>Add New Driver</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Award className="h-4 w-4" />
                    <span>Performance</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <CircleDot className="h-4 w-4" />
                    <span>Driver Status</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <GraduationCap className="h-4 w-4" />
                    <span>Training & Certs</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarSeparator />

          {/* Vehicle Management Section */}
          <SidebarGroup>
            <SidebarGroupLabel>Vehicle Management</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Car className="h-4 w-4" />
                    <span>Fleet Overview</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Wrench className="h-4 w-4" />
                    <span>Maintenance</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Fuel className="h-4 w-4" />
                    <span>Fuel Management</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <MapPin className="h-4 w-4" />
                    <span>GPS Tracking</span>
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
                  <SidebarMenuButton>
                    <DollarSign className="h-4 w-4" />
                    <span>Payroll</span>
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
                  <SidebarMenuButton>
                    <PieChart className="h-4 w-4" />
                    <span>Financial Reports</span>
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
