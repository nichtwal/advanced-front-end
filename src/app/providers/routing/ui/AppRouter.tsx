import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../../../../shared/config/route-config/routeConfig";
import { PageLoader } from "../../../../shared/ui/page-loader";

const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">{element}</div>
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};
export default AppRouter;
