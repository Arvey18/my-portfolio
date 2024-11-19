import { Link, Text, Icon } from '@/types/global-type';
import { openLink } from '@/lib/utils';
import { cn } from '@/lib/utils';

type LinkProps = Text &
  Link &
  Icon & {
    variant?: 'left' | 'right';
    className?: string;
  };

const LinkWithIcon = ({
  className,
  text,
  link,
  icon,
  variant = 'left',
}: LinkProps) => {
  const clickLink = () => {
    if (link) {
      openLink({ link, target: '_blank' });
    }
  };

  return (
    <div
      onClick={() => clickLink()}
      className={cn(
        'inline-flex flex-row items-center gap-2 text-muted-foreground text-base font-medium',
        link && 'cursor-pointer hover:text-primary',
        className
      )}
    >
      {variant === 'left' ? (
        <>
          {icon} {text}
        </>
      ) : (
        <>
          {text} {icon}
        </>
      )}
    </div>
  );
};

export default LinkWithIcon;
