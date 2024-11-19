import useThemeStore from '@/stores/theme';
import LogoWhite from '@/assets/images/logo-white.png';
import LogoDark from '@/assets/images/logo-dark.png';
import SocialMediaButton from '@/components/ui/social-media';
import { socialMedias } from '@/constants/social-media';

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
            {socialMedias.map((value) => (
              <div key={value.id}>
                <SocialMediaButton
                  id={value.id}
                  icon={value.icon}
                  link={value.link}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
