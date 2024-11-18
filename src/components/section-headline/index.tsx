import { SectionHeadlineProps } from '@/types/section-headline';

const SectionHeadline = ({
  preTitle,
  mainTitle,
  description,
}: SectionHeadlineProps) => {
  return (
    <div className="relative flex flex-col justify-center w-full mb-12">
      <div className="flex justify-center mb-4">
        <div className="px-5 py-3 text-lg bg-secondary rounded-md inline-flex uppercase">
          {preTitle}
        </div>
      </div>
      <div className="flex justify-center text-primary text-4xl font-semibold">
        <div className="max-w-screen-md text-center">{mainTitle}</div>
      </div>
      {description && (
        <div className="px-4 flex justify-center text-muted-foreground text-2xl mt-4 text-center">
          {description}
        </div>
      )}
    </div>
  );
};

export default SectionHeadline;
