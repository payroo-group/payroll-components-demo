import type { Route } from "./+types/banking-calendar";
import { BankingCalendarPage } from "../../components/banking/banking-calendar-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Calendar | NeoBank Business" },
    { name: "description", content: "Business calendar and payment schedules" },
  ];
}

export default function BankingCalendar() {
  return <BankingCalendarPage />;
}

