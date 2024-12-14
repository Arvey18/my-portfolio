import Button from '@/components/ui/button';
import { BannerBlockProps } from '@/types/banner-block';

const BannerBlock = ({
  title,
  description,
  button,
  icon,
}: BannerBlockProps) => {
  return (
    <div className="relative overflow-hidden bg-primaryColor w-full rounded-3xl lg:px-12 px-8 lg:py-16 py-12 flex md:flex-row flex-col items-center md:gap-8">
      <div className="absolute z-0 top-0 left-1/2 translate-x-[-50%]">
        <span className="absolute opacity-10 top-[-50px] left-[-50px] inline-block rounded-full w-[100px] h-[100px] border-solid border-2 border-muted-foreground" />
        <span className="absolute opacity-10 top-[-150px] left-[-150px] inline-block rounded-full w-[300px] h-[300px] border-solid border-2 border-muted-foreground" />
        <span className="absolute opacity-10 top-[-250px] left-[-250px] inline-block rounded-full w-[500px] h-[500px] border-solid border-2 border-muted-foreground" />
        <span className="absolute opacity-10 top-[-350px] left-[-350px] md:min-[992px]:inline-block hidden rounded-full w-[700px] h-[700px] border-solid border-2 border-muted-foreground" />
        <span className="absolute opacity-10 top-[-450px] left-[-450px] md:min-[992px]:inline-block hidden rounded-full w-[900px] h-[900px] border-solid border-2 border-muted-foreground" />
        <span className="absolute opacity-10 top-[-550px] left-[-550px] md:min-[992px]:inline-block hidden rounded-full w-[1100px] h-[1100px] border-solid border-2 border-muted-foreground" />
      </div>
      <div className="relative z-10 text-white lg:text-4xl text-3xl font-semibold text-center">
        {title}
      </div>
      <div className="relative z-10 flex-1 text-center text-white lg:text-lg text-base md:mt-0 mt-4 md:mb-2 mb-8">
        <div className="inline-flex mx-auto max-w-xl">{description}</div>
      </div>
      <div className="relative z-10">
        <Button className="lg:text-xl text-base h-auto lg:py-3 py-2">
          {icon}
          {button.label}
        </Button>
      </div>
    </div>
  );
};

export default BannerBlock;
