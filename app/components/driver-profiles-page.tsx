"use client"

import { useState } from "react";
import { MoreHorizontal, Plus, Settings2 } from "lucide-react";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "~/components/ui/sidebar";
import { DriverManagementSidebar } from "~/components/driver-management-sidebar";
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

// Sample driver data
const driversData = [
  {
    id: 1,
    name: "John Martinez",
    employeeId: "DRV-001",
    status: "Active",
    vehicleType: "Delivery Van",
    licenseNumber: "DL-5847392",
    rating: 4.8,
    totalDeliveries: 1247,
    reviewer: "Eddie Lake",
  },
  {
    id: 2,
    name: "Sarah Chen",
    employeeId: "DRV-002",
    status: "Active",
    vehicleType: "Cargo Truck",
    licenseNumber: "DL-9384756",
    rating: 4.9,
    totalDeliveries: 982,
    reviewer: "Eddie Lake",
  },
  {
    id: 3,
    name: "Michael Johnson",
    employeeId: "DRV-003",
    status: "On Leave",
    vehicleType: "Passenger Van",
    licenseNumber: "DL-2847563",
    rating: 4.6,
    totalDeliveries: 756,
    reviewer: "Jamik Tashpulatov",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    employeeId: "DRV-004",
    status: "Active",
    vehicleType: "Delivery Van",
    licenseNumber: "DL-6473829",
    rating: 4.7,
    totalDeliveries: 1103,
    reviewer: "Jamik Tashpulatov",
  },
  {
    id: 5,
    name: "David Kim",
    employeeId: "DRV-005",
    status: "Inactive",
    vehicleType: "Service Vehicle",
    licenseNumber: "DL-8392047",
    rating: 4.5,
    totalDeliveries: 543,
    reviewer: "Eddie Lake",
  },
  {
    id: 6,
    name: "Lisa Anderson",
    employeeId: "DRV-006",
    status: "Active",
    vehicleType: "Cargo Truck",
    licenseNumber: "DL-1928374",
    rating: 4.9,
    totalDeliveries: 1456,
    reviewer: "Jamik Tashpulatov",
  },
  {
    id: 7,
    name: "Robert Taylor",
    employeeId: "DRV-007",
    status: "Active",
    vehicleType: "Passenger Van",
    licenseNumber: "DL-5647382",
    rating: 4.8,
    totalDeliveries: 892,
    reviewer: "Eddie Lake",
  },
  {
    id: 8,
    name: "Maria Garcia",
    employeeId: "DRV-008",
    status: "On Leave",
    vehicleType: "Delivery Van",
    licenseNumber: "DL-9283746",
    rating: 4.7,
    totalDeliveries: 678,
    reviewer: "Jamik Tashpulatov",
  },
  {
    id: 9,
    name: "James Wilson",
    employeeId: "DRV-009",
    status: "Active",
    vehicleType: "Cargo Truck",
    licenseNumber: "DL-3847562",
    rating: 4.6,
    totalDeliveries: 1234,
    reviewer: "Eddie Lake",
  },
  {
    id: 10,
    name: "Jennifer Brown",
    employeeId: "DRV-010",
    status: "Active",
    vehicleType: "Service Vehicle",
    licenseNumber: "DL-7463829",
    rating: 4.8,
    totalDeliveries: 923,
    reviewer: "Jamik Tashpulatov",
  },
];

export function DriverProfilesPage() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const toggleRowSelection = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const toggleAllRows = () => {
    if (selectedRows.length === driversData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(driversData.map((driver) => driver.id));
    }
  };

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
          <h1 className="text-lg font-semibold">Driver Profiles</h1>
        </header>
        <main className="flex-1 p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">All Drivers</h2>
              <p className="text-sm text-muted-foreground">
                Manage and view all driver profiles
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Settings2 className="mr-2 h-4 w-4" />
                Customize Columns
              </Button>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Driver
              </Button>
            </div>
          </div>

          {selectedRows.length > 0 && (
            <div className="mb-4 rounded-md border bg-muted/50 p-3">
              <p className="text-sm">
                {selectedRows.length} of {driversData.length} row(s) selected.
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
                      checked={selectedRows.length === driversData.length}
                      onChange={toggleAllRows}
                      className="h-4 w-4 rounded border-gray-300"
                    />
                  </TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Employee ID</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Vehicle Type</TableHead>
                  <TableHead>License Number</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Total Deliveries</TableHead>
                  <TableHead>Reviewer</TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {driversData.map((driver) => (
                  <TableRow key={driver.id}>
                    <TableCell>
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(driver.id)}
                        onChange={() => toggleRowSelection(driver.id)}
                        className="h-4 w-4 rounded border-gray-300"
                      />
                    </TableCell>
                    <TableCell className="font-medium">{driver.name}</TableCell>
                    <TableCell className="text-muted-foreground">
                      {driver.employeeId}
                    </TableCell>
                    <TableCell>{getStatusBadge(driver.status)}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{driver.vehicleType}</Badge>
                    </TableCell>
                    <TableCell className="font-mono text-sm">
                      {driver.licenseNumber}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★</span>
                        <span className="font-medium">{driver.rating}</span>
                      </div>
                    </TableCell>
                    <TableCell>{driver.totalDeliveries}</TableCell>
                    <TableCell className="text-muted-foreground">
                      {driver.reviewer}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit Driver</DropdownMenuItem>
                          <DropdownMenuItem>Assign Vehicle</DropdownMenuItem>
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
              {selectedRows.length} of {driversData.length} row(s) selected.
            </p>
            <div className="flex items-center gap-2">
              <p className="text-sm text-muted-foreground">
                Rows per page: {rowsPerPage}
              </p>
              <p className="text-sm text-muted-foreground">
                Page {currentPage} of {Math.ceil(driversData.length / rowsPerPage)}
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
                  disabled={currentPage === Math.ceil(driversData.length / rowsPerPage)}
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                  ›
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  disabled={currentPage === Math.ceil(driversData.length / rowsPerPage)}
                  onClick={() => setCurrentPage(Math.ceil(driversData.length / rowsPerPage))}
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

