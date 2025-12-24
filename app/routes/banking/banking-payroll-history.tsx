import type { Route } from "./+types/banking-payroll-history";
import { BankingPayrollHistoryPage } from "../../components/banking/banking-payroll-history-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Payroll History | NeoBank Business" },
    { name: "description", content: "View past payroll runs and history" },
  ];
}

export default function BankingPayrollHistory() {
  return <BankingPayrollHistoryPage />;
}

