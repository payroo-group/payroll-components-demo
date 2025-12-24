import type { Route } from "./+types/driver-calendar";
import { DriverCalendarPage } from "../../components/driverFleet/driver-calendar-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Calendar | Driver Management" },
    { name: "description", content: "Manage driver schedules and appointments" },
  ];
}

export default function DriverCalendarRoute() {
  return <DriverCalendarPage />;
}

