import type { Route } from "./+types/employee-profiles";
import { EmployeeProfilesPage } from "../../components/hr/hr-profiles-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Employee Profiles | HR Management" },
    { name: "description", content: "View and manage all employee profiles" },
  ];
}

export default function EmployeeProfilesRoute() {
  return <EmployeeProfilesPage />;
}