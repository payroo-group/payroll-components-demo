"use client";

import { UserCircle, Users, Calendar, DollarSign } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
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

export function HRDashboardPage() {
  return (
    <div className="p-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">Workforce Dashboard</h2>
            <p className="text-muted-foreground mt-2">
              Manage your employees, payroll, and HR operations from one central hub
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Employees
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,284</div>
                <p className="text-xs text-muted-foreground">
                  +12 this month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Today</CardTitle>
                <UserCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,156</div>
                <p className="text-xs text-muted-foreground">
                  90% attendance rate
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Pending Requests
                </CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">23</div>
                <p className="text-xs text-muted-foreground">
                  Leave & time-off requests
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Payroll Due</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$842K</div>
                <p className="text-xs text-muted-foreground">
                  Next cycle: Dec 31
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
                  Daily attendance for the last 7 days
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={
                    {
                      employees: {
                        label: "Active Employees",
                        color: "hsl(168, 76%, 36%)",
                      },
                    } satisfies ChartConfig
                  }
                  className="h-[300px] w-full"
                >
                  <AreaChart
                    data={[
                      { day: "Mon", employees: 1180 },
                      { day: "Tue", employees: 1205 },
                      { day: "Wed", employees: 1156 },
                      { day: "Thu", employees: 1198 },
                      { day: "Fri", employees: 1142 },
                      { day: "Sat", employees: 245 },
                      { day: "Sun", employees: 120 },
                    ]}
                    margin={{ left: 12, right: 12, top: 12, bottom: 12 }}
                  >
                    <CartesianGrid
                      strokeDasharray="0"
                      stroke="hsl(240, 3%, 70%)"
                      strokeOpacity={0.4}
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
                          stopColor="hsl(168, 76%, 36%)"
                          stopOpacity={0.9}
                        />
                        <stop
                          offset="50%"
                          stopColor="hsl(168, 76%, 36%)"
                          stopOpacity={0.5}
                        />
                        <stop
                          offset="100%"
                          stopColor="hsl(168, 76%, 36%)"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="employees"
                      stroke="hsl(168, 76%, 36%)"
                      fill="url(#fillEmployees)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Department Performance</CardTitle>
                <CardDescription>
                  Multi-dimensional performance analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={
                    {
                      productivity: {
                        label: "Productivity",
                        color: "hsl(168, 76%, 46%)",
                      },
                      satisfaction: {
                        label: "Satisfaction",
                        color: "hsl(168, 76%, 36%)",
                      },
                      retention: {
                        label: "Retention",
                        color: "hsl(168, 76%, 26%)",
                      },
                    } satisfies ChartConfig
                  }
                  className="h-[300px] w-full"
                >
                  <RadarChart
                    data={[
                      {
                        department: "Engineering",
                        productivity: 92,
                        satisfaction: 88,
                        retention: 95,
                      },
                      {
                        department: "Sales",
                        productivity: 85,
                        satisfaction: 82,
                        retention: 78,
                      },
                      {
                        department: "Marketing",
                        productivity: 88,
                        satisfaction: 90,
                        retention: 85,
                      },
                      {
                        department: "HR",
                        productivity: 78,
                        satisfaction: 92,
                        retention: 90,
                      },
                      {
                        department: "Finance",
                        productivity: 90,
                        satisfaction: 85,
                        retention: 92,
                      },
                    ]}
                  >
                    <PolarGrid stroke="hsl(240, 5%, 80%)" strokeWidth={1} />
                    <PolarAngleAxis
                      dataKey="department"
                      tick={{ fill: "hsl(0, 0%, 70%)", fontSize: 12 }}
                    />
                    <PolarRadiusAxis
                      angle={90}
                      domain={[0, 100]}
                      tick={{ fill: "hsl(0, 0%, 50%)", fontSize: 10 }}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Radar
                      name="Productivity"
                      dataKey="productivity"
                      stroke="hsl(168, 76%, 46%)"
                      fill="hsl(168, 76%, 46%)"
                      fillOpacity={0.3}
                      strokeWidth={2}
                    />
                    <Radar
                      name="Satisfaction"
                      dataKey="satisfaction"
                      stroke="hsl(168, 76%, 36%)"
                      fill="hsl(168, 76%, 36%)"
                      fillOpacity={0.25}
                      strokeWidth={2}
                    />
                    <Radar
                      name="Retention"
                      dataKey="retention"
                      stroke="hsl(168, 76%, 26%)"
                      fill="hsl(168, 76%, 26%)"
                      fillOpacity={0.2}
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
                  Quick tips to navigate the HR management system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Use the sidebar to navigate through different sections of the
                  HR management system. Start by viewing employee profiles,
                  managing payroll, or checking timesheets and attendance.
                </p>
              </CardContent>
            </Card>
          </div>
    </div>
  );
}

