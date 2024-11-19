import { SocialMedia } from '@/types/social-media';
import FacebookLogo from '@/assets/svg/facebook.svg?react';
import InstagramLogo from '@/assets/svg/instagram.svg?react';
import LinkedInLogo from '@/assets/svg/linkedin.svg?react';
import GithubLogo from '@/assets/svg/github.svg?react';

const socialMedias: SocialMedia[] = [
  {
    id: 'facebook-social-media',
    icon: <FacebookLogo />,
    link: {
      link: 'https://www.facebook.com/Arvey.Rombaoa.Jimenez/',
      target: '_blank',
    },
  },
  {
    id: 'instagram-social-media',
    icon: <InstagramLogo />,
    link: {
      link: 'https://www.instagram.com/arveyj.07/',
      target: '_blank',
    },
  },
  {
    id: 'linkedin-social-media',
    icon: <LinkedInLogo />,
    link: {
      link: 'https://www.linkedin.com/in/arveyj07/',
      target: '_blank',
    },
  },
  {
    id: 'github-social-media',
    icon: <GithubLogo />,
    link: {
      link: 'https://github.com/Arvey18',
      target: '_blank',
    },
  },
];

export { socialMedias };
