import type { Route } from "./+types/hr-onboard-payroll";
import { HROnboardPayrollPage } from "../../components/hr/hr-onboard-payroll-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Enable Payroll | HR Management" },
    { name: "description", content: "Set up and enable your employee payroll system" },
  ];
}

export default function HROnboardPayrollRoute() {
  return <HROnboardPayrollPage />;
}

