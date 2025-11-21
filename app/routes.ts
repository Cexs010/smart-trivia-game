import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("configuration", "routes/configuration.tsx"),
    route("gameOptions", "routes/gameOptions.tsx"),
    route("Trivia", "routes/trivia.tsx"),
] satisfies RouteConfig;
