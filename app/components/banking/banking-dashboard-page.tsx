"use client";

import {
  Wallet,
  ArrowUpRight,
  ArrowDownLeft,
  TrendingUp,
  CreditCard,
  Users,
  Building2,
  FileText,
  Clock,
  DollarSign,
  TrendingDown,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";
import type { ChartConfig } from "~/components/ui/chart";

// Business Banking Chart Data
const cashFlowData = [
  { month: "Jan", inflow: 145000, outflow: 98000 },
  { month: "Feb", inflow: 162000, outflow: 112000 },
  { month: "Mar", inflow: 158000, outflow: 105000 },
  { month: "Apr", inflow: 189000, outflow: 125000 },
  { month: "May", inflow: 175000, outflow: 118000 },
  { month: "Jun", inflow: 210000, outflow: 142000 },
];

const revenueVsExpenses = [
  { month: "Jan", revenue: 185000, expenses: 142000 },
  { month: "Feb", revenue: 198000, expenses: 156000 },
  { month: "Mar", revenue: 192000, expenses: 148000 },
  { month: "Apr", revenue: 225000, expenses: 168000 },
  { month: "May", revenue: 215000, expenses: 162000 },
  { month: "Jun", revenue: 248000, expenses: 185000 },
];

const spendingByDepartment = [
  { department: "Operations", amount: 45200, fill: "var(--chart-1)" },
  { department: "Marketing", amount: 28500, fill: "var(--chart-2)" },
  { department: "Engineering", amount: 62800, fill: "var(--chart-3)" },
  { department: "Sales", amount: 18900, fill: "var(--chart-4)" },
  { department: "HR & Admin", amount: 12400, fill: "var(--chart-5)" },
];

const recentTransactions = [
  { id: 1, name: "AWS Cloud Services", category: "Operations", amount: -4250.00, date: "Today", type: "expense" },
  { id: 2, name: "Invoice #1284 - Acme Corp", category: "Revenue", amount: 28500.00, date: "Dec 20", type: "income" },
  { id: 3, name: "Payroll - December", category: "Payroll", amount: -86420.00, date: "Dec 15", type: "expense" },
  { id: 4, name: "Invoice #1283 - TechStart", category: "Revenue", amount: 15750.00, date: "Dec 14", type: "income" },
  { id: 5, name: "Office Supplies - Staples", category: "Operations", amount: -892.50, date: "Dec 13", type: "expense" },
];

const upcomingPayments = [
  { id: 1, name: "Payroll - January", amount: 88200, dueDate: "Jan 1, 2026", status: "scheduled" },
  { id: 2, name: "Office Rent", amount: 12500, dueDate: "Jan 1, 2026", status: "pending" },
  { id: 3, name: "Insurance Premium", amount: 4800, dueDate: "Jan 5, 2026", status: "pending" },
  { id: 4, name: "Vendor - SupplyCo", amount: 8650, dueDate: "Jan 10, 2026", status: "pending" },
];

const cashFlowChartConfig: ChartConfig = {
  inflow: {
    label: "Inflow",
    color: "#002e9b",
  },
  outflow: {
    label: "Outflow",
    color: "#2766fa",
  },
};

const revenueExpenseChartConfig: ChartConfig = {
  revenue: {
    label: "Revenue",
    color: "#002e9b",
  },
  expenses: {
    label: "Expenses",
    color: "#2766fa",
  },
};

export function BankingDashboardPage() {
  return (
    <div className="p-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">Overview</h2>
          </div>

          {/* Business Stats */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Cash Balance
                </CardTitle>
                <Wallet className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$284,520.00</div>
                <p className="text-xs text-[#002e9b] flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +8.2% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Accounts Receivable
                </CardTitle>
                <FileText className="h-4 w-4 text-[#002e9b]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$68,450.00</div>
                <p className="text-xs text-muted-foreground">
                  12 outstanding invoices
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Accounts Payable
                </CardTitle>
                <FileText className="h-4 w-4 text-[#2766fa]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$42,180.00</div>
                <p className="text-xs text-muted-foreground">
                  8 bills due this month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Next Payroll
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$88,200.00</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  Due Jan 1, 2026
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Charts Grid */}
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            {/* Cash Flow Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Cash Flow</CardTitle>
                <CardDescription>Monthly inflow vs outflow</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={cashFlowChartConfig} className="h-[250px] w-full">
                  <AreaChart data={cashFlowData} margin={{ left: 0, right: 0 }}>
                    <defs>
                      <linearGradient id="inflowGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#002e9b" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#002e9b" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="outflowGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2766fa" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#2766fa" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" tickLine={false} axisLine={false} />
                    <YAxis tickLine={false} axisLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area
                      type="monotone"
                      dataKey="inflow"
                      stroke="#002e9b"
                      fill="url(#inflowGradient)"
                      strokeWidth={2}
                    />
                    <Area
                      type="monotone"
                      dataKey="outflow"
                      stroke="#2766fa"
                      fill="url(#outflowGradient)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Revenue vs Expenses */}
            <Card>
              <CardHeader>
                <CardTitle>Revenue vs Expenses</CardTitle>
                <CardDescription>Monthly comparison</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={revenueExpenseChartConfig} className="h-[250px] w-full">
                  <BarChart data={revenueVsExpenses} margin={{ left: 0, right: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" tickLine={false} axisLine={false} />
                    <YAxis tickLine={false} axisLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="revenue" fill="#002e9b" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="expenses" fill="#2766fa" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Spending and Transactions */}
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            {/* Spending by Department */}
            <Card>
              <CardHeader>
                <CardTitle>Spending by Department</CardTitle>
                <CardDescription>This month's breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {spendingByDepartment.map((item, index) => (
                    <div key={item.department} className="flex items-center gap-3">
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: `hsl(var(--chart-${index + 1}))` }}
                      />
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">{item.department}</span>
                          <span className="text-sm text-muted-foreground">
                            ${item.amount.toLocaleString()}
                          </span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${(item.amount / 62800) * 100}%`,
                              backgroundColor: `hsl(var(--chart-${index + 1}))`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Transactions */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Latest business activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTransactions.map((tx) => (
                    <div key={tx.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-full ${
                            tx.type === "income"
                              ? "bg-[#002e9b]/10 text-[#002e9b]"
                              : "bg-[#2766fa]/10 text-[#2766fa]"
                          }`}
                        >
                          {tx.type === "income" ? (
                            <ArrowDownLeft className="h-4 w-4" />
                          ) : (
                            <ArrowUpRight className="h-4 w-4" />
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-medium">{tx.name}</p>
                          <p className="text-xs text-muted-foreground">{tx.category} • {tx.date}</p>
                        </div>
                      </div>
                      <span
                        className={`text-sm font-medium ${
                          tx.type === "income" ? "text-[#002e9b]" : "text-[#2766fa]"
                        }`}
                      >
                        {tx.type === "income" ? "+" : "-"}${Math.abs(tx.amount).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Payments and Corporate Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Upcoming Payments */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Payments</CardTitle>
                <CardDescription>Scheduled bills and payroll</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingPayments.map((payment) => (
                    <div key={payment.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2766fa]/10 text-[#2766fa]">
                          <Clock className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{payment.name}</p>
                          <p className="text-xs text-muted-foreground">Due {payment.dueDate}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-medium">
                          ${payment.amount.toLocaleString()}
                        </span>
                        <p className={`text-xs ${
                          payment.status === "scheduled" ? "text-[#002e9b]" : "text-[#2766fa]"
                        }`}>
                          {payment.status === "scheduled" ? "Scheduled" : "Pending"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Team Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Team Overview</CardTitle>
                <CardDescription>Employee and payroll summary</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm font-medium">Total Employees</span>
                    </div>
                    <span className="text-lg font-bold">48</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <DollarSign className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm font-medium">Monthly Payroll</span>
                    </div>
                    <span className="text-lg font-bold">$88,200</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Building2 className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm font-medium">Departments</span>
                    </div>
                    <span className="text-lg font-bold">5</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm font-medium">Active Cards</span>
                    </div>
                    <span className="text-lg font-bold">12</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Corporate Cards Section */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Corporate Cards</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="relative h-48 rounded-xl bg-gradient-to-br from-[#002e9b] to-[#2766fa] p-6 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-sm opacity-80">NeoBank Business</span>
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <div className="text-lg tracking-widest mb-4">•••• •••• •••• 8842</div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs opacity-60">Company</p>
                      <p className="text-sm">ACME INC.</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs opacity-60">Limit</p>
                      <p className="text-sm">$50,000</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-48 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 p-6 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-sm opacity-80">NeoBank Executive</span>
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <div className="text-lg tracking-widest mb-4">•••• •••• •••• 4156</div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs opacity-60">Card Holder</p>
                      <p className="text-sm">JOHN SMITH - CEO</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs opacity-60">Limit</p>
                      <p className="text-sm">$25,000</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-48 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 p-6 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-sm opacity-80">NeoBank Team</span>
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <div className="text-lg tracking-widest mb-4">•••• •••• •••• 2891</div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs opacity-60">Card Holder</p>
                      <p className="text-sm">SARAH CHEN - CFO</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs opacity-60">Limit</p>
                      <p className="text-sm">$15,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
}
