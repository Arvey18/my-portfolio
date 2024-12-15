import { useState, useEffect } from 'react';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import CircleUpArrow from '@/assets/svg/circle-up-arrow.svg?react';
import PageLoaderGIF from '@/assets/images/page-loader.gif';
import { scrollToTop } from '@/lib/utils';
import { motion } from 'motion/react';

// layouts
const MainLayout = lazy(() => import('@/layouts/main-layout'));

// main pages
const Home = lazy(() => import('@/pages/home'));
const NoMatch = lazy(() => import('@/pages/no-match'));

const PageLoader = () => {
  return (
    <div className="relative flex h-svh flex-col items-center justify-center overflow-hidden bg-background">
      <div className="absolute left-0 top-0 z-0">
        <span className="absolute left-[-50px] top-[-50px] inline-block h-[100px] w-[100px] rounded-full border-2 border-solid border-muted-foreground opacity-10" />
        <span className="absolute left-[-100px] top-[-100px] inline-block h-[200px] w-[200px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:left-[-150px] md:top-[-150px] md:h-[300px] md:w-[300px]" />
        <span className="absolute left-[-150px] top-[-150px] inline-block h-[300px] w-[300px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:left-[-250px] md:top-[-250px] md:h-[500px] md:w-[500px]" />
        <span className="absolute left-[-200px] top-[-200px] inline-block h-[400px] w-[400px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:left-[-350px] md:top-[-350px] md:h-[700px] md:w-[700px]" />
        <span className="absolute left-[-450px] top-[-450px] hidden h-[900px] w-[900px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:min-[992px]:inline-block" />
        <span className="absolute left-[-550px] top-[-550px] hidden h-[1100px] w-[1100px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:min-[992px]:inline-block" />
      </div>

      <div className="absolute bottom-0 right-0 z-0">
        <span className="absolute left-[-50px] top-[-50px] inline-block h-[100px] w-[100px] rounded-full border-2 border-solid border-muted-foreground opacity-10" />
        <span className="absolute left-[-150px] top-[-150px] inline-block h-[300px] w-[300px] rounded-full border-2 border-solid border-muted-foreground opacity-10" />
        <span className="absolute left-[-250px] top-[-250px] hidden h-[500px] w-[500px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:min-[992px]:inline-block" />
        <span className="absolute left-[-350px] top-[-350px] hidden h-[700px] w-[700px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:min-[992px]:inline-block" />
      </div>

      <div>
        <img src={PageLoaderGIF} alt="page-laoder" />
      </div>
      <div className="text-xl font-medium text-muted-foreground">
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => scrollToTop()}
        className="fixed bottom-4 right-4 z-50 cursor-pointer rounded-full bg-background text-primary md:bottom-28 2xl:min-[1700px]:bottom-4"
      >
        <CircleUpArrow className="size-12 lg:size-16" />
      </motion.div>
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
              <Suspense fallback={<div className="h-svh bg-background"></div>}>
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
