import { Menu } from '@/types/menu';
import { ReactNode } from 'react';

export type WorkExperience = {
  id: string;
  work_title: string;
  company: string;
  company_url: Menu;
  work_duration: string;
  location: string;
  work_type: string;
  content: ReactNode;
  tags: string[];
};
