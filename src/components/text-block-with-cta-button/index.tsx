import Button from '@/components/ui/button';
import Mail from '@/assets/svg/mail.svg?react';
import { TextBlockWithCTAButtonProps } from '@/types/text-block-with-cta-button';

const TextBlockWithCTAButton = ({
  preTitle,
  mainTitle,
  children,
  button,
}: TextBlockWithCTAButtonProps) => {
  return (
    <div className="relative w-full">
      <div className="text-5xl font-medium md:text-6xl lg:text-7xl">
        {preTitle}
      </div>
      <div className="text-6xl font-bold md:text-7xl lg:text-8xl">
        {mainTitle}
      </div>
      <div className="mt-4 text-lg text-muted-foreground md:mt-8 md:text-xl lg:text-2xl">
        {children}
      </div>
      {button && (
        <div className="mt-4 md:mt-8">
          <Button className="h-10 text-sm text-white md:h-12 md:text-lg">
            <Mail className="size-14 md:size-20" />
            {button.label}
          </Button>
        </div>
      )}
    </div>
  );
};

export default TextBlockWithCTAButton;
