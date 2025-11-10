import type { Route } from "./+types/calendar";
import { CalendarPage } from "../components/calendar-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Calendar | Driver Management" },
    { name: "description", content: "Manage schedules and appointments" },
  ];
}

export default function CalendarRoute() {
  return <CalendarPage />;
}
