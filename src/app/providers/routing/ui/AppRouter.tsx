import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../../../../shared/config/route-config/routeConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>...loading</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};
export default AppRouter;
