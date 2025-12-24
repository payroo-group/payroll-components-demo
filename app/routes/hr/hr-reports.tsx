import type { Route } from "./+types/hr-reports";
import { HRReportsPage } from "../../components/hr/hr-reports-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Reports | HR Management" },
    { name: "description", content: "View employee payslips and financial reports" },
  ];
}

export default function HRReportsRoute() {
  return <HRReportsPage />;
}

