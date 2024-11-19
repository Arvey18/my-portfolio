import { ReactNode } from 'react';

export type SectionHeadlineProps = {
  variant?: 'left' | 'center' | 'right';
  preTitle: string;
  mainTitle: string;
  children?: ReactNode;
};
