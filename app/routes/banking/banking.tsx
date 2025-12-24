import type { Route } from "./+types/banking";
import { BankingDashboardPage } from "../../components/banking/banking-dashboard-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard | NeoBank" },
    { name: "description", content: "NeoBank banking demo dashboard" },
  ];
}

export default function Banking() {
  return <BankingDashboardPage />;
}

