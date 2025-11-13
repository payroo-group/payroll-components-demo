"use client";

import { UserCircle, Building2, Briefcase, AlertTriangle } from "lucide-react";
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
  RadialBar,
  RadialBarChart,
  PolarAngleAxis,
  PolarRadiusAxis,
  PolarGrid,
  Legend,
  Pie,
  PieChart,
  Label,
  Radar,
  RadarChart,
} from "recharts";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "~/components/ui/sidebar";
import { HRManagementSidebar } from "~/components/hr-management-sidebar";
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

export function DashboardPage() {
  return (
    <SidebarProvider>
      <HRManagementSidebar />
      <SidebarInset>
        <header className="flex h-16 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <h1 className="text-lg font-semibold">Human Resources</h1>
        </header>
        <main className="flex-1 p-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">HR Dashboard</h2>
            <p className="text-muted-foreground mt-2">
              Manage your workforce, track performance, and oversee operations from one central hub
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Employees
                </CardTitle>
                <UserCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">248</div>
                <p className="text-xs text-muted-foreground">
                  Currently active
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Departments</CardTitle>
                <Building2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">
                  Active departments
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Projects
                </CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">89</div>
                <p className="text-xs text-muted-foreground">
                  In progress today
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">HR Issues</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">
                  Reported this week
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Employee Activity Overview</CardTitle>
                <CardDescription>
                  Daily active employees for the last 7 days
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={
                    {
                      employees: {
                        label: "Active Employees",
                        color: "hsl(270, 70%, 60%)",
                      },
                    } satisfies ChartConfig
                  }
                  className="h-[300px] w-full"
                >
                  <AreaChart
                    data={[
                      { day: "Mon", employees: 215 },
                      { day: "Tue", employees: 234 },
                      { day: "Wed", employees: 198 },
                      { day: "Thu", employees: 241 },
                      { day: "Fri", employees: 224 },
                      { day: "Sat", employees: 178 },
                      { day: "Sun", employees: 208 },
                    ]}
                    margin={{ left: 12, right: 12, top: 12, bottom: 12 }}
                  >
                    <CartesianGrid
                      strokeDasharray="0"
                      stroke="hsl(240, 3%, 15%)"
                      vertical={false}
                    />
                    <XAxis
                      dataKey="day"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={16}
                      className="text-xs"
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <defs>
                      <linearGradient
                        id="fillEmployees"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="hsl(270, 70%, 60%)"
                          stopOpacity={0.9}
                        />
                        <stop
                          offset="50%"
                          stopColor="hsl(270, 70%, 55%)"
                          stopOpacity={0.5}
                        />
                        <stop
                          offset="100%"
                          stopColor="hsl(270, 70%, 50%)"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="employees"
                      stroke="hsl(270, 70%, 60%)"
                      fill="url(#fillEmployees)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Department Performance Metrics</CardTitle>
                <CardDescription>
                  Multi-dimensional performance analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={
                    {
                      utilization: {
                        label: "Utilization",
                        color: "hsl(270, 80%, 70%)",
                      },
                      efficiency: {
                        label: "Efficiency",
                        color: "hsl(270, 75%, 60%)",
                      },
                      maintenance: {
                        label: "Maintenance",
                        color: "hsl(270, 70%, 50%)",
                      },
                      safety: {
                        label: "Safety",
                        color: "hsl(270, 65%, 40%)",
                      },
                    } satisfies ChartConfig
                  }
                  className="h-[300px] w-full"
                >
                  <RadarChart
                    data={[
                      {
                        category: "Engineering",
                        utilization: 88,
                        efficiency: 92,
                        maintenance: 85,
                        safety: 95,
                      },
                      {
                        category: "Sales",
                        utilization: 75,
                        efficiency: 82,
                        maintenance: 78,
                        safety: 88,
                      },
                      {
                        category: "Marketing",
                        utilization: 92,
                        efficiency: 90,
                        maintenance: 88,
                        safety: 93,
                      },
                      {
                        category: "Operations",
                        utilization: 68,
                        efficiency: 78,
                        maintenance: 82,
                        safety: 85,
                      },
                      {
                        category: "Support",
                        utilization: 65,
                        efficiency: 95,
                        maintenance: 90,
                        safety: 98,
                      },
                    ]}
                  >
                    <PolarGrid stroke="hsl(240, 5%, 20%)" strokeWidth={1} />
                    <PolarAngleAxis
                      dataKey="category"
                      tick={{ fill: "hsl(0, 0%, 70%)", fontSize: 12 }}
                    />
                    <PolarRadiusAxis
                      angle={90}
                      domain={[0, 100]}
                      tick={{ fill: "hsl(0, 0%, 50%)", fontSize: 10 }}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Radar
                      name="Utilization"
                      dataKey="utilization"
                      stroke="hsl(270, 80%, 70%)"
                      fill="hsl(270, 80%, 70%)"
                      fillOpacity={0.3}
                      strokeWidth={2}
                    />
                    <Radar
                      name="Efficiency"
                      dataKey="efficiency"
                      stroke="hsl(270, 75%, 60%)"
                      fill="hsl(270, 75%, 60%)"
                      fillOpacity={0.25}
                      strokeWidth={2}
                    />
                    <Radar
                      name="Maintenance"
                      dataKey="maintenance"
                      stroke="hsl(270, 70%, 50%)"
                      fill="hsl(270, 70%, 50%)"
                      fillOpacity={0.2}
                      strokeWidth={2}
                    />
                    <Radar
                      name="Safety"
                      dataKey="safety"
                      stroke="hsl(270, 65%, 40%)"
                      fill="hsl(270, 65%, 40%)"
                      fillOpacity={0.15}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          <div className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Getting Started</CardTitle>
                <CardDescription>
                  Quick tips to navigate the HR system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Use the sidebar to navigate through different sections of the
                  HR system. Start by viewing employee profiles,
                  managing payroll, tracking time and attendance, or reviewing reports.
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
