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
      <div className="lg:text-7xl md:text-6xl text-5xl font-medium">
        {preTitle}
      </div>
      <div className="lg:text-8xl md:text-7xl text-6xl font-bold">
        {mainTitle}
      </div>
      <div className="lg:text-2xl md:text-xl text-lg text-muted-foreground md:mt-8 mt-4">
        {children}
      </div>
      {button && (
        <div className="md:mt-8 mt-4">
          <Button className="md:text-lg text-sm md:h-12 h-10 text-white">
            <Mail className="md:size-20 size-14" />
            {button.label}
          </Button>
        </div>
      )}
    </div>
  );
};

export default TextBlockWithCTAButton;
