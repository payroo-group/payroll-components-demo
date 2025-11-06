import type { Route } from "./+types/timesheets";
import { TimesheetsPage } from "../components/timesheets-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Timesheets | Driver Management" },
    { name: "description", content: "Manage driver timesheets and work hours" },
  ];
}

export default function TimesheetsRoute() {
  return <TimesheetsPage />;
}

