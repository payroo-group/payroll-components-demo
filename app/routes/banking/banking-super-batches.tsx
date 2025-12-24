import type { Route } from "./+types/banking-super-batches";
import { BankingSuperBatchesPage } from "../../components/banking/banking-super-batches-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Super Batches | NeoBank Business" },
    { name: "description", content: "Manage superannuation contribution batches and payments" },
  ];
}

export default function BankingSuperBatches() {
  return <BankingSuperBatchesPage />;
}

