import { BankingOnboardPayrollPage } from "~/components/banking/banking-onboard-payroll-page";
import type { Route } from "./+types/banking-onboard-payroll";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Setup Payroll | NeoBank" },
    { name: "description", content: "Set up and enable your business payroll system" },
  ];
}

export default function BankingOnboardPayroll() {
  return <BankingOnboardPayrollPage />;
}

