import { Menu } from '@/types/menu';

const MainNavbarMenu: Menu[] = [
  {
    label: 'home',
    link: '#home',
    type: 'scrollTo',
  },
  {
    label: 'about-me',
    link: '#about-me',
    type: 'scrollTo',
  },
  {
    label: 'skills',
    link: '#skills',
    type: 'scrollTo',
  },
  // {
  //   label: 'work',
  //   link: '#work',
  //   type: 'scrollTo',
  // },
  {
    label: 'experience',
    link: '#experience',
    type: 'scrollTo',
  },
  {
    label: 'Contact',
    link: '/contact',
    type: 'navigate',
  },
];

const Menus: string[] = [
  'home',
  'about-me',
  'skills',
  'work',
  'experience',
  'contact',
];

export { MainNavbarMenu, Menus };
