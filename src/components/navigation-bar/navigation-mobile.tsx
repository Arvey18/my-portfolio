import { useEffect, useState, memo } from 'react';
import useThemeStore from '@/stores/theme';
import { Switch } from '@/components/ui/switch';
import Sun from '@/assets/svg/sun.svg?react';
import Moon from '@/assets/svg/moon.svg?react';
import Hamburger from '@/assets/svg/hamburger.svg?react';
import Close from '@/assets/svg/close.svg?react';
import { motion, AnimatePresence } from 'motion/react';
import { Separator } from '@/components/ui/separator';
import Logo from '@/components/ui/logo';
import NavigationBarMenus from './navigation-bar-menus';

const NavigationMobile = memo(() => {
  const changeTheme = useThemeStore((state) => state.changeTheme);
  const themeStyle = useThemeStore((state) => state.style);
  const [showNavigationMenu, setShowNavigationMenu] = useState(false);

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
      <motion.nav
        initial={{ top: '-100%', opacity: 0 }}
        animate={{ top: '0rem', opacity: 1 }}
        id="main-navigation-bar-mobile"
        className="fixed left-0 top-0 z-50 flex h-[60px] w-full flex-row items-center border-b border-solid border-border bg-background px-4"
      >
        <div className="flex-1">
          <Logo />
        </div>
        <div className="flex items-center gap-3">
          <Switch
            defaultChecked={defaultChecked}
            onValueChanged={changeThemeMode}
            primaryIcon={<Sun />}
            secondaryIcon={<Moon />}
          />

          <div>
            <Separator orientation="vertical" className="h-[20px]" />
          </div>
          <div className="hover:text-primary">
            <Hamburger onClick={() => setShowNavigationMenu((prev) => !prev)} />
          </div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {showNavigationMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            className="fixed left-0 top-0 z-50 h-full w-full justify-end bg-black bg-opacity-40"
          >
            <motion.div
              initial={{ right: '-100%', opacity: 0 }}
              animate={{
                right: '0rem',
                opacity: 1,
                transition: {
                  delay: 0.1,
                },
              }}
              exit={{
                right: '-100%',
                opacity: 0,
                transition: {
                  delay: 0,
                },
              }}
              className="fixed right-0 top-0 h-full w-full max-w-[320px] bg-background px-4"
            >
              <div className="absolute left-4 top-4 dark:text-white">
                <Close onClick={() => setShowNavigationMenu((prev) => !prev)} />
              </div>
              <div className="mt-20">
                <NavigationBarMenus
                  callback={() => setShowNavigationMenu((prev) => !prev)}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

NavigationMobile.displayName = 'NavigationMobile';

export default NavigationMobile;
