import type { Route } from "./+types/hr-calendar";
import { HRCalendarPage } from "../../components/hr/hr-calendar-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Calendar | HR Management" },
    { name: "description", content: "Manage employee schedules and appointments" },
  ];
}

export default function HRCalendarRoute() {
  return <HRCalendarPage />;
}

