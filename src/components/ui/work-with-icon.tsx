import Work from '@/assets/svg/work.svg?react';
import { Link, Text } from '@/types/global-type';

type WorkProps = Text & Link;

const WorkWithIcon = ({ text, link }: WorkProps) => {
  return (
    <div
      className={`flex flex-row items-center gap-2 text-muted-foreground text-base font-medium ${link ? 'cursor-pointer' : ''}`}
    >
      <Work /> {text}
    </div>
  );
};

export default WorkWithIcon;
