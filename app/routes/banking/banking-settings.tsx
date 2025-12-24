import type { Route } from "./+types/banking-settings";
import { BankingSettingsPage } from "../../components/banking/banking-settings-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Settings | NeoBank Business" },
    { name: "description", content: "Configure payroll settings and preferences" },
  ];
}

export default function BankingSettings() {
  return <BankingSettingsPage />;
}

