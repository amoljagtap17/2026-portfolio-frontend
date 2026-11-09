import AppLayout from "components/layout";
import { Suspense } from "react";
import { Route, Routes } from "react-router";
import RouteFallback from "./RouteFallback";
import { sitemap } from "./sitemap";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        {sitemap.map(({ path, index, component: RouteComponent }) => {
          const element = (
            <Suspense fallback={<RouteFallback />}>
              <RouteComponent />
            </Suspense>
          );

          return index ? (
            <Route key={path} index element={element} />
          ) : (
            <Route key={path} path={path.slice(1)} element={element} />
          );
        })}
      </Route>
    </Routes>
  );
}
