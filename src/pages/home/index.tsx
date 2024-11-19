import TextBlockWithCTAButton from '@/components/text-block-with-cta-button';
import BannerBlock from '@/components/banner-block';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import WorkDetails from '@/components/work-details/index';
import { workExperience } from '@/constants/work-experience';
import { skillsData } from '@/constants/skills';
import GraphicsWebDevelopment2 from '@/assets/images/graphics-web-development-2.png';
import GraphicsWebDevelopment from '@/assets/images/graphics-web-development.png';
import SectionHeadline from '@/components/section-headline';
import MinusIcon from '@/assets/svg/minus.svg?react';
import PlusIcon from '@/assets/svg/plus.svg?react';
import Mail from '@/assets/svg/mail.svg?react';
import Skill from '@/components/ui/skill';
import SocialMediaButton from '@/components/ui/social-media';
import { socialMedias } from '@/constants/social-media';
import WorkTeaserCard from '@/components/work-teaser-card';

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="relative h-svh w-full bg-background flex items-center"
      >
        <div className="w-full max-w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto flex flex-row gap-8 items-center pt-20">
          <div className="flex-1">
            <TextBlockWithCTAButton
              preTitle="Hi, I'm"
              mainTitle="Arvey Jimenez"
              button={{
                label: 'Contact me',
                link: '#contact',
                type: 'scrollTo',
              }}
            >
              A passionate{' '}
              <span className="text-primary font-semibold">
                {'<Web Developer />'}
              </span>
              , with a long time experience creating user friendly websites or
              webapps.
            </TextBlockWithCTAButton>
          </div>
          <div className="flex-1">
            <img
              src={GraphicsWebDevelopment2}
              alt="graphics-web-development-2"
            />
          </div>
        </div>
      </section>
      <section id="about-me" className="relative w-full bg-background">
        <div className="w-full max-w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto py-20 grid grid-cols-12">
          <div className="col-span-4 flex justify-center items-center">
            <div className="relative flex flex-col">
              <div>
                <img
                  src={GraphicsWebDevelopment}
                  className="max-w-full"
                  alt="graphics-web-development"
                />
              </div>
              <div className="flex justify-center mt-4">
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
          </div>
          <div className="col-span-8 flex items-center">
            <SectionHeadline
              key="about-me-section-headline"
              variant="left"
              preTitle="About me"
              mainTitle="Transforming Ideas into a real website or webapp"
            >
              I&lsquo;m a frontend developer with a strong background in
              building websites and web applications. I have a passion for
              creating engaging, user-friendly digital experiences using
              JavaScript, HTML, CSS, and ReactJS.
              <br />
              <br />
              I thrive in collaborative environments where I can share ideas,
              learn from others, and contribute to team goals. I&apos;m always
              excited to tackle new challenges and grow alongside my team
              members.
              <br />
              <br />
              Outside of work, I enjoy playing PC games and basketball, and I
              find that traveling and driving are great ways to unwind and
              recharge. Let&apos;s connect and chat about all things tech,
              teamwork, and innovation!
            </SectionHeadline>
          </div>
        </div>
      </section>
      <section id="skills" className="relative w-full bg-background">
        <div className="w-full max-w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto py-20">
          <SectionHeadline
            key="skills-section-headline"
            preTitle="Skills"
            mainTitle="The skills, tools and technologies I am currently using:"
          />
          <div className="relative max-w-5xl mx-auto mt-12 flex flex-row flex-wrap gap-14 justify-center">
            {skillsData.map((value) => {
              return (
                <Skill
                  key={`skills-${value.image.alt}-${value.id}`}
                  text={value.text}
                  image={value.image}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section id="work" className="relative w-full bg-background">
        <div className="w-full max-w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto py-20">
          <SectionHeadline
            key="work-section-headline"
            preTitle="Work"
            mainTitle="Things I can share"
          />
          <div className="relative max-w-5xl mx-auto mt-12 grid grid-cols-12 gap-8">
            <div className="col-span-4">
              <WorkTeaserCard />
            </div>
            <div className="col-span-4">
              <WorkTeaserCard />
            </div>
            <div className="col-span-4">
              <WorkTeaserCard />
            </div>
          </div>
        </div>
      </section>
      <section id="experience" className="relative w-full bg-background">
        <div className="w-full max-w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto py-20">
          <SectionHeadline
            key="experience-section-headline"
            preTitle="Experience"
            mainTitle="Here is a quick summary of my work experience"
          />
          <Accordion
            type="multiple"
            defaultValue={[workExperience[0].id]}
            className="w-full mt-12"
          >
            {workExperience.map((work) => (
              <AccordionItem
                key={`work-detail-${work.id}`}
                value={work.id}
                className="border-solid border border-border rounded-xl px-4 mb-4"
              >
                <AccordionTrigger
                  customIconActive={
                    <MinusIcon className="size-8 text-primary" />
                  }
                  customIconNonActive={
                    <PlusIcon className="size-8 text-primary" />
                  }
                >
                  <div className="flex-1 no-underline text-left text-xl font-semibold">
                    {work.work_title} @ {work.company}
                  </div>
                  <div className="text-left text-xl font-semibold pr-2">
                    {work.work_duration}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <Separator className="mb-6" />
                  <WorkDetails data={work}>{work.content}</WorkDetails>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <section id="contact-banner" className="relative w-full bg-background">
        <div className="w-full max-w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto py-20 mb-60">
          <BannerBlock
            title="Get in Touch"
            description="I'm always open to new opportunities and collaborations. If you'd like to work together or have any questions, feel free to reach out. I'd love to hear from you!"
            button={{
              label: 'Contact Me',
              link: '#',
              type: 'link',
            }}
            icon={<Mail />}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
