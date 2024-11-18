import useThemeStore from '@/stores/theme';
import Button from '../ui/button';
import LogoWhite from '@/assets/images/logo-white.png';
import LogoDark from '@/assets/images/logo-dark.png';
import FacebookLogo from '@/assets/svg/facebook.svg?react';
import InstagramLogo from '@/assets/svg/instagram.svg?react';
import LinkedInLogo from '@/assets/svg/linkedin.svg?react';
import GithubLogo from '@/assets/svg/github.svg?react';

const Footer = () => {
  const themeStyle = useThemeStore((state) => state.style);
  return (
    <footer className="relative bg-background">
      <div className="flex flex-row border-t border-solid border-border w-full max-w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto py-7">
        <div>
          {themeStyle === 'light' ? (
            <img className="max-h-[40px]" src={LogoDark} alt="logo-dark" />
          ) : (
            <img className="max-h-[40px]" src={LogoWhite} alt="logo-white" />
          )}
        </div>
        <div className="flex-1 flex flex-row items-center justify-end gap-8">
          <div className="text-lg text-muted-foreground font-medium">
            +63 927 944 1822
          </div>
          <div className="text-lg text-muted-foreground font-medium">
            arve505@gmail.com
          </div>
          <div className="flex flex-row items-center gap-2">
            <div>
              <Button className="rounded-full p-2 h-auto text-white">
                <FacebookLogo className="size-6" />
              </Button>
            </div>
            <div>
              <Button className="rounded-full p-2 h-auto text-white">
                <InstagramLogo className="size-6" />
              </Button>
            </div>
            <div>
              <Button className="rounded-full p-2 h-auto text-white">
                <LinkedInLogo className="size-6" />
              </Button>
            </div>
            <div>
              <Button className="rounded-full p-2 h-auto text-white">
                <GithubLogo className="size-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
