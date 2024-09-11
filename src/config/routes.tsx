/* eslint-disable @typescript-eslint/no-unused-vars */

import { lazy, LazyExoticComponent, ReactNode } from "react";

export type CustomRouteWithValidateSearch = {
  path: string;
  element: LazyExoticComponent<() => ReactNode>;
  validateQuery: (
    search: Record<string, string>
  ) => Record<string, string | number | boolean>;
};

export type CustomRouteWithoutValidateSearch = {
  path: string;
  element: LazyExoticComponent<() => ReactNode>;
};

export type CustomRoute =
  | CustomRouteWithValidateSearch
  | CustomRouteWithoutValidateSearch;

type ConstRoutes<Keys extends string> = Record<Keys, CustomRoute>;
function lockRoutes<
  Keys extends string,
  TConstRoutes extends ConstRoutes<Keys>
>(routes: TConstRoutes) {
  return routes;
}
type ExtractRouteParams<T extends string> =
  // If T contains a segment with a parameter (e.g., ':id') and more segments after it
  T extends `${infer _Start}:${infer Param}/${infer Rest}`
    ? // Extract the parameter from the segment and recursively extract params from the rest
      { [K in Param | keyof ExtractRouteParams<Rest>]: string }
    : // If T contains only a single segment with a parameter (e.g., ':id')
    T extends `${infer _Start}:${infer Param}`
    ? { [K in Param]: string }
    : // If T contains no parameters
      // eslint-disable-next-line @typescript-eslint/no-empty-object-type
      {};

export const routes = lockRoutes({
  resume: {
    path: "/",
    element: lazy(() => import("~/pages/ResumePage")),
  },
} as const);
export type Routes = typeof routes;
export type RouteNames = keyof typeof routes;

export type InferParams<RouteKey extends RouteNames> = ExtractRouteParams<
  Routes[RouteKey]["path"]
>;

export type InferQuery<RouteKey extends RouteNames> =
  Routes[RouteKey] extends CustomRouteWithValidateSearch
    ? Partial<ReturnType<Routes[RouteKey]["validateQuery"]>>
    : undefined;
