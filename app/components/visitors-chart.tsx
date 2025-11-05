"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "~/components/ui/chart"
import { Button } from "~/components/ui/button"

const chartData = [
  { date: "Jun 24", visitors: 2400, sessions: 1800 },
  { date: "Jun 25", visitors: 1800, sessions: 1400 },
  { date: "Jun 26", visitors: 3200, sessions: 2600 },
  { date: "Jun 27", visitors: 2800, sessions: 2200 },
  { date: "Jun 28", visitors: 2600, sessions: 2000 },
  { date: "Jun 29", visitors: 3400, sessions: 2800 },
  { date: "Jun 30", visitors: 2900, sessions: 2300 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "hsl(270, 70%, 60%)",
  },
  sessions: {
    label: "Sessions",
    color: "hsl(270, 70%, 50%)",
  },
} satisfies ChartConfig

export function VisitorsChart() {
  const [timeRange, setTimeRange] = React.useState("3months")

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>Total Visitors</CardTitle>
            <CardDescription>Total for the last 3 months</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button
              variant={timeRange === "3months" ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setTimeRange("3months")}
              className="h-8"
            >
              Last 3 months
            </Button>
            <Button
              variant={timeRange === "30days" ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setTimeRange("30days")}
              className="h-8"
            >
              Last 30 days
            </Button>
            <Button
              variant={timeRange === "7days" ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setTimeRange("7days")}
              className="h-8"
            >
              Last 7 days
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="fillVisitors" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="hsl(270, 70%, 60%)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="50%"
                  stopColor="hsl(270, 70%, 55%)"
                  stopOpacity={0.4}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(270, 70%, 50%)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillSessions" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="hsl(270, 70%, 50%)"
                  stopOpacity={0.6}
                />
                <stop
                  offset="50%"
                  stopColor="hsl(270, 70%, 45%)"
                  stopOpacity={0.3}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(270, 70%, 40%)"
                  stopOpacity={0.05}
                />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="0" stroke="transparent" vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={16}
              className="text-xs text-muted-foreground"
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="sessions"
              type="monotone"
              fill="url(#fillSessions)"
              fillOpacity={1}
              stroke="hsl(270, 70%, 50%)"
              strokeWidth={1.5}
            />
            <Area
              dataKey="visitors"
              type="monotone"
              fill="url(#fillVisitors)"
              fillOpacity={1}
              stroke="hsl(270, 70%, 60%)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

