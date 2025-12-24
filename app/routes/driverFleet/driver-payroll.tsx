import type { Route } from "./+types/driver-payroll";
import { DriverPayrollPage } from "../../components/driverFleet/driver-payroll-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Payroll | Driver Management" },
    { name: "description", content: "Manage driver payroll and salaries" },
  ];
}

export default function DriverPayrollRoute() {
  return <DriverPayrollPage />;
}

