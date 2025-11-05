import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("dashboard", "routes/dashboard.tsx"),
  route("driver-profiles", "routes/driver-profiles.tsx"),
] satisfies RouteConfig;
