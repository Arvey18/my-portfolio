import { Menu } from '@/types/menu';
import { ReactNode } from 'react';

export type BannerBlockProps = {
  title: string;
  description: string;
  button: Menu;
  icon?: ReactNode;
};
