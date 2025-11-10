import type { Route } from "./+types/dashboard";
import { DashboardPage } from "../components/dashboard-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard | Driver Management" },
    { name: "description", content: "Driver management dashboard" },
  ];
}

export default function Dashboard() {
  return <DashboardPage />;
}
