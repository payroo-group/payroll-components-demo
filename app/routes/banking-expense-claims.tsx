import type { Route } from "./+types/banking-expense-claims";
import { BankingExpenseClaimsPage } from "../components/banking-expense-claims-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Expense Claims | NeoBank Business" },
    { name: "description", content: "Submit and manage employee expense claims and reimbursements" },
  ];
}

export default function BankingExpenseClaims() {
  return <BankingExpenseClaimsPage />;
}

