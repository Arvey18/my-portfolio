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
    <div className={`relative flex flex-col w-full ${alignmentClass}`}>
      <div className={`flex mb-4 ${alignmentClass}`}>
        <div className="md:px-5 px-4 md:py-3 py-2 lg:text-lg text-base bg-secondary rounded-md inline-flex uppercase">
          {preTitle}
        </div>
      </div>
      <div
        className={`flex text-primary lg:text-4xl text-3xl font-semibold ${alignmentClass}`}
      >
        <div className="max-w-screen-md">{mainTitle}</div>
      </div>
      {children && (
        <div
          className={`flex text-muted-foreground lg:text-xl text-lg mt-4 ${alignmentClass}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default SectionHeadline;
