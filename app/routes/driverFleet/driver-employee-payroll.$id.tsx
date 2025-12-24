import type { Route } from "./+types/driver-employee-payroll.$id";
import { DriverEmployeePayrollPage } from "../../components/driverFleet/driver-employee-payroll-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Driver Payroll | Driver Management" },
    { name: "description", content: "View driver payroll details" },
  ];
}

export default function DriverEmployeePayrollRoute() {
  return <DriverEmployeePayrollPage />;
}

