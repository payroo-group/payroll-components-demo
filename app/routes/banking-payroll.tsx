import type { Route } from "./+types/banking-payroll";
import { BankingPayrollPage } from "../components/banking-payroll-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Run Payroll | NeoBank Business" },
    { name: "description", content: "Process employee payroll and manage payments" },
  ];
}

export default function BankingPayroll() {
  return <BankingPayrollPage />;
}

