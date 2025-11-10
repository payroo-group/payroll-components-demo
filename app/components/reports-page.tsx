"use client";

import { FileText } from "lucide-react";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "~/components/ui/sidebar";
import { DriverManagementSidebar } from "~/components/driver-management-sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

export function ReportsPage() {
  return (
    <SidebarProvider>
      <DriverManagementSidebar />
      <SidebarInset>
        <header className="flex h-16 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <h1 className="text-lg font-semibold">Reports</h1>
        </header>
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h2 className="text-3xl font-bold">Financial Reports & Payslips</h2>
            <p className="text-muted-foreground mt-2">
              Access payslips, financial reports, and payment documentation
            </p>
          </div>

          {/* Tabs Navigation */}
          <Tabs defaultValue="payroll-summary" className="w-full">
            <TabsList className="w-full h-auto flex flex-wrap justify-start gap-0 bg-transparent p-0 border-b border-border mb-6">
              <TabsTrigger
                value="payroll-summary"
                className="rounded-none border-0 border-b-2 border-b-transparent data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2"
              >
                Payroll Summary
              </TabsTrigger>
              <TabsTrigger
                value="payroll-variance"
                className="rounded-none border-0 border-b-2 border-b-transparent data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2"
              >
                Payroll Variance
              </TabsTrigger>
              <TabsTrigger
                value="payroll-tax"
                className="rounded-none border-0 border-b-2 border-b-transparent data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2"
              >
                Payroll Tax
              </TabsTrigger>
              <TabsTrigger
                value="finalisations"
                className="rounded-none border-0 border-b-2 border-b-transparent data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2"
              >
                Finalisations
              </TabsTrigger>
              <TabsTrigger
                value="timesheets"
                className="rounded-none border-0 border-b-2 border-b-transparent data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2"
              >
                Timesheets
              </TabsTrigger>
              <TabsTrigger
                value="leave-balances"
                className="rounded-none border-0 border-b-2 border-b-transparent data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2"
              >
                Leave Balances
              </TabsTrigger>
              <TabsTrigger
                value="leave-requests"
                className="rounded-none border-0 border-b-2 border-b-transparent data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2"
              >
                Leave Requests
              </TabsTrigger>
              <TabsTrigger
                value="expense-claims"
                className="rounded-none border-0 border-b-2 border-b-transparent data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2"
              >
                Expense Claims
              </TabsTrigger>
              <TabsTrigger
                value="costing"
                className="rounded-none border-0 border-b-2 border-b-transparent data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2"
              >
                Costing
              </TabsTrigger>
              <TabsTrigger
                value="pay-items"
                className="rounded-none border-0 border-b-2 border-b-transparent data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2"
              >
                Pay Items
              </TabsTrigger>
              <TabsTrigger
                value="super-contributions"
                className="rounded-none border-0 border-b-2 border-b-transparent data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2"
              >
                Super Contributions
              </TabsTrigger>
              <TabsTrigger
                value="gross-to-net"
                className="rounded-none border-0 border-b-2 border-b-transparent data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2"
              >
                Gross To Net
              </TabsTrigger>
              <TabsTrigger
                value="employee-contact"
                className="rounded-none border-0 border-b-2 border-b-transparent data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2"
              >
                Employee Contact Details
              </TabsTrigger>
            </TabsList>

            {/* Payroll Summary Tab */}
            <TabsContent value="payroll-summary">
              <Card className="min-h-[500px]">
                <CardHeader>
                  <CardTitle>Payroll Summary</CardTitle>
                  <CardDescription>
                    Embedded payroll summary component will be added here
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center min-h-[400px]">
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                      <FileText className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Payroll Summary Placeholder
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-md">
                        Add your embedded payroll summary component here
                      </p>
                    </div>
                    <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                      <code className="text-sm text-muted-foreground">
                        {`{/* Embedded component */}`}
                      </code>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Payroll Variance Tab */}
            <TabsContent value="payroll-variance">
              <Card className="min-h-[500px]">
                <CardHeader>
                  <CardTitle>Payroll Variance</CardTitle>
                  <CardDescription>
                    Embedded payroll variance component will be added here
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center min-h-[400px]">
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                      <FileText className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Payroll Variance Placeholder
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-md">
                        Add your embedded payroll variance component here
                      </p>
                    </div>
                    <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                      <code className="text-sm text-muted-foreground">
                        {`{/* Embedded component */}`}
                      </code>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Payroll Tax Tab */}
            <TabsContent value="payroll-tax">
              <Card className="min-h-[500px]">
                <CardHeader>
                  <CardTitle>Payroll Tax</CardTitle>
                  <CardDescription>
                    Embedded payroll tax component will be added here
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center min-h-[400px]">
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                      <FileText className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Payroll Tax Placeholder
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-md">
                        Add your embedded payroll tax component here
                      </p>
                    </div>
                    <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                      <code className="text-sm text-muted-foreground">
                        {`{/* Embedded component */}`}
                      </code>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Finalisations Tab */}
            <TabsContent value="finalisations">
              <Card className="min-h-[500px]">
                <CardHeader>
                  <CardTitle>Finalisations</CardTitle>
                  <CardDescription>
                    Embedded finalisations component will be added here
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center min-h-[400px]">
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                      <FileText className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Finalisations Placeholder
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-md">
                        Add your embedded finalisations component here
                      </p>
                    </div>
                    <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                      <code className="text-sm text-muted-foreground">
                        {`{/* Embedded component */}`}
                      </code>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Timesheets Tab */}
            <TabsContent value="timesheets">
              <Card className="min-h-[500px]">
                <CardHeader>
                  <CardTitle>Timesheets</CardTitle>
                  <CardDescription>
                    Embedded timesheets component will be added here
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center min-h-[400px]">
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                      <FileText className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Timesheets Placeholder
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-md">
                        Add your embedded timesheets component here
                      </p>
                    </div>
                    <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                      <code className="text-sm text-muted-foreground">
                        {`{/* Embedded component */}`}
                      </code>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Leave Balances Tab */}
            <TabsContent value="leave-balances">
              <Card className="min-h-[500px]">
                <CardHeader>
                  <CardTitle>Leave Balances</CardTitle>
                  <CardDescription>
                    Embedded leave balances component will be added here
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center min-h-[400px]">
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                      <FileText className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Leave Balances Placeholder
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-md">
                        Add your embedded leave balances component here
                      </p>
                    </div>
                    <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                      <code className="text-sm text-muted-foreground">
                        {`{/* Embedded component */}`}
                      </code>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Leave Requests Tab */}
            <TabsContent value="leave-requests">
              <Card className="min-h-[500px]">
                <CardHeader>
                  <CardTitle>Leave Requests</CardTitle>
                  <CardDescription>
                    Embedded leave requests component will be added here
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center min-h-[400px]">
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                      <FileText className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Leave Requests Placeholder
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-md">
                        Add your embedded leave requests component here
                      </p>
                    </div>
                    <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                      <code className="text-sm text-muted-foreground">
                        {`{/* Embedded component */}`}
                      </code>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Expense Claims Tab */}
            <TabsContent value="expense-claims">
              <Card className="min-h-[500px]">
                <CardHeader>
                  <CardTitle>Expense Claims</CardTitle>
                  <CardDescription>
                    Embedded expense claims component will be added here
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center min-h-[400px]">
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                      <FileText className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Expense Claims Placeholder
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-md">
                        Add your embedded expense claims component here
                      </p>
                    </div>
                    <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                      <code className="text-sm text-muted-foreground">
                        {`{/* Embedded component */}`}
                      </code>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Costing Tab */}
            <TabsContent value="costing">
              <Card className="min-h-[500px]">
                <CardHeader>
                  <CardTitle>Costing</CardTitle>
                  <CardDescription>
                    Embedded costing component will be added here
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center min-h-[400px]">
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                      <FileText className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Costing Placeholder
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-md">
                        Add your embedded costing component here
                      </p>
                    </div>
                    <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                      <code className="text-sm text-muted-foreground">
                        {`{/* Embedded component */}`}
                      </code>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Pay Items Tab */}
            <TabsContent value="pay-items">
              <Card className="min-h-[500px]">
                <CardHeader>
                  <CardTitle>Pay Items</CardTitle>
                  <CardDescription>
                    Embedded pay items component will be added here
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center min-h-[400px]">
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                      <FileText className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Pay Items Placeholder
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-md">
                        Add your embedded pay items component here
                      </p>
                    </div>
                    <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                      <code className="text-sm text-muted-foreground">
                        {`{/* Embedded component */}`}
                      </code>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Super Contributions Tab */}
            <TabsContent value="super-contributions">
              <Card className="min-h-[500px]">
                <CardHeader>
                  <CardTitle>Super Contributions</CardTitle>
                  <CardDescription>
                    Embedded super contributions component will be added here
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center min-h-[400px]">
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                      <FileText className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Super Contributions Placeholder
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-md">
                        Add your embedded super contributions component here
                      </p>
                    </div>
                    <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                      <code className="text-sm text-muted-foreground">
                        {`{/* Embedded component */}`}
                      </code>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Gross To Net Tab */}
            <TabsContent value="gross-to-net">
              <Card className="min-h-[500px]">
                <CardHeader>
                  <CardTitle>Gross To Net</CardTitle>
                  <CardDescription>
                    Embedded gross to net component will be added here
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center min-h-[400px]">
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                      <FileText className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Gross To Net Placeholder
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-md">
                        Add your embedded gross to net component here
                      </p>
                    </div>
                    <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                      <code className="text-sm text-muted-foreground">
                        {`{/* Embedded component */}`}
                      </code>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Employee Contact Details Tab */}
            <TabsContent value="employee-contact">
              <Card className="min-h-[500px]">
                <CardHeader>
                  <CardTitle>Employee Contact Details</CardTitle>
                  <CardDescription>
                    Embedded employee contact details component will be added
                    here
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center min-h-[400px]">
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                      <FileText className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Employee Contact Details Placeholder
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-md">
                        Add your embedded employee contact details component
                        here
                      </p>
                    </div>
                    <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                      <code className="text-sm text-muted-foreground">
                        {`{/* Embedded component */}`}
                      </code>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
