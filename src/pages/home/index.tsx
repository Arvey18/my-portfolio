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
        className="relative flex h-svh w-full items-center overflow-hidden bg-background px-4 md:min-[992px]:pt-20 md:min-[992px]:items-center"
      >
        <div className="absolute left-0 top-0 z-0">
          <span className="absolute left-[-50px] top-[-50px] inline-block h-[100px] w-[100px] rounded-full border-2 border-solid border-muted-foreground opacity-10" />
          <span className="absolute left-[-100px] top-[-100px] inline-block h-[200px] w-[200px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:left-[-150px] md:top-[-150px] md:h-[300px] md:w-[300px]" />
          <span className="absolute left-[-150px] top-[-150px] inline-block h-[300px] w-[300px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:left-[-250px] md:top-[-250px] md:h-[500px] md:w-[500px]" />
          <span className="absolute left-[-200px] top-[-200px] inline-block h-[400px] w-[400px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:left-[-350px] md:top-[-350px] md:h-[700px] md:w-[700px]" />
          <span className="absolute left-[-450px] top-[-450px] hidden h-[900px] w-[900px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:min-[992px]:inline-block" />
          <span className="absolute left-[-550px] top-[-550px] hidden h-[1100px] w-[1100px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:min-[992px]:inline-block" />
        </div>

        <div className="absolute bottom-0 right-0 z-0">
          <span className="absolute left-[-50px] top-[-50px] inline-block h-[100px] w-[100px] rounded-full border-2 border-solid border-muted-foreground opacity-10" />
          <span className="absolute left-[-150px] top-[-150px] inline-block h-[300px] w-[300px] rounded-full border-2 border-solid border-muted-foreground opacity-10" />
          <span className="absolute left-[-250px] top-[-250px] hidden h-[500px] w-[500px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:min-[992px]:inline-block" />
          <span className="absolute left-[-350px] top-[-350px] hidden h-[700px] w-[700px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:min-[992px]:inline-block" />
        </div>
        <div className="z-10 flex w-full max-w-full flex-col md:min-[992px]:mx-auto md:min-[992px]:items-center md:min-[992px]:gap-8 md:min-[992px]:flex-row xl:max-w-screen-xl 2xl:max-w-screen-2xl">
          <motion.div
            initial={{ opacity: 0, top: '2rem' }}
            whileInView={{ opacity: 1, top: '0rem' }}
            viewport={{ once: true, amount: 0.5 }}
            className="relative z-10 flex-1"
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
              <span className="font-semibold text-primary">
                {'<Web Developer />'}
              </span>
              , with a long time experience creating user friendly websites or
              webapps.
            </TextBlockWithCTAButton>
          </motion.div>
          <div className="flex flex-1 justify-end">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              src={GraphicsWebDevelopment2}
              alt="graphics-web-development-2"
              className="absolute bottom-0 right-0 mt-10 max-h-full w-[300px] md:mt-0 md:min-[992px]:w-full md:min-[992px]:relative"
            />
          </div>
        </div>
      </section>
      <section
        id="about-me"
        className="relative w-full overflow-hidden bg-background px-4"
      >
        <div className="absolute bottom-0 left-0 z-0">
          <span className="absolute left-[-50px] top-[-50px] inline-block h-[100px] w-[100px] rounded-full border-2 border-solid border-muted-foreground opacity-10" />
          <span className="absolute left-[-100px] top-[-100px] inline-block h-[200px] w-[200px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:left-[-150px] md:top-[-150px] md:h-[300px] md:w-[300px]" />
          <span className="absolute left-[-150px] top-[-150px] inline-block h-[300px] w-[300px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:left-[-250px] md:top-[-250px] md:h-[500px] md:w-[500px]" />
          <span className="w:[400px] absolute left-[-200px] top-[-200px] inline-block h-[400px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:left-[-350px] md:top-[-350px] md:h-[700px] md:w-[700px]" />
          <span className="absolute left-[-450px] top-[-450px] hidden h-[900px] w-[900px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:min-[992px]:inline-block" />
        </div>
        <div className="relative z-10 mx-auto grid w-full max-w-full grid-cols-12 py-20 xl:max-w-screen-xl 2xl:max-w-screen-2xl">
          <div className="md:order-0 order-1 col-span-12 mt-12 flex items-start justify-center md:col-span-4 md:mt-0">
            <div className="relative flex flex-col">
              <div>
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  src={GraphicsWebDevelopment}
                  className="mx-auto w-[80%] md:w-full"
                  alt="graphics-web-development"
                />
              </div>
              <div className="mt-4 flex justify-center">
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
            className="order-0 relative col-span-12 flex items-center md:order-1 md:col-span-8"
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
        className="relative w-full overflow-hidden bg-background px-4"
      >
        <div className="absolute bottom-0 right-0 z-0">
          <span className="absolute left-[-50px] top-[-50px] inline-block h-[100px] w-[100px] rounded-full border-2 border-solid border-muted-foreground opacity-10" />
          <span className="absolute left-[-100px] top-[-100px] inline-block h-[200px] w-[200px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:left-[-150px] md:top-[-150px] md:h-[300px] md:w-[300px]" />
          <span className="absolute left-[-150px] top-[-150px] inline-block h-[300px] w-[300px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:left-[-250px] md:top-[-250px] md:h-[500px] md:w-[500px]" />
          <span className="w:[400px] absolute left-[-200px] top-[-200px] hidden h-[400px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:left-[-350px] md:top-[-350px] md:h-[700px] md:w-[700px] md:min-[992px]:inline-block" />
          <span className="absolute left-[-450px] top-[-450px] hidden h-[900px] w-[900px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:min-[992px]:inline-block" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-full py-20 xl:max-w-screen-xl 2xl:max-w-screen-2xl">
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
          <div className="relative mx-auto mt-12 flex max-w-5xl flex-row flex-wrap justify-center gap-14">
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
        className="relative w-full overflow-hidden bg-background px-4"
      >
        <div className="absolute bottom-0 left-0 z-0">
          <span className="absolute left-[-50px] top-[-50px] inline-block h-[100px] w-[100px] rounded-full border-2 border-solid border-muted-foreground opacity-10" />
          <span className="absolute left-[-100px] top-[-100px] inline-block h-[200px] w-[200px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:left-[-150px] md:top-[-150px] md:h-[300px] md:w-[300px]" />
          <span className="absolute left-[-150px] top-[-150px] inline-block h-[300px] w-[300px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:left-[-250px] md:top-[-250px] md:h-[500px] md:w-[500px]" />
          <span className="w:[400px] absolute left-[-200px] top-[-200px] hidden h-[400px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:left-[-350px] md:top-[-350px] md:h-[700px] md:w-[700px] md:min-[992px]:inline-block" />
          <span className="absolute left-[-450px] top-[-450px] hidden h-[900px] w-[900px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:min-[992px]:inline-block" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-full py-20 xl:max-w-screen-xl 2xl:max-w-screen-2xl">
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
          <div className="relative mx-auto mt-12 grid max-w-5xl grid-cols-12 gap-8">
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
        className="relative w-full overflow-hidden bg-background px-4"
      >
        <div className="absolute bottom-0 right-0 z-0">
          <span className="absolute left-[-50px] top-[-50px] inline-block h-[100px] w-[100px] rounded-full border-2 border-solid border-muted-foreground opacity-10" />
          <span className="absolute left-[-100px] top-[-100px] inline-block h-[200px] w-[200px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:left-[-150px] md:top-[-150px] md:h-[300px] md:w-[300px]" />
          <span className="absolute left-[-150px] top-[-150px] inline-block h-[300px] w-[300px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:left-[-250px] md:top-[-250px] md:h-[500px] md:w-[500px]" />
          <span className="w:[400px] absolute left-[-200px] top-[-200px] hidden h-[400px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:left-[-350px] md:top-[-350px] md:h-[700px] md:w-[700px] md:min-[992px]:inline-block" />
          <span className="absolute left-[-450px] top-[-450px] hidden h-[900px] w-[900px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:min-[992px]:inline-block" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-full py-20 xl:max-w-screen-xl 2xl:max-w-screen-2xl">
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
            className="mt-12 w-full"
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
                    className="mb-4 rounded-xl border border-solid border-border bg-background px-4"
                  >
                    <AccordionTrigger
                      customIconActive={
                        <MinusIcon className="size-6 text-primary lg:size-8" />
                      }
                      customIconNonActive={
                        <PlusIcon className="size-6 text-primary lg:size-8" />
                      }
                    >
                      <div className="flex-1 pr-4 text-left text-lg font-semibold no-underline lg:text-xl">
                        {work.work_title} @ {work.company}
                        <div className="mt-2 block text-left text-sm font-semibold text-muted-foreground lg:hidden">
                          {work.work_duration}
                        </div>
                      </div>
                      <div className="hidden pr-2 text-left text-base font-semibold lg:block lg:text-xl">
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
        className="relative w-full bg-background px-4"
      >
        <motion.div
          initial={{ opacity: 0, top: '2rem' }}
          whileInView={{ opacity: 1, top: '0rem' }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative mx-auto mb-20 w-full max-w-full py-20 md:mb-60 xl:max-w-screen-xl 2xl:max-w-screen-2xl"
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
