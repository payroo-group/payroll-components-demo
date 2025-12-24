import type { Route } from "./+types/dashboard";
import { DashboardPage } from "../components/dashboard-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard | HR Management" },
    { name: "description", content: "HR management dashboard" },
  ];
}

export default function Dashboard() {
  return <DashboardPage />;
}
