import type { Route } from "./+types/payroll";
import { OnboardPayrollPage } from "~/components/onboard-payroll-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Enable Payroll | HR Management" },
    { name: "description", content: "Set up and enable your payroll system" },
  ];
}

export default function PayrollRoute() {
  return <OnboardPayrollPage />;
}
