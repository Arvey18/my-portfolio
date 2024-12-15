import { cn } from '@/lib/utils';
import { LogoProps } from '@/types/logo';

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn('text-2xl font-medium', className)}>
      <span className="text-primary">{'<A'}</span>
      <span className="text-black dark:text-white">rveyJ</span>
      <span className="text-primary">{'/>'}</span>
    </div>
  );
};

export default Logo;
