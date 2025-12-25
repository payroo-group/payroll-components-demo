import { type RouteConfig, route, layout, index } from "@react-router/dev/routes";

export default [
    layout("routes/layout.tsx", [
        index("routes/home.tsx"),
        // Driver Fleet routes
        layout("routes/driverFleet/layout.tsx", [
            route("dashboard", "routes/driverFleet/driver-dashboard.tsx"),
            route("driver-profiles", "routes/driverFleet/driver-profiles.tsx"),
            route("driver-detail/:id", "routes/driverFleet/driver-detail.$id.tsx"),
            route("driver-payroll", "routes/driverFleet/driver-payroll.tsx"),
            route("driver-reports", "routes/driverFleet/driver-reports.tsx"),
            route("driver-calendar", "routes/driverFleet/driver-calendar.tsx"),
            route("driver-timesheets", "routes/driverFleet/driver-timesheets.tsx"),
            route("driver-employee-payroll/:id", "routes/driverFleet/driver-employee-payroll.$id.tsx"),
            route("driver-payroll/onboarding", "routes/driverFleet/driver-onboard-payroll.tsx"),
        ]),
        // HR Management routes
        layout("routes/hr/layout.tsx", [
            route("hr-dashboard", "routes/hr/hr-dashboard.tsx"),
            route("employee-profiles", "routes/hr/hr-profiles.tsx"),
            route("employee-detail/:id", "routes/hr/hr-detail.$id.tsx"),
            route("hr-payroll", "routes/hr/hr-payroll.tsx"),
            route("hr-reports", "routes/hr/hr-reports.tsx"),
            route("hr-calendar", "routes/hr/hr-calendar.tsx"),
            route("hr-timesheets", "routes/hr/hr-timesheets.tsx"),
            route("hr-employee-payroll/:id", "routes/hr/hr-employee-payroll.$id.tsx"),
            route("hr-payroll/onboarding", "routes/hr/hr-onboard-payroll.tsx"),
        ]),
        // Banking Demo App routes
        layout("routes/banking/layout.tsx", [
            route("banking", "routes/banking/banking.tsx"),
            route("banking/calendar", "routes/banking/banking-calendar.tsx"),
            route("banking/payroll", "routes/banking/banking-payroll.tsx"),
            route("banking/payroll/onboarding", "routes/banking/banking-onboard-payroll.tsx"),
            route("banking/payroll/history", "routes/banking/banking-payroll-history.tsx"),
            route("banking/payroll/reports", "routes/banking/banking-reports.tsx"),
            route("banking/payroll/super-batches", "routes/banking/banking-super-batches.tsx"),
            route("banking/payroll/expense-claims", "routes/banking/banking-expense-claims.tsx"),
            route("banking/employees", "routes/banking/banking-employees.tsx"),
            route("banking/settings", "routes/banking/banking-settings.tsx"),
        ]),
        // Shared routes (to be organized later)
        route("payroll-history", "routes/payroll-history.tsx"),
        route("api/session", "routes/api/session.ts"),
        route("api/embed-url", "routes/api/embed-url.ts"),
    ]),
] satisfies RouteConfig;
