"use client"

import { DollarSign, Download, Filter, Search, History } from "lucide-react";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "~/components/ui/sidebar";
import { DriverManagementSidebar } from "~/components/driver-management-sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Badge } from "~/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

// Sample payroll data
const payrollData = [
  {
    id: "1",
    driverId: "DRV-001",
    name: "John Martinez",
    baseSalary: "$2,450.00",
    bonus: "$350.00",
    deductions: "$125.00",
    totalPay: "$2,675.00",
    status: "Paid",
    payDate: "Dec 15, 2024",
    deliveries: 87,
  },
  {
    id: "2",
    driverId: "DRV-002",
    name: "Sarah Chen",
    baseSalary: "$2,650.00",
    bonus: "$400.00",
    deductions: "$135.00",
    totalPay: "$2,915.00",
    status: "Paid",
    payDate: "Dec 15, 2024",
    deliveries: 92,
  },
  {
    id: "3",
    driverId: "DRV-003",
    name: "Michael Johnson",
    baseSalary: "$2,300.00",
    bonus: "$0.00",
    deductions: "$115.00",
    totalPay: "$2,185.00",
    status: "Pending",
    payDate: "Dec 15, 2024",
    deliveries: 68,
  },
  {
    id: "4",
    driverId: "DRV-004",
    name: "Emily Rodriguez",
    baseSalary: "$2,400.00",
    bonus: "$300.00",
    deductions: "$120.00",
    totalPay: "$2,580.00",
    status: "Paid",
    payDate: "Dec 15, 2024",
    deliveries: 83,
  },
  {
    id: "5",
    driverId: "DRV-005",
    name: "David Kim",
    baseSalary: "$2,200.00",
    bonus: "$150.00",
    deductions: "$110.00",
    totalPay: "$2,240.00",
    status: "Pending",
    payDate: "Dec 15, 2024",
    deliveries: 61,
  },
  {
    id: "6",
    driverId: "DRV-006",
    name: "Lisa Anderson",
    baseSalary: "$2,700.00",
    bonus: "$450.00",
    deductions: "$140.00",
    totalPay: "$3,010.00",
    status: "Paid",
    payDate: "Dec 15, 2024",
    deliveries: 98,
  },
  {
    id: "7",
    driverId: "DRV-007",
    name: "Robert Taylor",
    baseSalary: "$2,500.00",
    bonus: "$325.00",
    deductions: "$125.00",
    totalPay: "$2,700.00",
    status: "Paid",
    payDate: "Dec 15, 2024",
    deliveries: 79,
  },
  {
    id: "8",
    driverId: "DRV-008",
    name: "Maria Garcia",
    baseSalary: "$2,350.00",
    bonus: "$200.00",
    deductions: "$118.00",
    totalPay: "$2,432.00",
    status: "Processing",
    payDate: "Dec 15, 2024",
    deliveries: 72,
  },
];

export function PayrollPage() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Paid":
        return <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/20">Paid</Badge>;
      case "Pending":
        return <Badge className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20">Pending</Badge>;
      case "Processing":
        return <Badge className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20">Processing</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  // Calculate totals
  const totalBaseSalary = payrollData.reduce((sum, item) => 
    sum + parseFloat(item.baseSalary.replace(/[$,]/g, '')), 0
  );
  const totalBonus = payrollData.reduce((sum, item) => 
    sum + parseFloat(item.bonus.replace(/[$,]/g, '')), 0
  );
  const totalDeductions = payrollData.reduce((sum, item) => 
    sum + parseFloat(item.deductions.replace(/[$,]/g, '')), 0
  );
  const totalPayroll = payrollData.reduce((sum, item) => 
    sum + parseFloat(item.totalPay.replace(/[$,]/g, '')), 0
  );

  return (
    <SidebarProvider>
      <DriverManagementSidebar />
      <SidebarInset>
        <header className="flex h-16 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <h1 className="text-lg font-semibold">Payroll Management</h1>
        </header>
        <main className="flex-1 p-6">
          <div className="mb-6 flex items-start justify-between">
            <div>
              <h2 className="text-3xl font-bold">Payroll Overview</h2>
              <p className="text-muted-foreground mt-2">
                Manage and process driver salaries and payments
              </p>
            </div>
            <Button>
              <History className="mr-2 h-4 w-4" />
              Payroll History
            </Button>
          </div>

          {/* Summary Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Payroll</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  ${totalPayroll.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </div>
                <p className="text-xs text-muted-foreground">
                  For December 2024
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Base Salaries</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  ${totalBaseSalary.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </div>
                <p className="text-xs text-muted-foreground">
                  Regular wages
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Bonuses</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  ${totalBonus.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </div>
                <p className="text-xs text-muted-foreground">
                  Performance bonuses
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Deductions</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  ${totalDeductions.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </div>
                <p className="text-xs text-muted-foreground">
                  Taxes & deductions
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Payroll Table */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Driver Payroll</CardTitle>
                  <CardDescription>December 2024 payment details</CardDescription>
                </div>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search drivers..."
                      className="pl-9 w-[200px]"
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                  <Button size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Driver</TableHead>
                    <TableHead>Employee ID</TableHead>
                    <TableHead>Deliveries</TableHead>
                    <TableHead>Base Salary</TableHead>
                    <TableHead>Bonus</TableHead>
                    <TableHead>Deductions</TableHead>
                    <TableHead>Total Pay</TableHead>
                    <TableHead>Pay Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payrollData.map((driver) => (
                    <TableRow key={driver.id}>
                      <TableCell className="font-medium">{driver.name}</TableCell>
                      <TableCell className="text-muted-foreground">
                        {driver.driverId}
                      </TableCell>
                      <TableCell>{driver.deliveries}</TableCell>
                      <TableCell>{driver.baseSalary}</TableCell>
                      <TableCell className="text-green-600 font-medium">
                        {driver.bonus}
                      </TableCell>
                      <TableCell className="text-red-600">
                        {driver.deductions}
                      </TableCell>
                      <TableCell className="font-semibold">
                        {driver.totalPay}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {driver.payDate}
                      </TableCell>
                      <TableCell>{getStatusBadge(driver.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

