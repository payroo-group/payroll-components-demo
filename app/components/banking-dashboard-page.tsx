"use client";

import {
  Wallet,
  ArrowUpRight,
  ArrowDownLeft,
  TrendingUp,
  CreditCard,
  PiggyBank,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
  LineChart,
  ResponsiveContainer,
} from "recharts";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "~/components/ui/sidebar";
import { BankingSidebar } from "~/components/banking-sidebar";
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

// Chart data
const balanceHistory = [
  { month: "Jan", balance: 12400 },
  { month: "Feb", balance: 14200 },
  { month: "Mar", balance: 13800 },
  { month: "Apr", balance: 16500 },
  { month: "May", balance: 18200 },
  { month: "Jun", balance: 21000 },
];

const spendingByCategory = [
  { category: "Food & Dining", amount: 850, fill: "var(--chart-1)" },
  { category: "Shopping", amount: 1200, fill: "var(--chart-2)" },
  { category: "Transport", amount: 420, fill: "var(--chart-3)" },
  { category: "Bills", amount: 980, fill: "var(--chart-4)" },
  { category: "Entertainment", amount: 350, fill: "var(--chart-5)" },
];

const incomeVsExpenses = [
  { month: "Jan", income: 5200, expenses: 3800 },
  { month: "Feb", income: 5400, expenses: 4100 },
  { month: "Mar", income: 5200, expenses: 3600 },
  { month: "Apr", income: 6800, expenses: 4200 },
  { month: "May", income: 5600, expenses: 3900 },
  { month: "Jun", income: 7200, expenses: 4400 },
];

const recentTransactions = [
  { id: 1, name: "Amazon Purchase", amount: -89.99, date: "Today", type: "expense" },
  { id: 2, name: "Salary Deposit", amount: 5200.00, date: "Dec 15", type: "income" },
  { id: 3, name: "Netflix Subscription", amount: -15.99, date: "Dec 14", type: "expense" },
  { id: 4, name: "Grocery Store", amount: -156.42, date: "Dec 13", type: "expense" },
  { id: 5, name: "Freelance Payment", amount: 850.00, date: "Dec 12", type: "income" },
];

const balanceChartConfig: ChartConfig = {
  balance: {
    label: "Balance",
    color: "hsl(var(--chart-1))",
  },
};

const spendingChartConfig: ChartConfig = {
  amount: {
    label: "Amount",
  },
  "Food & Dining": { color: "hsl(var(--chart-1))" },
  Shopping: { color: "hsl(var(--chart-2))" },
  Transport: { color: "hsl(var(--chart-3))" },
  Bills: { color: "hsl(var(--chart-4))" },
  Entertainment: { color: "hsl(var(--chart-5))" },
};

const incomeExpenseChartConfig: ChartConfig = {
  income: {
    label: "Income",
    color: "hsl(142.1 76.2% 36.3%)",
  },
  expenses: {
    label: "Expenses",
    color: "hsl(0 84.2% 60.2%)",
  },
};

export function BankingDashboardPage() {
  return (
    <SidebarProvider>
      <BankingSidebar />
      <SidebarInset>
        <header className="flex h-16 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <h1 className="text-lg font-semibold">NeoBank</h1>
        </header>
        <main className="flex-1 p-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">Welcome back, Alex</h2>
            <p className="text-muted-foreground mt-2">
              Here's an overview of your finances
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Balance
                </CardTitle>
                <Wallet className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$21,459.00</div>
                <p className="text-xs text-emerald-600 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +12.5% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Monthly Income
                </CardTitle>
                <ArrowDownLeft className="h-4 w-4 text-emerald-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$7,200.00</div>
                <p className="text-xs text-muted-foreground">
                  2 deposits this month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Monthly Expenses
                </CardTitle>
                <ArrowUpRight className="h-4 w-4 text-rose-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$4,400.00</div>
                <p className="text-xs text-muted-foreground">
                  38 transactions
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Savings Goal
                </CardTitle>
                <PiggyBank className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">68%</div>
                <div className="mt-2 h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[68%] bg-emerald-600 rounded-full" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts Grid */}
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            {/* Balance History Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Balance History</CardTitle>
                <CardDescription>Your account balance over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={balanceChartConfig} className="h-[250px] w-full">
                  <AreaChart data={balanceHistory} margin={{ left: 0, right: 0 }}>
                    <defs>
                      <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(142.1 76.2% 36.3%)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(142.1 76.2% 36.3%)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" tickLine={false} axisLine={false} />
                    <YAxis tickLine={false} axisLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
                    <ChartTooltip
                      content={<ChartTooltipContent />}
                      formatter={(value) => [`$${value.toLocaleString()}`, "Balance"]}
                    />
                    <Area
                      type="monotone"
                      dataKey="balance"
                      stroke="hsl(142.1 76.2% 36.3%)"
                      fill="url(#balanceGradient)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Income vs Expenses */}
            <Card>
              <CardHeader>
                <CardTitle>Income vs Expenses</CardTitle>
                <CardDescription>Monthly comparison</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={incomeExpenseChartConfig} className="h-[250px] w-full">
                  <BarChart data={incomeVsExpenses} margin={{ left: 0, right: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" tickLine={false} axisLine={false} />
                    <YAxis tickLine={false} axisLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="income" fill="hsl(142.1 76.2% 36.3%)" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="expenses" fill="hsl(0 84.2% 60.2%)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Spending by Category and Recent Transactions */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Spending by Category */}
            <Card>
              <CardHeader>
                <CardTitle>Spending by Category</CardTitle>
                <CardDescription>This month's breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {spendingByCategory.map((item, index) => (
                    <div key={item.category} className="flex items-center gap-3">
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: `hsl(var(--chart-${index + 1}))` }}
                      />
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">{item.category}</span>
                          <span className="text-sm text-muted-foreground">${item.amount}</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${(item.amount / 1200) * 100}%`,
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
                <CardDescription>Your latest activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTransactions.map((tx) => (
                    <div key={tx.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-full ${
                            tx.type === "income"
                              ? "bg-emerald-100 text-emerald-600"
                              : "bg-rose-100 text-rose-600"
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
                          <p className="text-xs text-muted-foreground">{tx.date}</p>
                        </div>
                      </div>
                      <span
                        className={`text-sm font-medium ${
                          tx.type === "income" ? "text-emerald-600" : "text-rose-600"
                        }`}
                      >
                        {tx.type === "income" ? "+" : ""}${Math.abs(tx.amount).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Cards Section */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Your Cards</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="relative h-48 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-6 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-sm opacity-80">NeoBank</span>
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <div className="text-lg tracking-widest mb-4">•••• •••• •••• 4829</div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs opacity-60">Card Holder</p>
                      <p className="text-sm">ALEX JOHNSON</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs opacity-60">Expires</p>
                      <p className="text-sm">12/27</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-48 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 p-6 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-sm opacity-80">NeoBank Platinum</span>
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <div className="text-lg tracking-widest mb-4">•••• •••• •••• 7156</div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs opacity-60">Card Holder</p>
                      <p className="text-sm">ALEX JOHNSON</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs opacity-60">Expires</p>
                      <p className="text-sm">08/26</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

