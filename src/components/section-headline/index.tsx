import { SectionHeadlineProps } from '@/types/section-headline';

const SectionHeadline = ({
  variant = 'center',
  preTitle,
  mainTitle,
  children,
}: SectionHeadlineProps) => {
  const alignmentClass =
    variant === 'left'
      ? 'md:justify-start md:text-left justify-center text-center'
      : variant === 'right'
        ? 'md:justify-end md:text-right justify-center text-center'
        : 'justify-center text-center';

  return (
    <div className={`relative flex w-full flex-col ${alignmentClass}`}>
      <div className={`mb-4 flex ${alignmentClass}`}>
        <div className="inline-flex rounded-md bg-secondary px-4 py-2 text-base uppercase md:px-5 md:py-3 lg:text-lg">
          {preTitle}
        </div>
      </div>
      <div
        className={`flex text-3xl font-semibold text-primary lg:text-4xl ${alignmentClass}`}
      >
        <div className="max-w-screen-md">{mainTitle}</div>
      </div>
      {children && (
        <div
          className={`mt-4 flex text-lg text-muted-foreground lg:text-xl ${alignmentClass}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default SectionHeadline;
