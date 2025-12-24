import type { Route } from "./+types/driver-dashboard";
import { DashboardPage } from "../../components/driverFleet/driver-dashboard-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard | Driver Management" },
    { name: "description", content: "Driver management dashboard" },
  ];
}

export default function DriverDashboard() {
  return <DashboardPage />;
}

