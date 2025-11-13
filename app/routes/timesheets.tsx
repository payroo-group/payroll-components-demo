import type { Route } from "./+types/timesheets";
import { TimesheetsPage } from "../components/timesheets-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Timesheets | HR Management" },
    { name: "description", content: "Manage employee timesheets and work hours" },
  ];
}

export default function TimesheetsRoute() {
  return <TimesheetsPage />;
}
