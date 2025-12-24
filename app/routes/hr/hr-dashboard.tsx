import type { Route } from "./+types/hr-dashboard";
import { HRDashboardPage } from "../../components/hr/hr-dashboard-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard | HR Management" },
    { name: "description", content: "HR management dashboard" },
  ];
}

export default function HRDashboard() {
  return <HRDashboardPage />;
}

