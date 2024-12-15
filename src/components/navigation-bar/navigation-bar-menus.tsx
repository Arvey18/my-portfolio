import { useEffect, useState, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { MainNavbarMenu, Menus } from '@/constants/menus';
import { scrollToSection, openLink } from '@/lib/utils';
import { Menu } from '@/types/menu';
import useSettingsStore from '@/stores/settings';
import { Callback } from '@/types/global-type';

const NavigationBarMenus = memo(({ callback }: Callback) => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('home');
  const isMobile = useSettingsStore((state) => state.isMobile);

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
      isMobile ? 'main-navigation-bar-mobile' : 'main-navigation-bar'
    ) as HTMLElement;
    const mainNavBoundingClient = mainNav.getBoundingClientRect();
    const headerHeight = isMobile
      ? mainNavBoundingClient.height * 2
      : mainNavBoundingClient.height + mainNavBoundingClient.top * 2;

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
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="flex flex-1 flex-col gap-6 md:flex-row md:items-center md:justify-center md:px-4">
      {MainNavbarMenu.map((value) => {
        const activeMenu = value.label === activeSection;
        return (
          <div
            className={`cursor-pointer text-left text-base font-medium hover:text-primary md:text-center ${activeMenu ? 'text-primary' : 'text-muted-foreground'}`}
            key={`main-nav-${value.label}`}
            onClick={() => {
              clickMenu(value);
              if (callback) {
                callback();
              }
            }}
          >
            {t(value.label)}
          </div>
        );
      })}
    </div>
  );
});

NavigationBarMenus.displayName = 'NavigationBarMenus';

export default NavigationBarMenus;
