import { Text } from '@/types/global-type';

type WorkProps = Text;

const Tags = ({ text }: WorkProps) => {
  return (
    <div className="rounded-sm bg-secondary px-2 py-1 text-xs lg:text-sm">
      {text}
    </div>
  );
};

export default Tags;
