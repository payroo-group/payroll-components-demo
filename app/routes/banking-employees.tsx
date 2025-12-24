import type { Route } from "./+types/banking-employees";
import { BankingEmployeesPage } from "../components/banking-employees-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Employees | NeoBank Business" },
    { name: "description", content: "View and manage your employee directory" },
  ];
}

export default function BankingEmployees() {
  return <BankingEmployeesPage />;
}

