import {
  LayoutDashboard,
  Bell,
  Landmark,
  CreditCard,
  Wallet,
  ArrowLeftRight,
  Send,
  Receipt,
  FileText,
  Settings,
  Users,
  Shield,
  HelpCircle,
  ChevronDown,
  Car,
  DollarSign,
  History,
  CalendarDays,
  Building2,
  PieChart,
  Banknote,
  FileSpreadsheet,
  UserCog,
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

export function BankingSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarHeader>
        {/* App Switcher Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex w-full items-center gap-2 px-4 py-3 hover:bg-accent/50 transition-colors rounded-md focus:outline-none">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#002e9b] text-white">
                <Landmark className="h-5 w-5" />
              </div>
              <div className="flex flex-1 flex-col items-start">
                <span className="text-sm font-semibold">NeoBank</span>
                <span className="text-xs text-muted-foreground">Business Banking</span>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-64">
            <div className="px-2 py-1.5">
              <p className="text-sm font-semibold">NeoBank</p>
              <p className="text-xs text-muted-foreground">Business Banking</p>
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
              <a href="/hr-dashboard">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0f766e] text-white">
                  <Users className="h-4 w-4" />
                </div>
                <div className="flex flex-1 flex-col">
                  <span className="text-sm font-medium">HR Management</span>
                  <span className="text-xs text-muted-foreground">Employee Portal</span>
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
                  isActive={location.pathname === "/banking"}
                >
                  <a href="/banking">
                    <LayoutDashboard className="h-4 w-4" />
                    <span>Dashboard</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === "/banking/notifications"}
                >
                  <a href="#">
                    <Bell className="h-4 w-4" />
                    <span>Notifications</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Accounts Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Accounts</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === "/banking/accounts"}
                >
                  <a href="#">
                    <Wallet className="h-4 w-4" />
                    <span>Business Accounts</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === "/banking/cards"}
                >
                  <a href="#">
                    <CreditCard className="h-4 w-4" />
                    <span>Corporate Cards</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Payments Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Payments</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === "/banking/transfers"}
                >
                  <a href="#">
                    <ArrowLeftRight className="h-4 w-4" />
                    <span>Transfers</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === "/banking/bill-pay"}
                >
                  <a href="#">
                    <Send className="h-4 w-4" />
                    <span>Bill Pay</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === "/banking/vendors"}
                >
                  <a href="#">
                    <Users className="h-4 w-4" />
                    <span>Vendors</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Payroll Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Payroll</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === "/banking/payroll"}
                >
                  <a href="/banking/payroll">
                    <DollarSign className="h-4 w-4" />
                    <span>Run Payroll</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === "/banking/employees"}
                >
                  <a href="/banking/employees">
                    <Users className="h-4 w-4" />
                    <span>Employees</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === "/banking/calendar"}
                >
                  <a href="/banking/calendar">
                    <CalendarDays className="h-4 w-4" />
                    <span>Calendar</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === "/banking/payroll/history"}
                >
                  <a href="/banking/payroll/history">
                    <History className="h-4 w-4" />
                    <span>Payroll History</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === "/banking/payroll/reports"}
                >
                  <a href="/banking/payroll/reports">
                    <FileSpreadsheet className="h-4 w-4" />
                    <span>Reports</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === "/banking/payroll/super-batches"}
                >
                  <a href="/banking/payroll/super-batches">
                    <Banknote className="h-4 w-4" />
                    <span>Super Batches</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === "/banking/payroll/expense-claims"}
                >
                  <a href="/banking/payroll/expense-claims">
                    <Receipt className="h-4 w-4" />
                    <span>Expense Claims</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === "/banking/settings"}
                >
                  <a href="/banking/settings">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Administration Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Administration</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === "/banking/company"}
                >
                  <a href="#">
                    <Building2 className="h-4 w-4" />
                    <span>Company</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === "/banking/team"}
                >
                  <a href="#">
                    <UserCog className="h-4 w-4" />
                    <span>Team & Permissions</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === "/banking/settings"}
                >
                  <a href="#">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === "/banking/security"}
                >
                  <a href="#">
                    <Shield className="h-4 w-4" />
                    <span>Security</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === "/banking/help"}
                >
                  <a href="#">
                    <HelpCircle className="h-4 w-4" />
                    <span>Help & Support</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
