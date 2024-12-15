import { useEffect, useState } from 'react';
import useThemeStore from '@/stores/theme';
import { Switch } from '@/components/ui/switch';
import Sun from '@/assets/svg/sun.svg?react';
import Moon from '@/assets/svg/moon.svg?react';
import { motion } from 'motion/react';
import useSettingsStore from '@/stores/settings';
import NavigationMobile from './navigation-mobile';
import NavigationBarMenus from './navigation-bar-menus';
import Logo from '@/components/ui/logo';

const NavigationBar = () => {
  console.log('Main Navigation Bar');
  const changeTheme = useThemeStore((state) => state.changeTheme);
  const themeStyle = useThemeStore((state) => state.style);
  const isMobile = useSettingsStore((state) => state.isMobile);

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

  return (
    <>
      {isMobile ? (
        <NavigationMobile />
      ) : (
        <motion.nav
          initial={{ top: '-100%', opacity: 0 }}
          animate={{ top: '3rem', opacity: 1 }}
          id="main-navigation-bar"
          className="fixed left-0 top-12 z-50 hidden w-full px-4 md:block"
        >
          <div className="mx-auto flex w-full max-w-full flex-row rounded-xl border border-solid border-border bg-background px-5 py-7 xl:max-w-screen-xl 2xl:max-w-screen-2xl">
            <div className="flex items-center">
              <Logo className="text-3xl" />
            </div>
            <NavigationBarMenus />
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
      )}
    </>
  );
};

export default NavigationBar;
