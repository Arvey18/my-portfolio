import { ReactNode } from 'react';

export type Text = {
  text: string;
};

export type Link = {
  link?: string;
  target?: string;
};

export type Image = {
  url: string;
  alt: string;
};

export type Icon = {
  icon?: ReactNode;
};

export type Callback = {
  callback?: () => void;
};
