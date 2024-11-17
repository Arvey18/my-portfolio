import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// layouts
import MainLayout from '@/layouts/main-layout';

// pages
const Home = lazy(() => import('@/pages/home'));
const NoMatch = lazy(() => import('@/pages/no-match'));

const MainRoute = () => {
  return (
    <div data-testid="main-route-config">
      <Routes>
        {/* Main Layout Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            }
          />
        </Route>

        {/* Catch-all route for 404 */}
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <NoMatch />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default MainRoute;
