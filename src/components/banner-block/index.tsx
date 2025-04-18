import Button from '@/components/ui/button';
import { BannerBlockProps } from '@/types/banner-block';
import { useNavigate } from 'react-router-dom';
import { scrollToSection, openLink } from '@/lib/utils';

const BannerBlock = ({
  title,
  description,
  button,
  icon,
}: BannerBlockProps) => {
  const navigate = useNavigate();

  const buttonClick = () => {
    if (button?.type === 'navigate') {
      if (button?.link) {
        navigate(button.link);
      }
    } else if (button?.type === 'scrollTo') {
      scrollToSection(button?.link);
    } else {
      openLink({ link: button?.link, target: button.target });
    }
  };

  return (
    <div className="relative flex w-full flex-col items-center overflow-hidden rounded-3xl bg-primaryColor px-8 py-12 md:flex-row md:gap-8 lg:px-12 lg:py-16">
      <div className="absolute left-1/2 top-0 z-0 translate-x-[-50%]">
        <span className="absolute left-[-50px] top-[-50px] inline-block h-[100px] w-[100px] rounded-full border-2 border-solid border-muted-foreground opacity-10" />
        <span className="absolute left-[-150px] top-[-150px] inline-block h-[300px] w-[300px] rounded-full border-2 border-solid border-muted-foreground opacity-10" />
        <span className="absolute left-[-250px] top-[-250px] inline-block h-[500px] w-[500px] rounded-full border-2 border-solid border-muted-foreground opacity-10" />
        <span className="absolute left-[-350px] top-[-350px] hidden h-[700px] w-[700px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:min-[992px]:inline-block" />
        <span className="absolute left-[-450px] top-[-450px] hidden h-[900px] w-[900px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:min-[992px]:inline-block" />
        <span className="absolute left-[-550px] top-[-550px] hidden h-[1100px] w-[1100px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:min-[992px]:inline-block" />
      </div>
      <div className="relative z-10 max-w-[260px] text-center text-3xl font-semibold text-white lg:text-4xl">
        {title}
      </div>
      <div className="relative z-10 mb-8 mt-4 flex-1 text-center text-base text-white md:mb-2 md:mt-0 lg:text-lg">
        <div className="mx-auto inline-flex max-w-xl">{description}</div>
      </div>
      <div className="relative z-10">
        <Button
          onClick={buttonClick}
          className="h-auto py-2 text-base lg:py-3 lg:text-xl"
        >
          {icon}
          {button.label}
        </Button>
      </div>
    </div>
  );
};

export default BannerBlock;
