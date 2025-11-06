import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("dashboard", "routes/dashboard.tsx"),
  route("driver-profiles", "routes/driver-profiles.tsx"),
  route("driver-detail/:id", "routes/driver-detail.$id.tsx"),
  route("payroll", "routes/payroll.tsx"),
  route("payroll-history", "routes/payroll-history.tsx"),
  route("employee-payroll/:id", "routes/employee-payroll.$id.tsx"),
  route("calendar", "routes/calendar.tsx"),
  route("timesheets", "routes/timesheets.tsx"),
  route("reports", "routes/reports.tsx"),
] satisfies RouteConfig;
