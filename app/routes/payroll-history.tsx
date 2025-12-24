import type { Route } from "./+types/payroll-history";
import { PayrollHistoryPage } from "../components/payroll-history-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Payroll History | HR Management" },
    { name: "description", content: "View historical payroll records" },
  ];
}

export default function PayrollHistoryRoute() {
  return <PayrollHistoryPage />;
}
