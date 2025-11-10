import type { Route } from "./+types/driver-detail.$id";
import { DriverDetailPage } from "../components/driver-detail-page";

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: `Driver Details | Driver Management` },
    { name: "description", content: "View detailed driver information" },
  ];
}

export default function DriverDetailRoute() {
  return <DriverDetailPage />;
}
