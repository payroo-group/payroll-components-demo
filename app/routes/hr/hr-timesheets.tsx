import type { Route } from "./+types/hr-timesheets";
import { HRTimesheetsPage } from "../../components/hr/hr-timesheets-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Timesheets | HR Management" },
    { name: "description", content: "Manage employee timesheets and work hours" },
  ];
}

export default function HRTimesheetsRoute() {
  return <HRTimesheetsPage />;
}

