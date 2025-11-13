import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { redirect } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "HR Management System" },
    { name: "description", content: "Comprehensive Human Resources Management System" },
  ];
}

export function loader() {
  return redirect("/dashboard");
}

export default function Home() {
  return <Welcome />;
}
