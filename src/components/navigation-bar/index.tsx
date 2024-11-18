import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MainNavbarMenu } from '@/constants/menus';
import useThemeStore from '@/stores/theme';
import { Switch } from '@/components/ui/switch';
import Sun from '@/assets/svg/sun.svg?react';
import Moon from '@/assets/svg/moon.svg?react';
import LogoDark from '@/assets/images/logo-dark.png';
import LogoWhite from '@/assets/images/logo-white.png';

const NavigationBar = () => {
  console.log('Main Navigation Bar');
  const { t } = useTranslation();
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

  return (
    <nav className="fixed w-full z-10 top-12 left-0">
      <div className="flex flex-row bg-background rounded-xl w-full max-w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-5 py-7 border border-solid border-border">
        <div className="flex items-center">
          {themeStyle === 'light' ? (
            <img className="max-h-[40px]" src={LogoDark} alt="logo-dark" />
          ) : (
            <img className="max-h-[40px]" src={LogoWhite} alt="logo-white" />
          )}
        </div>
        <div className="flex-1 flex flex-row items-center gap-6 justify-center">
          {MainNavbarMenu.map((value) => {
            const activeMenu = value.label === 'home';
            return (
              <div
                className={`cursor-pointer text-base font-medium hover:text-primary ${activeMenu ? 'text-primary' : 'text-muted-foreground'}`}
                key={`main-nav-${value.label}`}
              >
                {t(value.label)}
              </div>
            );
          })}
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
    </nav>
  );
};

export default NavigationBar;
