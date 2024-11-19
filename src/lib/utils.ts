import { Link } from '@/types/global-type';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(id: string) {
  const section = document.getElementById(id.replace('#', ''));
  const mainNav = document.getElementById('main-navigation-bar') as HTMLElement;
  const mainNavBoundingClient = mainNav.getBoundingClientRect();
  const headerHeight = mainNavBoundingClient.height + mainNavBoundingClient.top;

  if (section) {
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const scrollPosition = sectionTop - headerHeight;

    const maxScrollPosition =
      document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: Math.min(scrollPosition, maxScrollPosition),
      behavior: 'smooth',
    });
  }
}

export function scrollToTop() {
  console.log('scroll to top');
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

export function openLink({ link, target }: Link) {
  window.open(link, target ?? '_blank');
}
