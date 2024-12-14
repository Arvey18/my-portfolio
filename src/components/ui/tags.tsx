import { Text } from '@/types/global-type';

type WorkProps = Text;

const Tags = ({ text }: WorkProps) => {
  return (
    <div className="rounded-sm bg-secondary px-2 py-1 lg:text-sm text-xs">
      {text}
    </div>
  );
};

export default Tags;
