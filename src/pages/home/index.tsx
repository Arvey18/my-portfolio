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
  let isMobile = window.innerWidth < 768;
  return (
    <>
      <section
        id="home"
        className="relative px-4 h-svh w-full bg-background flex md:min-[992px]:items-center items-end overflow-hidden pt-20 pb-4"
      >
        <div className="absolute z-0 top-0 left-0">
          <span className="absolute opacity-10 top-[-50px] left-[-50px] inline-block rounded-full w-[100px] h-[100px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 md:top-[-150px] top-[-100px] md:left-[-150px] left-[-100px] inline-block rounded-full md:w-[300px] w-[200px] md:h-[300px] h-[200px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 md:top-[-250px] top-[-150px] md:left-[-250px] left-[-150px] inline-block rounded-full md:w-[500px] w-[300px] md:h-[500px] h-[300px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 md:top-[-350px] top-[-200px] md:left-[-350px] left-[-200px] inline-block rounded-full md:w-[700px] w-[400px] md:h-[700px] h-[400px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 top-[-450px] left-[-450px] md:min-[992px]:inline-block hidden rounded-full w-[900px] h-[900px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 top-[-550px] left-[-550px] md:min-[992px]:inline-block hidden rounded-full w-[1100px] h-[1100px] border-solid border-2 border-muted-foreground" />
        </div>

        <div className="absolute z-0 bottom-0 right-0">
          <span className="absolute opacity-10 top-[-50px] left-[-50px] inline-block rounded-full w-[100px] h-[100px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 top-[-150px] left-[-150px] inline-block rounded-full w-[300px] h-[300px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 top-[-250px] left-[-250px] md:min-[992px]:inline-block hidden rounded-full w-[500px] h-[500px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 top-[-350px] left-[-350px] md:min-[992px]:inline-block hidden rounded-full w-[700px] h-[700px] border-solid border-2 border-muted-foreground" />
        </div>
        <div className="relative z-10 w-full max-w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl md:min-[992px]:mx-auto flex md:min-[992px]:flex-row flex-col md:min-[992px]:gap-8 md:min-[992px]:items-center">
          <motion.div
            initial={{ opacity: 0, top: '2rem' }}
            whileInView={{ opacity: 1, top: '0rem' }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex-1 "
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
          <div className="flex-1 flex justify-end">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              src={GraphicsWebDevelopment2}
              alt="graphics-web-development-2"
              className="md:min-[992px]:w-full max-h-full md:w-[65%] w-full md:mt-0 mt-10"
            />
          </div>
        </div>
      </section>
      <section
        id="about-me"
        className="relative px-4 w-full bg-background overflow-hidden"
      >
        <div className="absolute z-0 bottom-0 left-0">
          <span className="absolute opacity-10 top-[-50px] left-[-50px] inline-block rounded-full w-[100px] h-[100px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 md:top-[-150px] top-[-100px] md:left-[-150px] left-[-100px] inline-block rounded-full md:w-[300px] w-[200px] md:h-[300px] h-[200px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 md:top-[-250px] top-[-150px] md:left-[-250px] left-[-150px] inline-block rounded-full md:w-[500px] w-[300px] md:h-[500px] h-[300px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 md:top-[-350px] top-[-200px] md:left-[-350px] left-[-200px] inline-block rounded-full md:w-[700px] w:[400px] md:h-[700px] h-[400px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 top-[-450px] left-[-450px] md:min-[992px]:inline-block hidden rounded-full w-[900px] h-[900px] border-solid border-2 border-muted-foreground" />
        </div>
        <div className="relative z-10 w-full max-w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto py-20 grid grid-cols-12">
          <div className="md:col-span-4 col-span-12 flex justify-center items-start md:order-0 order-1 md:mt-0 mt-12">
            <div className="relative flex flex-col">
              <div>
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  src={GraphicsWebDevelopment}
                  className="md:w-full w-[80%] mx-auto"
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
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{
                          delay: parseFloat(incrementedValue.toFixed(1)),
                        }}
                        key={value.id}
                        className="relative"
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
            initial={
              isMobile
                ? { opacity: 0, top: '2rem' }
                : { opacity: 0, left: '2rem' }
            }
            whileInView={
              isMobile
                ? { opacity: 1, top: '0rem' }
                : { opacity: 1, left: '0rem' }
            }
            viewport={{ once: true, amount: 0.5 }}
            className="relative md:col-span-8 col-span-12 flex items-center md:order-1 order-0"
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
        className="relative px-4 w-full bg-background overflow-hidden"
      >
        <div className="absolute z-0 bottom-0 right-0">
          <span className="absolute opacity-10 top-[-50px] left-[-50px] inline-block rounded-full w-[100px] h-[100px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 md:top-[-150px] top-[-100px] md:left-[-150px] left-[-100px] inline-block rounded-full md:w-[300px] w-[200px] md:h-[300px] h-[200px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 md:top-[-250px] top-[-150px] md:left-[-250px] left-[-150px] inline-block rounded-full md:w-[500px] w-[300px] md:h-[500px] h-[300px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 md:top-[-350px] top-[-200px] md:left-[-350px] left-[-200px] md:min-[992px]:inline-block hidden rounded-full md:w-[700px] w:[400px] md:h-[700px] h-[400px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 top-[-450px] left-[-450px] md:min-[992px]:inline-block hidden rounded-full w-[900px] h-[900px] border-solid border-2 border-muted-foreground" />
        </div>
        <div className="relative z-10 w-full max-w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto py-20">
          <motion.div
            initial={{ opacity: 0, top: '2rem' }}
            whileInView={{ opacity: 1, top: '0rem' }}
            viewport={{ once: true, amount: 0.5 }}
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
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    delay: parseFloat(incrementedValue.toFixed(1)),
                  }}
                  key={`skills-${value.image.alt}-${value.id}`}
                  className="relative"
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
        className="relative px-4 w-full bg-background overflow-hidden"
      >
        <div className="absolute z-0 bottom-0 left-0">
          <span className="absolute opacity-10 top-[-50px] left-[-50px] inline-block rounded-full w-[100px] h-[100px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 md:top-[-150px] top-[-100px] md:left-[-150px] left-[-100px] inline-block rounded-full md:w-[300px] w-[200px] md:h-[300px] h-[200px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 md:top-[-250px] top-[-150px] md:left-[-250px] left-[-150px] inline-block rounded-full md:w-[500px] w-[300px] md:h-[500px] h-[300px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 md:top-[-350px] top-[-200px] md:left-[-350px] left-[-200px] md:min-[992px]:inline-block hidden rounded-full md:w-[700px] w:[400px] md:h-[700px] h-[400px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 top-[-450px] left-[-450px] md:min-[992px]:inline-block hidden rounded-full w-[900px] h-[900px] border-solid border-2 border-muted-foreground" />
        </div>
        <div className="relative z-10 w-full max-w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto py-20">
          <motion.div
            initial={{ opacity: 0, top: '2rem' }}
            whileInView={{ opacity: 1, top: '0rem' }}
            viewport={{ once: true, amount: 0.5 }}
            className="relative"
          >
            <SectionHeadline
              key="work-section-headline"
              preTitle="Work"
              mainTitle="Things I can share"
            />
          </motion.div>
          <div className="relative max-w-5xl mx-auto mt-12 grid grid-cols-12 gap-8">
            {Array(3)
              .fill(null)
              .map((_value, key) => {
                const incrementedValue = key === 0 ? 0 : 0.1 + (key - 1) * 0.1;
                return (
                  <motion.div
                    key={`work-teaser-card-${key}`}
                    initial={{ opacity: 0, top: '1rem' }}
                    whileInView={{ opacity: 1, top: '0rem' }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      delay: parseFloat(incrementedValue.toFixed(1)),
                    }}
                    className="relative col-span-4"
                  >
                    <WorkTeaserCard />
                  </motion.div>
                );
              })}
          </div>
        </div>
      </section>
      <section
        id="experience"
        className="relative px-4 w-full bg-background overflow-hidden"
      >
        <div className="absolute z-0 bottom-0 right-0">
          <span className="absolute opacity-10 top-[-50px] left-[-50px] inline-block rounded-full w-[100px] h-[100px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 md:top-[-150px] top-[-100px] md:left-[-150px] left-[-100px] inline-block rounded-full md:w-[300px] w-[200px] md:h-[300px] h-[200px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 md:top-[-250px] top-[-150px] md:left-[-250px] left-[-150px] inline-block rounded-full md:w-[500px] w-[300px] md:h-[500px] h-[300px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 md:top-[-350px] top-[-200px] md:left-[-350px] left-[-200px] md:min-[992px]:inline-block hidden rounded-full md:w-[700px] w:[400px] md:h-[700px] h-[400px] border-solid border-2 border-muted-foreground" />
          <span className="absolute opacity-10 top-[-450px] left-[-450px] md:min-[992px]:inline-block hidden rounded-full w-[900px] h-[900px] border-solid border-2 border-muted-foreground" />
        </div>
        <div className="relative z-10 w-full max-w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto py-20">
          <motion.div
            initial={{ opacity: 0, top: '2rem' }}
            whileInView={{ opacity: 1, top: '0rem' }}
            viewport={{ once: true, amount: 0.5 }}
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
                  viewport={{ once: true, amount: 0.5 }}
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
                        <MinusIcon className="lg:size-8 size-6 text-primary" />
                      }
                      customIconNonActive={
                        <PlusIcon className="lg:size-8 size-6 text-primary" />
                      }
                    >
                      <div className="flex-1 pr-4 no-underline text-left lg:text-xl text-lg font-semibold">
                        {work.work_title} @ {work.company}
                        <div className="text-left text-sm text-muted-foreground font-semibold mt-2 lg:hidden block">
                          {work.work_duration}
                        </div>
                      </div>
                      <div className="text-left lg:text-xl text-base font-semibold pr-2 lg:block hidden">
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
      <section
        id="contact-banner"
        className="relative px-4 w-full bg-background"
      >
        <motion.div
          initial={{ opacity: 0, top: '2rem' }}
          whileInView={{ opacity: 1, top: '0rem' }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative w-full max-w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto py-20 md:mb-60 mb-20"
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
