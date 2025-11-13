import type { Route } from "./+types/payroll";
import { PayrollPage } from "../components/payroll-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Payroll | HR Management" },
    { name: "description", content: "Manage employee payroll and salaries" },
  ];
}

export default function PayrollRoute() {
  return <PayrollPage />;
}
