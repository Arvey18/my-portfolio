import { Outlet } from 'react-router-dom';

// components
import SubPageNavigationBar from '@/components/sub-page-navigation-bar';
import Footer from '@/components/footer';

const SubPageLayout = () => {
  console.log('Main Layout');
  return (
    <>
      <SubPageNavigationBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default SubPageLayout;
