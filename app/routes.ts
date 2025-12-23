import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("dashboard", "routes/dashboard.tsx"),
    route("driver-profiles", "routes/driver-profiles.tsx"),
    route("driver-detail/:id", "routes/driver-detail.$id.tsx"),
    route("payroll", "routes/payroll.tsx"),
    route("payroll/onboarding", "routes/onboard-payroll.tsx"),
    route("payroll-history", "routes/payroll-history.tsx"),
    route("employee-payroll/:id", "routes/employee-payroll.$id.tsx"),
    route("calendar", "routes/calendar.tsx"),
    route("timesheets", "routes/timesheets.tsx"),
    route("reports", "routes/reports.tsx"),
    route("api/session", "routes/api/session.ts"),
    route("api/embed-url", "routes/api/embed-url.ts"),
    // Banking Demo App routes
    route("banking", "routes/banking.tsx"),
    route("banking/calendar", "routes/banking-calendar.tsx"),
    route("banking/payroll", "routes/banking-payroll.tsx"),
    route("banking/payroll/history", "routes/banking-payroll-history.tsx"),
] satisfies RouteConfig;
