import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    // Driver Fleet routes
    route("dashboard", "routes/driverFleet/driver-dashboard.tsx"),
    route("driver-profiles", "routes/driverFleet/driver-profiles.tsx"),
    route("driver-detail/:id", "routes/driverFleet/driver-detail.$id.tsx"),
    route("driver-payroll", "routes/driverFleet/driver-payroll.tsx"),
    // HR Management routes
    route("hr-dashboard", "routes/hr/hr-dashboard.tsx"),
    route("employee-profiles", "routes/hr/hr-profiles.tsx"),
    route("employee-detail/:id", "routes/hr/hr-detail.$id.tsx"),
    route("hr-payroll", "routes/hr/hr-payroll.tsx"),
    // Shared routes (to be organized later)
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
