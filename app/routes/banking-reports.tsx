import type { Route } from "./+types/banking-reports";
import { BankingReportsPage } from "../components/banking-reports-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Reports | NeoBank Business" },
    { name: "description", content: "Access payslips, financial reports, and payment documentation" },
  ];
}

export default function BankingReports() {
  return <BankingReportsPage />;
}

