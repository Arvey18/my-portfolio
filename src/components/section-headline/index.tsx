import { SectionHeadlineProps } from '@/types/section-headline';

const SectionHeadline = ({
  variant = 'center',
  preTitle,
  mainTitle,
  children,
}: SectionHeadlineProps) => {
  const alignmentClass =
    variant === 'left'
      ? 'justify-start text-left'
      : variant === 'right'
        ? 'justify-end text-right'
        : 'justify-center text-center';

  return (
    <div className={`relative flex flex-col w-full ${alignmentClass}`}>
      <div className={`flex mb-4 ${alignmentClass}`}>
        <div className="px-5 py-3 text-lg bg-secondary rounded-md inline-flex uppercase">
          {preTitle}
        </div>
      </div>
      <div
        className={`flex text-primary text-4xl font-semibold ${alignmentClass}`}
      >
        <div className="max-w-screen-md">{mainTitle}</div>
      </div>
      {children && (
        <div
          className={`flex text-muted-foreground text-xl mt-4 ${alignmentClass}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default SectionHeadline;
