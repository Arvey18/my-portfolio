import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useThemeStore from '@/stores/theme';
import { Switch } from '@/components/ui/switch';
import Sun from '@/assets/svg/sun.svg?react';
import Moon from '@/assets/svg/moon.svg?react';
import { motion } from 'motion/react';

const SubPageNavigationBar = () => {
  const location = useLocation();
  const changeTheme = useThemeStore((state) => state.changeTheme);
  const themeStyle = useThemeStore((state) => state.style);

  // Initialize defaultChecked only once
  const [defaultChecked] = useState(themeStyle === 'dark');

  const changeThemeMode = (value: boolean) => {
    const theme = value ? 'dark' : 'light';
    changeTheme(theme);
  };

  useEffect(() => {
    document.documentElement.className = '';
    document.documentElement.classList.add(themeStyle);
  }, [themeStyle]);

  console.log('location: ', location);
  return (
    <motion.nav
      initial={{ top: '-100%', opacity: 0 }}
      animate={{ top: '0rem', opacity: 1 }}
      className="relative z-10 flex h-[80px] w-full flex-row items-center border-b border-solid border-border bg-background px-4"
    >
      <div className="relative mx-auto flex w-full max-w-full items-center gap-8 xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="flex-1">
          <Breadcrumb>
            <BreadcrumbList className="text-lg">
              <BreadcrumbItem>
                <BreadcrumbLink className="hover:text-primary" href="/">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="capitalize">
                  {location.pathname.split('/')}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex items-center">
          <Switch
            defaultChecked={defaultChecked}
            onValueChanged={changeThemeMode}
            primaryIcon={<Sun />}
            secondaryIcon={<Moon />}
          />
        </div>
      </div>
    </motion.nav>
  );
};

export default SubPageNavigationBar;
