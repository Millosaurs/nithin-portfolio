import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("solura", "routes/solura.tsx"),
] satisfies RouteConfig;
