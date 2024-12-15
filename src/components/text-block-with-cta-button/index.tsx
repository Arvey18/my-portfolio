import Button from '@/components/ui/button';
import Mail from '@/assets/svg/mail.svg?react';
import { TextBlockWithCTAButtonProps } from '@/types/text-block-with-cta-button';
import { useNavigate } from 'react-router-dom';
import { scrollToSection, openLink } from '@/lib/utils';

const TextBlockWithCTAButton = ({
  preTitle,
  mainTitle,
  children,
  button,
}: TextBlockWithCTAButtonProps) => {
  const navigate = useNavigate();

  const buttonClick = () => {
    if (button?.type === 'navigate') {
      if (button?.link) {
        navigate(button.link);
      }
    } else if (button?.type === 'scrollTo') {
      scrollToSection(button?.link);
    } else {
      openLink({ link: button?.link, target: '_blank' });
    }
  };

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
          <Button
            onClick={buttonClick}
            className="h-10 text-sm text-white md:h-12 md:text-lg"
          >
            <Mail className="size-14 md:size-20" />
            {button.label}
          </Button>
        </div>
      )}
    </div>
  );
};

export default TextBlockWithCTAButton;
