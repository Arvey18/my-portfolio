import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// pages
const Home = lazy(() => import('@/pages/home'));
const NoMatch = lazy(() => import('@/pages/noMatch'));

function App() {
  return (
    <div className="relative p-5">
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
}

export default App;
