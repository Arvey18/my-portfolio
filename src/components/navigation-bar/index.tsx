import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MainNavbarMenu, Menus } from '@/constants/menus';
import useThemeStore from '@/stores/theme';
import { scrollToSection, openLink } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';
import Sun from '@/assets/svg/sun.svg?react';
import Moon from '@/assets/svg/moon.svg?react';
import LogoDark from '@/assets/images/logo-dark.png';
import LogoWhite from '@/assets/images/logo-white.png';
import { Menu } from '@/types/menu';
import { motion } from 'motion/react';

const NavigationBarMenus = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('home');

  const clickMenu = (menu: Menu) => {
    if (menu.type === 'scrollTo') {
      scrollToSection(menu.link);
    } else {
      openLink({ link: menu.link, target: '_blank' });
    }
  };

  const onScroll = () => {
    const sections = [...Menus];
    let currentSection = '';

    const mainNav = document.getElementById(
      'main-navigation-bar'
    ) as HTMLElement;
    const mainNavBoundingClient = mainNav.getBoundingClientRect();
    const headerHeight =
      mainNavBoundingClient.height + mainNavBoundingClient.top * 2;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop - headerHeight;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (window.scrollY >= offsetTop && window.scrollY < offsetBottom) {
          currentSection = section;
        }
      }
    });

    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight
    ) {
      currentSection = Menus[Menus.length - 1];
    }

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="flex flex-1 flex-row items-center justify-center gap-6 px-4">
      {MainNavbarMenu.map((value) => {
        const activeMenu = value.label === activeSection;
        return (
          <div
            className={`cursor-pointer text-center text-base font-medium hover:text-primary ${activeMenu ? 'text-primary' : 'text-muted-foreground'}`}
            key={`main-nav-${value.label}`}
            onClick={() => clickMenu(value)}
          >
            {t(value.label)}
          </div>
        );
      })}
    </div>
  );
};

const NavigationBar = () => {
  console.log('Main Navigation Bar');
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
    <motion.nav
      initial={{ top: '-100%', opacity: 0 }}
      animate={{ top: '3rem', opacity: 1 }}
      id="main-navigation-bar"
      className="fixed left-0 top-12 z-50 hidden w-full px-4 md:block"
    >
      <div className="mx-auto flex w-full max-w-full flex-row rounded-xl border border-solid border-border bg-background px-5 py-7 xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="flex items-center">
          {themeStyle === 'light' ? (
            <img className="max-h-[40px]" src={LogoDark} alt="logo-dark" />
          ) : (
            <img className="max-h-[40px]" src={LogoWhite} alt="logo-white" />
          )}
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
  );
};

export default NavigationBar;
