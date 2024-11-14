import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// pages
const Home = lazy(() => import('@/pages/home'));
const NoMatch = lazy(() => import('@/pages/noMatch'));

const MainRoute = () => {
  return (
    <div data-testid="main-route-config">
      <Routes>
        <Route
          index
          element={
            <Suspense fallback={<div className="text-center">Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div className="text-center">Loading...</div>}>
              <NoMatch />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default MainRoute;
