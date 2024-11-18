import { ReactNode } from 'react';
import { Menu } from '@/types/menu';

export type TextBlockWithCTAButtonProps = {
  preTitle: string;
  mainTitle: string;
  children: ReactNode;
  button?: Menu;
};
