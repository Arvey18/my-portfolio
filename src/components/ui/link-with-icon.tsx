import LinkIcon from '@/assets/svg/link.svg?react';
import { Link, Text } from '@/types/global-type';

type LinkProps = Text & Link;

const LinkWithIcon = ({ text, link }: LinkProps) => {
  return (
    <div
      className={`flex flex-row items-center gap-2 text-muted-foreground text-base font-medium ${link ? 'cursor-pointer' : ''}`}
    >
      <LinkIcon /> {text}
    </div>
  );
};

export default LinkWithIcon;
