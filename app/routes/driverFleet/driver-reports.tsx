import type { Route } from "./+types/driver-reports";
import { DriverReportsPage } from "../../components/driverFleet/driver-reports-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Reports | Driver Management" },
    { name: "description", content: "View driver payslips and financial reports" },
  ];
}

export default function DriverReportsRoute() {
  return <DriverReportsPage />;
}

