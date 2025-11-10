import type { Route } from "./+types/reports";
import { ReportsPage } from "../components/reports-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Reports | Driver Management" },
    { name: "description", content: "View payslips and financial reports" },
  ];
}

export default function ReportsRoute() {
  return <ReportsPage />;
}
