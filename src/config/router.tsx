import { createBrowserRouter, RouteObject } from "react-router-dom";
import { CustomRoute, routes } from "~/config/routes";

function mapRoutes(routes: CustomRoute[]): RouteObject[] {
  return routes.map((route) => ({
    path: route.path,
    element: <route.element />,
  }));
}

export const router = createBrowserRouter([
  // public
  {
    children: mapRoutes([routes.resume]),
  },
]);
