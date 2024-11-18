import { Outlet } from 'react-router-dom';

// components
import NavigationBar from '@/components/navigation-bar';
import Footer from '@/components/footer';

const MainLayout = () => {
  console.log('Main Layout');
  return (
    <>
      <NavigationBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
