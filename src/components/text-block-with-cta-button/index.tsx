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
      <div className="text-7xl font-medium bg-background">{preTitle}</div>
      <div className="text-8xl font-bold bg-background">{mainTitle}</div>
      <div className="text-2xl text-muted-foreground mt-8 bg-background">
        {children}
      </div>
      {button && (
        <div className="mt-8">
          <Button className="text-lg h-12 text-white">
            <Mail className="size-20" />
            {button.label}
          </Button>
        </div>
      )}
    </div>
  );
};

export default TextBlockWithCTAButton;
