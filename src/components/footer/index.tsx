import useThemeStore from '@/stores/theme';
import LogoWhite from '@/assets/images/logo-white.png';
import LogoDark from '@/assets/images/logo-dark.png';
import SocialMediaButton from '@/components/ui/social-media';
import { socialMedias } from '@/constants/social-media';
import { motion } from 'motion/react';

const Footer = () => {
  const themeStyle = useThemeStore((state) => state.style);
  return (
    <footer className="relative px-4 bg-background overflow-hidden">
      <div className="relative flex md:flex-row flex-col border-t border-solid border-border w-full max-w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto py-7 md:gap-8 gap-4">
        <motion.div
          initial={{ opacity: 0, top: '2rem' }}
          whileInView={{ opacity: 1, top: '0rem' }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative flex md:justify-start justify-center"
        >
          {themeStyle === 'light' ? (
            <img className="max-h-[40px]" src={LogoDark} alt="logo-dark" />
          ) : (
            <img className="max-h-[40px]" src={LogoWhite} alt="logo-white" />
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, top: '2rem' }}
          whileInView={{ opacity: 1, top: '0rem' }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative flex-1 flex md:flex-row flex-col items-center justify-end md:gap-8 gap-0"
        >
          <div className="lg:text-lg text-base text-muted-foreground font-medium">
            +63 927 944 1822
          </div>
          <div className="lg:text-lg text-base text-muted-foreground font-medium">
            arve505@gmail.com
          </div>
          <div className="flex flex-row items-center gap-2 md:mt-0 mt-12">
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
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
