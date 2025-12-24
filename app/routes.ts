import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("dashboard", "routes/dashboard.tsx"),
    route("driver-profiles", "routes/driverFleet/driver-profiles.tsx"),
    route("driver-detail/:id", "routes/driverFleet/driver-detail.$id.tsx"),
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
    route("banking", "routes/banking/banking.tsx"),
    route("banking/calendar", "routes/banking/banking-calendar.tsx"),
    route("banking/payroll", "routes/banking/banking-payroll.tsx"),
    route("banking/payroll/history", "routes/banking/banking-payroll-history.tsx"),
    route("banking/payroll/reports", "routes/banking/banking-reports.tsx"),
    route("banking/payroll/super-batches", "routes/banking/banking-super-batches.tsx"),
    route("banking/payroll/expense-claims", "routes/banking/banking-expense-claims.tsx"),
    route("banking/employees", "routes/banking/banking-employees.tsx"),
    route("banking/settings", "routes/banking/banking-settings.tsx"),
] satisfies RouteConfig;
