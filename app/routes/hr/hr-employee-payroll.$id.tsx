import type { Route } from "./+types/hr-employee-payroll.$id";
import { HREmployeePayrollPage } from "../../components/hr/hr-employee-payroll-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Employee Payroll | HR Management" },
    { name: "description", content: "View employee payroll details" },
  ];
}

export default function HREmployeePayrollRoute() {
  return <HREmployeePayrollPage />;
}

