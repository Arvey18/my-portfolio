import { ReactNode } from 'react';
import { Link } from '@/types/global-type';

export type SocialMedia = {
  id: string | number;
  icon: ReactNode;
  link: Link;
};
