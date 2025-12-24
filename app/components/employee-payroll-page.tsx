"use client";

import {
  ArrowLeft,
  DollarSign,
  Calendar,
  TrendingUp,
  Download,
} from "lucide-react";
import { useParams, useNavigate } from "react-router";
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
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";

// Sample employee data - in a real app, this would come from a database
const employeesData = [
  {
    id: "1",
    name: "John Martinez",
    employeeId: "EMP-001",
    position: "Senior Developer",
    department: "Engineering",
    payRate: "$85,000/year",
    paySchedule: "Bi-weekly",
    bankAccount: "Commonwealth Bank - ****5678",
  },
  {
    id: "2",
    name: "Sarah Chen",
    employeeId: "EMP-002",
    position: "Sales Manager",
    department: "Sales",
    payRate: "$75,000/year",
    paySchedule: "Bi-weekly",
    bankAccount: "ANZ Bank - ****8901",
  },
  {
    id: "3",
    name: "Michael Johnson",
    employeeId: "EMP-003",
    position: "Marketing Specialist",
    department: "Marketing",
    payRate: "$65,000/year",
    paySchedule: "Bi-weekly",
    bankAccount: "Westpac - ****2345",
  },
];

export function EmployeePayrollPage() {
  const params = useParams();
  const navigate = useNavigate();
  const employeeId = params.id;

  // Find the employee by ID
  const employee = employeesData.find((e) => e.id === employeeId);

  if (!employee) {
    return (
      <SidebarProvider>
        <HRManagementSidebar />
        <SidebarInset>
          <header className="flex h-16 items-center gap-2 border-b px-4">
            <SidebarTrigger />
            <h1 className="text-lg font-semibold">Employee Not Found</h1>
          </header>
          <main className="flex-1 p-6">
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="text-2xl font-bold mb-2">Employee Not Found</h2>
              <p className="text-muted-foreground mb-4">
                The employee payroll details you're looking for don't exist.
              </p>
              <Button onClick={() => navigate("/payroll")}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Payroll
              </Button>
            </div>
          </main>
        </SidebarInset>
      </SidebarProvider>
    );
  }

  return (
    <SidebarProvider>
      <HRManagementSidebar />
      <SidebarInset>
        <header className="flex h-16 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(`/employee-detail/${employeeId}`)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Profile
          </Button>
          <h1 className="text-lg font-semibold">Employee Payroll</h1>
        </header>
        <main className="flex-1 p-6">
          {/* Header Section */}
          <div className="mb-6 flex items-start justify-between">
            <div>
              <h2 className="text-3xl font-bold">{employee.name}</h2>
              <p className="text-muted-foreground mt-1">
                {employee.employeeId} • {employee.position}
              </p>
            </div>
          </div>

          {/* Employee Info Cards */}
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pay Rate</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{employee.payRate}</div>
                <p className="text-xs text-muted-foreground">Standard rate</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Pay Schedule
                </CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{employee.paySchedule}</div>
                <p className="text-xs text-muted-foreground">
                  Payment frequency
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Department
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{employee.department}</div>
                <p className="text-xs text-muted-foreground">Work division</p>
              </CardContent>
            </Card>
          </div>
          {/* Placeholder for Embedded Payroll Details */}
          <Card className="min-h-[500px]">
            <CardHeader>
              <CardTitle>Payroll Details</CardTitle>
              <CardDescription>
                View detailed payroll information and payment history
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center min-h-[400px]">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center">
                  <DollarSign className="h-10 w-10 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Employee Payroll Information
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-md">
                    This section displays detailed payroll information
                    including pay periods, earnings breakdown, deductions, tax
                    information, and payment history for {employee.name}.
                  </p>
                </div>
                <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                  <code className="text-sm text-muted-foreground">
                    {`{/* Add embedded employee payroll component here */}`}
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
