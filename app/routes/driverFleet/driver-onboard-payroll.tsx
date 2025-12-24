import type { Route } from "./+types/driver-onboard-payroll";
import { DriverOnboardPayrollPage } from "../../components/driverFleet/driver-onboard-payroll-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Enable Payroll | Driver Management" },
    { name: "description", content: "Set up and enable your driver payroll system" },
  ];
}

export default function DriverOnboardPayrollRoute() {
  return <DriverOnboardPayrollPage />;
}

