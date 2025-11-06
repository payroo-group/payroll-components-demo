"use client"

import { useParams, useNavigate } from "react-router";
import { ArrowLeft, Mail, Phone, MapPin, Calendar, Star, Package, AlertCircle, DollarSign, CreditCard, Building2, Hash, CheckCircle2, Plus, FileText } from "lucide-react";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "~/components/ui/sidebar";
import { DriverManagementSidebar } from "~/components/driver-management-sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
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

// Sample driver data - in a real app, this would come from a database
const driversData = [
  {
    id: "1",
    name: "John Martinez",
    employeeId: "DRV-001",
    status: "Active",
    vehicleType: "Delivery Van",
    licenseNumber: "DL-5847392",
    rating: 4.8,
    totalDeliveries: 1247,
    reviewer: "Eddie Lake",
    email: "john.martinez@company.com",
    phone: "+61 2 9876 5432",
    address: "123 Main St, San Francisco, CA 94102",
    joinDate: "January 15, 2022",
    vehicleAssigned: "Van #247 (Toyota Hiace)",
    emergencyContact: "Maria Martinez - +61 412 345 678",
    licenseExpiry: "December 31, 2025",
    completionRate: 98,
    onTimeRate: 96,
    customerRating: 4.8,
    totalDistance: "45,678 km",
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
      { date: "Dec 15, 2024", amount: "$2,450.00", type: "Salary", method: "Direct Deposit", status: "Paid" },
      { date: "Nov 15, 2024", amount: "$2,450.00", type: "Salary", method: "Direct Deposit", status: "Paid" },
      { date: "Oct 31, 2024", amount: "$350.00", type: "Bonus", method: "Direct Deposit", status: "Paid" },
      { date: "Oct 15, 2024", amount: "$2,450.00", type: "Salary", method: "Direct Deposit", status: "Paid" },
      { date: "Sep 15, 2024", amount: "$2,450.00", type: "Salary", method: "Direct Deposit", status: "Paid" },
    ],
  },
  {
    id: "2",
    name: "Sarah Chen",
    employeeId: "DRV-002",
    status: "Active",
    vehicleType: "Cargo Truck",
    licenseNumber: "DL-9384756",
    rating: 4.9,
    totalDeliveries: 982,
    reviewer: "Eddie Lake",
    email: "sarah.chen@company.com",
    phone: "+61 3 8765 4321",
    address: "456 Oak Ave, Oakland, CA 94601",
    joinDate: "March 22, 2022",
    vehicleAssigned: "Truck #189 (Isuzu NPR)",
    emergencyContact: "David Chen - +61 423 456 789",
    licenseExpiry: "June 15, 2026",
    completionRate: 99,
    onTimeRate: 97,
    customerRating: 4.9,
    totalDistance: "52,341 km",
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
      { date: "Dec 15, 2024", amount: "$2,650.00", type: "Salary", method: "Direct Deposit", status: "Paid" },
      { date: "Nov 15, 2024", amount: "$2,650.00", type: "Salary", method: "Direct Deposit", status: "Paid" },
      { date: "Oct 15, 2024", amount: "$2,650.00", type: "Salary", method: "Direct Deposit", status: "Paid" },
      { date: "Sep 15, 2024", amount: "$2,650.00", type: "Salary", method: "Direct Deposit", status: "Paid" },
    ],
  },
  {
    id: "3",
    name: "Michael Johnson",
    employeeId: "DRV-003",
    status: "On Leave",
    vehicleType: "Passenger Van",
    licenseNumber: "DL-2847563",
    rating: 4.6,
    totalDeliveries: 756,
    reviewer: "Jamik Tashpulatov",
    email: "michael.j@company.com",
    phone: "+61 7 5432 1098",
    address: "789 Pine St, Berkeley, CA 94704",
    joinDate: "June 10, 2022",
    vehicleAssigned: "Van #312 (Mercedes Sprinter)",
    emergencyContact: "Lisa Johnson - +61 434 567 890",
    licenseExpiry: "March 20, 2026",
    completionRate: 95,
    onTimeRate: 93,
    customerRating: 4.6,
    totalDistance: "38,912 km",
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
      { date: "Nov 15, 2024", amount: "$2,300.00", type: "Salary", method: "Direct Deposit", status: "Paid" },
      { date: "Oct 15, 2024", amount: "$2,300.00", type: "Salary", method: "Direct Deposit", status: "Paid" },
      { date: "Sep 15, 2024", amount: "$2,300.00", type: "Salary", method: "Direct Deposit", status: "Paid" },
    ],
  },
];

export function DriverDetailPage() {
  const params = useParams();
  const navigate = useNavigate();
  const driverId = params.id;
  
  // Find the driver by ID
  const driver = driversData.find((d) => d.id === driverId);

  if (!driver) {
    return (
      <SidebarProvider>
        <DriverManagementSidebar />
        <SidebarInset>
          <header className="flex h-16 items-center gap-2 border-b px-4">
            <SidebarTrigger />
            <h1 className="text-lg font-semibold">Driver Not Found</h1>
          </header>
          <main className="flex-1 p-6">
            <div className="flex flex-col items-center justify-center h-full">
              <AlertCircle className="h-16 w-16 text-muted-foreground mb-4" />
              <h2 className="text-2xl font-bold mb-2">Driver Not Found</h2>
              <p className="text-muted-foreground mb-4">The driver you're looking for doesn't exist.</p>
              <Button onClick={() => navigate("/driver-profiles")}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Driver Profiles
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
        return <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/20">Active</Badge>;
      case "On Leave":
        return <Badge className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20">On Leave</Badge>;
      case "Inactive":
        return <Badge className="bg-gray-500/10 text-gray-500 hover:bg-gray-500/20">Inactive</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <SidebarProvider>
      <DriverManagementSidebar />
      <SidebarInset>
        <header className="flex h-16 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <Button variant="ghost" size="sm" onClick={() => navigate("/driver-profiles")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h1 className="text-lg font-semibold">Driver Details</h1>
        </header>
        <main className="flex-1 p-6">
          {/* Header Section */}
          <div className="mb-6 flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">
                  {driver.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
              <div>
                <h2 className="text-3xl font-bold">{driver.name}</h2>
                <p className="text-muted-foreground">{driver.employeeId}</p>
                <div className="flex items-center gap-2 mt-2">
                  {getStatusBadge(driver.status)}
                  <Badge variant="outline">{driver.vehicleType}</Badge>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Edit Profile</Button>
              <Button onClick={() => navigate(`/employee-payroll/${driverId}`)}>
                Manage Payroll
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Contact Information */}
            <Card className="col-span-1 md:col-span-2">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Personal and emergency contact details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">{driver.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">{driver.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Address</p>
                      <p className="text-sm text-muted-foreground">{driver.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Join Date</p>
                      <p className="text-sm text-muted-foreground">{driver.joinDate}</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm font-medium mb-2">Emergency Contact</p>
                  <p className="text-sm text-muted-foreground">{driver.emergencyContact}</p>
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
                    <span className="text-sm font-bold">{driver.completionRate}%</span>
                  </div>
                  <Progress value={driver.completionRate} />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">On-Time Rate</span>
                    <span className="text-sm font-bold">{driver.onTimeRate}%</span>
                  </div>
                  <Progress value={driver.onTimeRate} />
                </div>
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Customer Rating</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-bold">{driver.customerRating}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* License & Vehicle */}
            <Card>
              <CardHeader>
                <CardTitle>License & Vehicle</CardTitle>
                <CardDescription>Credentials and assignments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-1">License Number</p>
                  <p className="text-sm text-muted-foreground font-mono">{driver.licenseNumber}</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">License Expiry</p>
                  <p className="text-sm text-muted-foreground">{driver.licenseExpiry}</p>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm font-medium mb-1">Assigned Vehicle</p>
                  <p className="text-sm text-muted-foreground">{driver.vehicleAssigned}</p>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Delivery Statistics</CardTitle>
                <CardDescription>Activity overview</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm font-medium">Total Deliveries</span>
                  </div>
                  <span className="text-2xl font-bold">{driver.totalDeliveries}</span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-sm font-medium">Total Distance</span>
                  <span className="text-xl font-bold">{driver.totalDistance}</span>
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
                {driver.bankAccounts?.map((account) => (
                  <div
                    key={account.id}
                    className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Building2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-semibold">{account.bankName}</p>
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
                    <CardDescription>Recent salary and bonus payments</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <CreditCard className="mr-2 h-4 w-4" />
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center min-h-[400px]">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center">
                    <FileText className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Embedded Payslip Placeholder</h3>
                    <p className="text-sm text-muted-foreground max-w-md">
                      This section is reserved for your embedded payslip component.
                      Add detailed payment history, salary breakdowns, and downloadable payslips here.
                    </p>
                  </div>
                  <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                    <code className="text-sm text-muted-foreground">
                      {`{/* Add your embedded payslip component here */}`}
                    </code>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

