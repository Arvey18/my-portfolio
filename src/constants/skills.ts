import { SkillData } from '@/types/skill';
import HTMLLogo from '@/assets/images/html-logo.png';
import CSSLogo from '@/assets/images/css-logo.png';
import JavaScriptLogo from '@/assets/images/javaScript-logo.png';
import TypeScriptLogo from '@/assets/images/typeScript-logo.png';
import GitLogo from '@/assets/images/git-logo.png';
import FigmaLogo from '@/assets/images/figma-logo.png';
import TailwindLogo from '@/assets/images/tailwind-logo.png';
import ReactLogo from '@/assets/images/react-logo.png';
import NextJSlogo from '@/assets/images/nextjs-logo.png';
import ViteLogo from '@/assets/images/vite-logo.png';
import NPMLogo from '@/assets/images/npm-logo.png';

const skillsData: SkillData[] = [
  {
    id: 'html',
    text: 'HTML',
    image: {
      url: HTMLLogo,
      alt: 'html-logo',
    },
  },
  {
    id: 'css',
    text: 'CSS',
    image: {
      url: CSSLogo,
      alt: 'css-logo',
    },
  },
  {
    id: 'javascript',
    text: 'JavaScript',
    image: {
      url: JavaScriptLogo,
      alt: 'javascript-logo',
    },
  },
  {
    id: 'typescript',
    text: 'TypeScript',
    image: {
      url: TypeScriptLogo,
      alt: 'typescript-logo',
    },
  },
  {
    id: 'git',
    text: 'Git',
    image: {
      url: GitLogo,
      alt: 'git-logo',
    },
  },
  {
    id: 'tailwindcss',
    text: 'Tailwind CSS',
    image: {
      url: TailwindLogo,
      alt: 'tailwind-logo',
    },
  },
  {
    id: 'figma',
    text: 'Figma',
    image: {
      url: FigmaLogo,
      alt: 'figma-logo',
    },
  },
  {
    id: 'reactjs',
    text: 'ReactJS',
    image: {
      url: ReactLogo,
      alt: 'reactjs-logo',
    },
  },
  {
    id: 'nextjs',
    text: 'NextJS',
    image: {
      url: NextJSlogo,
      alt: 'nextjs-logo',
    },
  },
  {
    id: 'vite',
    text: 'Vite',
    image: {
      url: ViteLogo,
      alt: 'vite-logo',
    },
  },
  {
    id: 'npm',
    text: 'NPM',
    image: {
      url: NPMLogo,
      alt: 'vite-logo',
    },
  },
];

export { skillsData };
