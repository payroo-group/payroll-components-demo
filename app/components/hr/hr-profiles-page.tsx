"use client";

import { useState } from "react";
import { MoreHorizontal, Plus, Settings2 } from "lucide-react";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "~/components/ui/sidebar";
import { HRManagementSidebar } from "~/components/hr/hr-management-sidebar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Badge } from "~/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

// Sample employee data
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
  },
  {
    id: "4",
    name: "Emily Rodriguez",
    employeeId: "EMP-004",
    status: "Active",
    department: "Engineering",
    position: "Frontend Developer",
    rating: 4.7,
    totalProjects: 22,
    manager: "Jamik Tashpulatov",
  },
  {
    id: "5",
    name: "David Kim",
    employeeId: "EMP-005",
    status: "Inactive",
    department: "Operations",
    position: "Operations Manager",
    rating: 4.5,
    totalProjects: 11,
    manager: "Eddie Lake",
  },
  {
    id: "6",
    name: "Lisa Anderson",
    employeeId: "EMP-006",
    status: "Active",
    department: "Sales",
    position: "Account Executive",
    rating: 4.9,
    totalProjects: 29,
    manager: "Jamik Tashpulatov",
  },
  {
    id: "7",
    name: "Robert Taylor",
    employeeId: "EMP-007",
    status: "Active",
    department: "Marketing",
    position: "Content Manager",
    rating: 4.8,
    totalProjects: 18,
    manager: "Eddie Lake",
  },
  {
    id: "8",
    name: "Maria Garcia",
    employeeId: "EMP-008",
    status: "On Leave",
    department: "Engineering",
    position: "Backend Developer",
    rating: 4.7,
    totalProjects: 14,
    manager: "Jamik Tashpulatov",
  },
  {
    id: "9",
    name: "James Wilson",
    employeeId: "EMP-009",
    status: "Active",
    department: "Sales",
    position: "Sales Representative",
    rating: 4.6,
    totalProjects: 25,
    manager: "Eddie Lake",
  },
  {
    id: "10",
    name: "Jennifer Brown",
    employeeId: "EMP-010",
    status: "Active",
    department: "Operations",
    position: "Operations Coordinator",
    rating: 4.8,
    totalProjects: 19,
    manager: "Jamik Tashpulatov",
  },
];

export function EmployeeProfilesPage() {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const toggleRowSelection = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id],
    );
  };

  const toggleAllRows = () => {
    if (selectedRows.length === employeesData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(employeesData.map((employee) => employee.id));
    }
  };

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
          <h1 className="text-lg font-semibold">Employees</h1>
        </header>
        <main className="flex-1 p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Employee Directory</h2>
              <p className="text-sm text-muted-foreground">
                View and manage all employee profiles, information, and records
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Settings2 className="mr-2 h-4 w-4" />
                Customize Columns
              </Button>
              <Popover>
                <PopoverTrigger asChild>
                  <Button size="sm" className="bg-[#0f766e] hover:bg-[#0d6559]">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Employee
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-96" align="end">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-lg">Add New Employee</h4>
                      <p className="text-sm text-muted-foreground">
                        Fill in the employee information below
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="employeeId">Employee ID</Label>
                        <Input id="employeeId" placeholder="EMP-011" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="department">Department</Label>
                        <Input id="department" placeholder="Engineering" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="position">Position</Label>
                        <Input id="position" placeholder="Software Developer" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="rating">Rating</Label>
                          <Input
                            id="rating"
                            type="number"
                            step="0.1"
                            placeholder="4.5"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="totalProjects">
                            Total Projects
                          </Label>
                          <Input
                            id="totalProjects"
                            type="number"
                            placeholder="10"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="manager">Manager</Label>
                        <Input id="manager" placeholder="Eddie Lake" />
                      </div>
                      <div className="flex gap-2 justify-end pt-2">
                        <Button variant="outline" size="sm">
                          Cancel
                        </Button>
                        <Button size="sm" className="bg-[#0f766e] hover:bg-[#0d6559]">Add Employee</Button>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {selectedRows.length > 0 && (
            <div className="mb-4 rounded-md border bg-muted/50 p-3">
              <p className="text-sm">
                {selectedRows.length} of {employeesData.length} row(s) selected.
              </p>
            </div>
          )}

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="w-12">
                    <input
                      type="checkbox"
                      checked={selectedRows.length === employeesData.length}
                      onChange={toggleAllRows}
                      className="h-4 w-4 rounded border-gray-300"
                    />
                  </TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Employee ID</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Total Projects</TableHead>
                  <TableHead>Manager</TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employeesData.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell>
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(employee.id)}
                        onChange={() => toggleRowSelection(employee.id)}
                        className="h-4 w-4 rounded border-gray-300"
                      />
                    </TableCell>
                    <TableCell className="font-medium">{employee.name}</TableCell>
                    <TableCell className="text-muted-foreground">
                      {employee.employeeId}
                    </TableCell>
                    <TableCell>{getStatusBadge(employee.status)}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{employee.department}</Badge>
                    </TableCell>
                    <TableCell className="text-sm">
                      {employee.position}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★</span>
                        <span className="font-medium">{employee.rating}</span>
                      </div>
                    </TableCell>
                    <TableCell>{employee.totalProjects}</TableCell>
                    <TableCell className="text-muted-foreground">
                      {employee.manager}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <a href={`/employee-detail/${employee.id}`}>
                              View Details
                            </a>
                          </DropdownMenuItem>
                          <DropdownMenuItem>Edit Employee</DropdownMenuItem>
                          <DropdownMenuItem>Assign Department</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            Deactivate
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {selectedRows.length} of {employeesData.length} row(s) selected.
            </p>
            <div className="flex items-center gap-2">
              <p className="text-sm text-muted-foreground">
                Rows per page: {rowsPerPage}
              </p>
              <p className="text-sm text-muted-foreground">
                Page {currentPage} of{" "}
                {Math.ceil(employeesData.length / rowsPerPage)}
              </p>
              <div className="flex gap-1">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(1)}
                >
                  «
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                >
                  ‹
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  disabled={
                    currentPage === Math.ceil(employeesData.length / rowsPerPage)
                  }
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                  ›
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  disabled={
                    currentPage === Math.ceil(employeesData.length / rowsPerPage)
                  }
                  onClick={() =>
                    setCurrentPage(Math.ceil(employeesData.length / rowsPerPage))
                  }
                >
                  »
                </Button>
              </div>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
