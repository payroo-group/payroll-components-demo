import type { Route } from "./+types/hr-payroll";
import { HRPayrollPage } from "../../components/hr/hr-payroll-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Payroll | HR Management" },
    { name: "description", content: "Manage employee payroll and salaries" },
  ];
}

export default function HRPayrollRoute() {
  return <HRPayrollPage />;
}

