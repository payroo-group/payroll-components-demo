import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("dashboard", "routes/dashboard.tsx"),
  route("employee-profiles", "routes/hr-profiles.tsx"),
  route("employee-detail/:id", "routes/hr-detail.$id.tsx"),
  route("payroll", "routes/payroll.tsx"),
  route("payroll/onboarding", "routes/onboard-payroll.tsx"),
  route("payroll-history", "routes/payroll-history.tsx"),
  route("employee-payroll/:id", "routes/employee-payroll.$id.tsx"),
  route("calendar", "routes/calendar.tsx"),
  route("timesheets", "routes/timesheets.tsx"),
  route("reports", "routes/reports.tsx"),
  route("api/session", "routes/api/session.ts"),
  route("api/embed-url", "routes/api/embed-url.ts"),
] satisfies RouteConfig;
