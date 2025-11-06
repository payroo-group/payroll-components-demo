import type { Route } from "./+types/employee-payroll.$id";
import { EmployeePayrollPage } from "../components/employee-payroll-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Employee Payroll | Driver Management" },
    { name: "description", content: "View employee payroll details" },
  ];
}

export default function EmployeePayrollRoute() {
  return <EmployeePayrollPage />;
}

