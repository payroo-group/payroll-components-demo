"use client";

import { useParams, useNavigate } from "react-router";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Star,
  Package,
  AlertCircle,
  DollarSign,
  CreditCard,
  Building2,
  Hash,
  CheckCircle2,
  Plus,
  FileText,
} from "lucide-react";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "~/components/ui/sidebar";
import { HRManagementSidebar } from "~/components/hr/hr-management-sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Progress } from "~/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

// Sample employee data - in a real app, this would come from a database
const employeesData = [
  {
    id: "1",
    name: "John Martinez",
    employeeId: "EMP-001",
    status: "Active",
    department: "Engineering",
    position: "Senior Developer",
    rating: 4.8,
    totalProjects: 24,
    manager: "Eddie Lake",
    email: "john.martinez@company.com",
    phone: "+61 2 9876 5432",
    address: "123 Main St, San Francisco, CA 94102",
    joinDate: "January 15, 2022",
    team: "Frontend Team",
    emergencyContact: "Maria Martinez - +61 412 345 678",
    certification: "AWS Certified",
    completionRate: 98,
    onTimeRate: 96,
    performanceRating: 4.8,
    yearsOfService: "2.5 years",
    bankAccounts: [
      {
        id: 1,
        bankName: "Commonwealth Bank",
        accountNumber: "****5678",
        accountType: "Transaction",
        isPrimary: true,
      },
      {
        id: 2,
        bankName: "Westpac",
        accountNumber: "****3421",
        accountType: "Savings",
        isPrimary: false,
      },
    ],
    payHistory: [
      {
        date: "Dec 15, 2024",
        amount: "$2,450.00",
        type: "Salary",
        method: "Direct Deposit",
        status: "Paid",
      },
      {
        date: "Nov 15, 2024",
        amount: "$2,450.00",
        type: "Salary",
        method: "Direct Deposit",
        status: "Paid",
      },
      {
        date: "Oct 31, 2024",
        amount: "$350.00",
        type: "Bonus",
        method: "Direct Deposit",
        status: "Paid",
      },
      {
        date: "Oct 15, 2024",
        amount: "$2,450.00",
        type: "Salary",
        method: "Direct Deposit",
        status: "Paid",
      },
      {
        date: "Sep 15, 2024",
        amount: "$2,450.00",
        type: "Salary",
        method: "Direct Deposit",
        status: "Paid",
      },
    ],
  },
  {
    id: "2",
    name: "Sarah Chen",
    employeeId: "EMP-002",
    status: "Active",
    department: "Sales",
    position: "Sales Manager",
    rating: 4.9,
    totalProjects: 18,
    manager: "Eddie Lake",
    email: "sarah.chen@company.com",
    phone: "+61 3 8765 4321",
    address: "456 Oak Ave, Oakland, CA 94601",
    joinDate: "March 22, 2022",
    team: "Enterprise Sales",
    emergencyContact: "David Chen - +61 423 456 789",
    certification: "Salesforce Certified",
    completionRate: 99,
    onTimeRate: 97,
    performanceRating: 4.9,
    yearsOfService: "2.2 years",
    bankAccounts: [
      {
        id: 1,
        bankName: "ANZ Bank",
        accountNumber: "****8901",
        accountType: "Transaction",
        isPrimary: true,
      },
      {
        id: 2,
        bankName: "NAB",
        accountNumber: "****6789",
        accountType: "Savings",
        isPrimary: false,
      },
    ],
    payHistory: [
      {
        date: "Dec 15, 2024",
        amount: "$2,650.00",
        type: "Salary",
        method: "Direct Deposit",
        status: "Paid",
      },
      {
        date: "Nov 15, 2024",
        amount: "$2,650.00",
        type: "Salary",
        method: "Direct Deposit",
        status: "Paid",
      },
      {
        date: "Oct 15, 2024",
        amount: "$2,650.00",
        type: "Salary",
        method: "Direct Deposit",
        status: "Paid",
      },
      {
        date: "Sep 15, 2024",
        amount: "$2,650.00",
        type: "Salary",
        method: "Direct Deposit",
        status: "Paid",
      },
    ],
  },
  {
    id: "3",
    name: "Michael Johnson",
    employeeId: "EMP-003",
    status: "On Leave",
    department: "Marketing",
    position: "Marketing Specialist",
    rating: 4.6,
    totalProjects: 15,
    manager: "Jamik Tashpulatov",
    email: "michael.j@company.com",
    phone: "+61 7 5432 1098",
    address: "789 Pine St, Berkeley, CA 94704",
    joinDate: "June 10, 2022",
    team: "Digital Marketing",
    emergencyContact: "Lisa Johnson - +61 434 567 890",
    certification: "Google Analytics Certified",
    completionRate: 95,
    onTimeRate: 93,
    performanceRating: 4.6,
    yearsOfService: "1.8 years",
    bankAccounts: [
      {
        id: 1,
        bankName: "Westpac",
        accountNumber: "****2345",
        accountType: "Transaction",
        isPrimary: true,
      },
      {
        id: 2,
        bankName: "Bendigo Bank",
        accountNumber: "****7890",
        accountType: "Transaction",
        isPrimary: false,
      },
    ],
    payHistory: [
      {
        date: "Nov 15, 2024",
        amount: "$2,300.00",
        type: "Salary",
        method: "Direct Deposit",
        status: "Paid",
      },
      {
        date: "Oct 15, 2024",
        amount: "$2,300.00",
        type: "Salary",
        method: "Direct Deposit",
        status: "Paid",
      },
      {
        date: "Sep 15, 2024",
        amount: "$2,300.00",
        type: "Salary",
        method: "Direct Deposit",
        status: "Paid",
      },
    ],
  },
];

export function EmployeeDetailPage() {
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
              <AlertCircle className="h-16 w-16 text-muted-foreground mb-4" />
              <h2 className="text-2xl font-bold mb-2">Employee Not Found</h2>
              <p className="text-muted-foreground mb-4">
                The employee you're looking for doesn't exist.
              </p>
              <Button onClick={() => navigate("/employee-profiles")} className="bg-[#0f766e] hover:bg-[#0d6559]">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Employee Profiles
              </Button>
            </div>
          </main>
        </SidebarInset>
      </SidebarProvider>
    );
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return (
          <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
            Active
          </Badge>
        );
      case "On Leave":
        return (
          <Badge className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20">
            On Leave
          </Badge>
        );
      case "Inactive":
        return (
          <Badge className="bg-gray-500/10 text-gray-500 hover:bg-gray-500/20">
            Inactive
          </Badge>
        );
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <SidebarProvider>
      <HRManagementSidebar />
      <SidebarInset>
        <header className="flex h-16 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/employee-profiles")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h1 className="text-lg font-semibold">Employee Profile</h1>
        </header>
        <main className="flex-1 p-6">
          {/* Header Section */}
          <div className="mb-6 flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 rounded-full bg-[#0f766e]/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-[#0f766e]">
                  {employee.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <h2 className="text-3xl font-bold">{employee.name}</h2>
                <p className="text-muted-foreground">{employee.employeeId} • {employee.position}</p>
                <div className="flex items-center gap-2 mt-2">
                  {getStatusBadge(employee.status)}
                  <Badge variant="outline">{employee.department}</Badge>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Edit Employee</Button>
              <Button onClick={() => navigate(`/hr-employee-payroll/${employeeId}`)} className="bg-[#0f766e] hover:bg-[#0d6559]">
                View Payroll
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Contact Information */}
            <Card className="col-span-1 md:col-span-2">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Personal and emergency contact details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">
                        {employee.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">
                        {employee.phone}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Address</p>
                      <p className="text-sm text-muted-foreground">
                        {employee.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Join Date</p>
                      <p className="text-sm text-muted-foreground">
                        {employee.joinDate}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm font-medium mb-2">Emergency Contact</p>
                  <p className="text-sm text-muted-foreground">
                    {employee.emergencyContact}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Performance Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Performance</CardTitle>
                <CardDescription>Overall statistics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Completion Rate</span>
                    <span className="text-sm font-bold">
                      {employee.completionRate}%
                    </span>
                  </div>
                  <Progress value={employee.completionRate} className="bg-[#0f766e]/20 [&>div]:bg-[#0f766e]" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">On-Time Rate</span>
                    <span className="text-sm font-bold">
                      {employee.onTimeRate}%
                    </span>
                  </div>
                  <Progress value={employee.onTimeRate} className="bg-[#0f766e]/20 [&>div]:bg-[#0f766e]" />
                </div>
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Performance Rating</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-bold">
                        {employee.performanceRating}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Department & Position */}
            <Card>
              <CardHeader>
                <CardTitle>Department & Position</CardTitle>
                <CardDescription>Role and team information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-1">Department</p>
                  <p className="text-sm text-muted-foreground">
                    {employee.department}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Position</p>
                  <p className="text-sm text-muted-foreground">
                    {employee.position}
                  </p>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm font-medium mb-1">Team</p>
                  <p className="text-sm text-muted-foreground">
                    {employee.team}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Certification</p>
                  <p className="text-sm text-muted-foreground">
                    {employee.certification}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Project Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Project Statistics</CardTitle>
                <CardDescription>Activity overview</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm font-medium">
                      Total Projects
                    </span>
                  </div>
                  <span className="text-2xl font-bold">
                    {employee.totalProjects}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-sm font-medium">Years of Service</span>
                  <span className="text-xl font-bold">
                    {employee.yearsOfService}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Bank Accounts */}
            <Card>
              <CardHeader>
                <CardTitle>Bank Accounts</CardTitle>
                <CardDescription>
                  Salary deposits can be split across up to 2 bank accounts
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {employee.bankAccounts?.map((account) => (
                  <div
                    key={account.id}
                    className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-[#0f766e]/10 flex items-center justify-center">
                        <Building2 className="h-5 w-5 text-[#0f766e]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-semibold">
                            {account.bankName}
                          </p>
                          {account.isPrimary && (
                            <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/20 text-xs">
                              Primary
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {account.accountType} • {account.accountNumber}
                        </p>
                      </div>
                    </div>
                    {account.isPrimary && (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    )}
                  </div>
                ))}

                <Button variant="outline" className="w-full" size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Bank Account
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Pay History Section */}
          <div className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      Payment History
                    </CardTitle>
                    <CardDescription>
                      Recent salary and bonus payments
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <CreditCard className="mr-2 h-4 w-4" />
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {employee.payHistory?.map((payment, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                    >
                      <div>
                        <p className="text-sm font-semibold">{payment.date}</p>
                        <p className="text-xs text-muted-foreground">
                          {payment.type} • {payment.method}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold">{payment.amount}</p>
                        <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/20 text-xs">
                          {payment.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
