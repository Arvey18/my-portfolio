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
import { motion } from 'motion/react';

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="relative h-svh w-full bg-background flex items-center overflow-hidden"
      >
        <div className="absolute z-0 top-0 left-0">
          <span className="absolute opacity-10 top-[-50px] left-[-50px] inline-block rounded-full w-[100px] h-[100px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 top-[-150px] left-[-150px] inline-block rounded-full w-[300px] h-[300px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 top-[-250px] left-[-250px] inline-block rounded-full w-[500px] h-[500px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 top-[-350px] left-[-350px] inline-block rounded-full w-[700px] h-[700px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 top-[-450px] left-[-450px] inline-block rounded-full w-[900px] h-[900px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 top-[-550px] left-[-550px] inline-block rounded-full w-[1100px] h-[1100px] border-solid border-2 border-muted-foreground" />
        </div>

        <div className="absolute z-0 bottom-0 right-0">
          <span className="absolute opacity-10 top-[-50px] left-[-50px] inline-block rounded-full w-[100px] h-[100px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 top-[-150px] left-[-150px] inline-block rounded-full w-[300px] h-[300px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 top-[-250px] left-[-250px] inline-block rounded-full w-[500px] h-[500px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 top-[-350px] left-[-350px] inline-block rounded-full w-[700px] h-[700px] border-solid border-2 border-muted-foreground" />
        </div>
        <div className="relative z-10 w-full max-w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto flex flex-row gap-8 items-center pt-20">
          <motion.div
            initial={{ opacity: 0, top: '-2rem' }}
            whileInView={{ opacity: 1, top: '0rem' }}
            viewport={{ once: true }}
            className="relative flex-1"
          >
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
          </motion.div>
          <div className="flex-1">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              src={GraphicsWebDevelopment2}
              alt="graphics-web-development-2"
            />
          </div>
        </div>
      </section>
      <section id="about-me" className="relative w-full bg-background">
        <div className="absolute z-0 bottom-0 left-0">
          <span className="absolute opacity-10 top-[-50px] left-[-50px] inline-block rounded-full w-[100px] h-[100px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 top-[-150px] left-[-150px] inline-block rounded-full w-[300px] h-[300px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 top-[-250px] left-[-250px] inline-block rounded-full w-[500px] h-[500px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 top-[-350px] left-[-350px] inline-block rounded-full w-[700px] h-[700px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 top-[-450px] left-[-450px] inline-block rounded-full w-[900px] h-[900px] border-solid border-2 border-muted-foreground" />
        </div>
        <div className="relative z-10 w-full max-w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto py-20 grid grid-cols-12">
          <div className="col-span-4 flex justify-center items-center">
            <div className="relative flex flex-col">
              <div>
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  src={GraphicsWebDevelopment}
                  className="max-w-full"
                  alt="graphics-web-development"
                />
              </div>
              <div className="flex justify-center mt-4">
                <div className="flex flex-row items-center gap-2">
                  {socialMedias.map((value, key) => {
                    const incrementedValue =
                      key === 0 ? 0 : 0.1 + (key - 1) * 0.1;
                    return (
                      <motion.div
                        initial={{ opacity: 0, top: '1rem' }}
                        whileInView={{ opacity: 1, top: '0rem' }}
                        viewport={{ once: true }}
                        transition={{
                          delay: parseFloat(incrementedValue.toFixed(1)),
                        }}
                        key={value.id}
                      >
                        <SocialMediaButton
                          id={value.id}
                          icon={value.icon}
                          link={value.link}
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, left: '2rem' }}
            whileInView={{ opacity: 1, left: '0rem' }}
            viewport={{ once: true }}
            className="relative col-span-8 flex items-center"
          >
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
          </motion.div>
        </div>
      </section>
      <section
        id="skills"
        className="relative w-full bg-background overflow-hidden"
      >
        <div className="absolute z-0 bottom-0 right-0">
          <span className="absolute opacity-10 top-[-50px] left-[-50px] inline-block rounded-full w-[100px] h-[100px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 top-[-150px] left-[-150px] inline-block rounded-full w-[300px] h-[300px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 top-[-250px] left-[-250px] inline-block rounded-full w-[500px] h-[500px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 top-[-350px] left-[-350px] inline-block rounded-full w-[700px] h-[700px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 top-[-450px] left-[-450px] inline-block rounded-full w-[900px] h-[900px] border-solid border-2 border-muted-foreground" />
        </div>
        <div className="relative z-10 w-full max-w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto py-20">
          <motion.div
            initial={{ opacity: 0, top: '-2rem' }}
            whileInView={{ opacity: 1, top: '0rem' }}
            viewport={{ once: true }}
            className="relative"
          >
            <SectionHeadline
              key="skills-section-headline"
              preTitle="Skills"
              mainTitle="The skills, tools and technologies I am currently using:"
            />
          </motion.div>
          <div className="relative max-w-5xl mx-auto mt-12 flex flex-row flex-wrap gap-14 justify-center">
            {skillsData.map((value, key) => {
              const incrementedValue = key === 0 ? 0 : 0.1 + (key - 1) * 0.1;
              return (
                <motion.div
                  initial={{ opacity: 0, top: '1rem' }}
                  whileInView={{ opacity: 1, top: '0rem' }}
                  viewport={{ once: true }}
                  transition={{
                    delay: parseFloat(incrementedValue.toFixed(1)),
                  }}
                  key={`skills-${value.image.alt}-${value.id}`}
                >
                  <Skill text={value.text} image={value.image} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <section
        id="work"
        className="relative w-full bg-background overflow-hidden"
      >
        <div className="absolute z-0 bottom-0 left-0">
          <span className="absolute opacity-10 top-[-50px] left-[-50px] inline-block rounded-full w-[100px] h-[100px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 top-[-150px] left-[-150px] inline-block rounded-full w-[300px] h-[300px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 top-[-250px] left-[-250px] inline-block rounded-full w-[500px] h-[500px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 top-[-350px] left-[-350px] inline-block rounded-full w-[700px] h-[700px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 top-[-450px] left-[-450px] inline-block rounded-full w-[900px] h-[900px] border-solid border-2 border-muted-foreground" />
        </div>
        <div className="relative z-10 w-full max-w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto py-20">
          <motion.div
            initial={{ opacity: 0, top: '-2rem' }}
            whileInView={{ opacity: 1, top: '0rem' }}
            viewport={{ once: true }}
            className="relative"
          >
            <SectionHeadline
              key="work-section-headline"
              preTitle="Work"
              mainTitle="Things I can share"
            />
          </motion.div>
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
      <section
        id="experience"
        className="relative w-full bg-background overflow-hidden"
      >
        <div className="absolute z-0 bottom-0 right-0">
          <span className="absolute opacity-10 top-[-50px] left-[-50px] inline-block rounded-full w-[100px] h-[100px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 top-[-150px] left-[-150px] inline-block rounded-full w-[300px] h-[300px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 top-[-250px] left-[-250px] inline-block rounded-full w-[500px] h-[500px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 top-[-350px] left-[-350px] inline-block rounded-full w-[700px] h-[700px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 top-[-450px] left-[-450px] inline-block rounded-full w-[900px] h-[900px] border-solid border-2 border-muted-foreground" />
        </div>
        <div className="relative z-10 w-full max-w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto py-20">
          <motion.div
            initial={{ opacity: 0, top: '-2rem' }}
            whileInView={{ opacity: 1, top: '0rem' }}
            viewport={{ once: true }}
            className="relative"
          >
            <SectionHeadline
              key="experience-section-headline"
              preTitle="Experience"
              mainTitle="Here is a quick summary of my work experience"
            />
          </motion.div>
          <Accordion
            type="multiple"
            defaultValue={[workExperience[0].id]}
            className="w-full mt-12"
          >
            {workExperience.map((work, key) => {
              const incrementedValue = key === 0 ? 0 : 0.1 + (key - 1) * 0.1;
              return (
                <motion.div
                  initial={{ opacity: 0, top: '2rem' }}
                  whileInView={{ opacity: 1, top: '0rem' }}
                  viewport={{ once: true }}
                  transition={{
                    delay: parseFloat(incrementedValue.toFixed(1)),
                  }}
                  key={`work-detail-${work.id}`}
                  className="relative"
                >
                  <AccordionItem
                    value={work.id}
                    className="bg-background border-solid border border-border rounded-xl px-4 mb-4"
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
                </motion.div>
              );
            })}
          </Accordion>
        </div>
      </section>
      <section id="contact-banner" className="relative w-full bg-background">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto py-20 mb-60"
        >
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
        </motion.div>
      </section>
    </>
  );
};

export default Home;
