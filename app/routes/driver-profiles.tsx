import type { Route } from "./+types/driver-profiles";
import { DriverProfilesPage } from "../components/driver-profiles-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Driver Profiles | Driver Management" },
    { name: "description", content: "View and manage all driver profiles" },
  ];
}

export default function DriverProfilesRoute() {
  return <DriverProfilesPage />;
}

