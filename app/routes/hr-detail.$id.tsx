import type { Route } from "./+types/hr-detail.$id";
import { EmployeeDetailPage } from "../components/hr-detail-page";

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: `Employee Details | HR Management` },
    { name: "description", content: "View detailed employee information" },
  ];
}

export default function EmployeeDetailRoute() {
  return <EmployeeDetailPage />;
}

