import useThemeStore from '@/stores/theme';
import LogoWhite from '@/assets/images/logo-white.png';
import LogoDark from '@/assets/images/logo-dark.png';
import SocialMediaButton from '@/components/ui/social-media';
import { socialMedias } from '@/constants/social-media';
import { motion } from 'motion/react';

const Footer = () => {
  const themeStyle = useThemeStore((state) => state.style);
  return (
    <footer className="relative overflow-hidden bg-background px-4">
      <div className="relative mx-auto flex w-full max-w-full flex-col gap-4 border-t border-solid border-border py-7 md:flex-row md:gap-8 xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <motion.div
          initial={{ opacity: 0, top: '2rem' }}
          whileInView={{ opacity: 1, top: '0rem' }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative flex justify-center md:justify-start"
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
          className="relative flex flex-1 flex-col items-center justify-end gap-0 md:flex-row md:gap-8"
        >
          <div className="text-base font-medium text-muted-foreground lg:text-lg">
            +63 927 944 1822
          </div>
          <div className="text-base font-medium text-muted-foreground lg:text-lg">
            arve505@gmail.com
          </div>
          <div className="mt-12 flex flex-row items-center gap-2 md:mt-0">
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
