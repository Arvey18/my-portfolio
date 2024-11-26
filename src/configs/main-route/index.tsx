import { useState, useEffect } from 'react';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import CircleUpArrow from '@/assets/svg/circle-up-arrow.svg?react';
import PageLoaderGIF from '@/assets/images/page-loader.gif';
import { scrollToTop } from '@/lib/utils';

// layouts
const MainLayout = lazy(() => import('@/layouts/main-layout'));

// main pages
const Home = lazy(() => import('@/pages/home'));
const NoMatch = lazy(() => import('@/pages/no-match'));

const PageLoader = () => {
  return (
    <div className="relative h-svh bg-background flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute z-0 top-0 left-0">
        <span className="absolute opacity-10 top-[-50px] left-[-50px] inline-block rounded-full w-[100px] h-[100px] border-solid border-2 border-muted-foreground" />
        <span className="absolute opacity-10 top-[-150px] left-[-150px] inline-block rounded-full w-[300px] h-[300px] border-solid border-2 border-muted-foreground" />
        <span className="absolute opacity-10 top-[-250px] left-[-250px] inline-block rounded-full w-[500px] h-[500px] border-solid border-2 border-muted-foreground" />
        <span className="absolute opacity-10 top-[-350px] left-[-350px] inline-block rounded-full w-[700px] h-[700px] border-solid border-2 border-muted-foreground" />
        <span className="absolute opacity-10 top-[-450px] left-[-450px] inline-block rounded-full w-[900px] h-[900px] border-solid border-2 border-muted-foreground" />
        <span className="absolute opacity-10 top-[-550px] left-[-550px] inline-block rounded-full w-[1100px] h-[1100px] border-solid border-2 border-muted-foreground" />
      </div>

      <div className="absolute z-0 bottom-0 right-0">
        <span className="absolute opacity-10 top-[-50px] left-[-50px] inline-block rounded-full w-[100px] h-[100px] border-solid border-2 border-muted-foreground" />
        <span className="absolute opacity-10 top-[-150px] left-[-150px] inline-block rounded-full w-[300px] h-[300px] border-solid border-2 border-muted-foreground" />
        <span className="absolute opacity-10 top-[-250px] left-[-250px] inline-block rounded-full w-[500px] h-[500px] border-solid border-2 border-muted-foreground" />
        <span className="absolute opacity-10 top-[-350px] left-[-350px] inline-block rounded-full w-[700px] h-[700px] border-solid border-2 border-muted-foreground" />
      </div>

      <div>
        <img src={PageLoaderGIF} alt="page-laoder" />
      </div>
      <div className="text-muted-foreground text-xl font-medium">
        Building...
      </div>
    </div>
  );
};

const BackToTopButton = () => {
  // State to manage button visibility
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll events to show/hide the button
  const handleScroll = () => {
    // Show button when scrolled more than 100% of the viewport height (1svh)
    if (window.scrollY > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Use effect to add/remove scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <div
        onClick={() => scrollToTop()}
        className="fixed z-50 rounded-full bg-background bottom-4 right-4 cursor-pointer text-primary"
      >
        <CircleUpArrow className="size-16" />
      </div>
    )
  );
};

const MainRoute = () => {
  return (
    <div data-testid="main-route-config">
      <Routes>
        {/* Main Layout Routes */}
        <Route
          path="/"
          element={
            <Suspense fallback={<PageLoader />}>
              <MainLayout />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<div className="bg-background h-svh"></div>}>
                <Home />
              </Suspense>
            }
          />
        </Route>

        {/* Catch-all route for 404 */}
        <Route
          path="*"
          element={
            <Suspense fallback={<PageLoader />}>
              <NoMatch />
            </Suspense>
          }
        />
      </Routes>
      <BackToTopButton />
    </div>
  );
};

export default MainRoute;
