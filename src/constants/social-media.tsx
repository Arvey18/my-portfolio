import { SocialMedia } from '@/types/social-media';
import links from '@/constants/links';
import FacebookLogo from '@/assets/svg/facebook.svg?react';
import InstagramLogo from '@/assets/svg/instagram.svg?react';
import LinkedInLogo from '@/assets/svg/linkedin.svg?react';
import GithubLogo from '@/assets/svg/github.svg?react';

const socialMedias: SocialMedia[] = [
  {
    id: 'facebook-social-media',
    icon: <FacebookLogo />,
    link: {
      link: links.facebook,
      target: '_blank',
    },
  },
  {
    id: 'instagram-social-media',
    icon: <InstagramLogo />,
    link: {
      link: links.instagram,
      target: '_blank',
    },
  },
  {
    id: 'linkedin-social-media',
    icon: <LinkedInLogo />,
    link: {
      link: links.linkedIn,
      target: '_blank',
    },
  },
  {
    id: 'github-social-media',
    icon: <GithubLogo />,
    link: {
      link: links.github,
      target: '_blank',
    },
  },
];

export { socialMedias };
