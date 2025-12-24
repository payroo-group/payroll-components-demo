import type { Route } from "./+types/driver-timesheets";
import { DriverTimesheetsPage } from "../../components/driverFleet/driver-timesheets-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Timesheets | Driver Management" },
    { name: "description", content: "Manage driver timesheets and work hours" },
  ];
}

export default function DriverTimesheetsRoute() {
  return <DriverTimesheetsPage />;
}

