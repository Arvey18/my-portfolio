import TextBlockWithCTAButton from '@/components/text-block-with-cta-button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import WorkDetails from '@/components/work-details/index';
import GraphicsWebDevelopment from '@/assets/images/graphics-web-development-2.png';
import SectionHeadline from '@/components/section-headline';
import MinusIcon from '@/assets/svg/minus.svg?react';
import PlusIcon from '@/assets/svg/plus.svg?react';
import { Separator } from '@/components/ui/separator';

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
            <img src={GraphicsWebDevelopment} alt="graphics-web-development" />
          </div>
        </div>
      </section>
      <section id="skills" className="relative w-full bg-background">
        <div className="w-full max-w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto py-20">
          <SectionHeadline
            key="skills-section-headline"
            preTitle="Skills"
            mainTitle="The Skills, tools and technologies I have used in my entire career:"
          />
        </div>
      </section>
      {/* <section id="work" className="relative w-full bg-background">
        <div className="w-full max-w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto py-20">
          <SectionHeadline
            key="work-section-headline"
            preTitle="Work"
            mainTitle="Things I've been doing so far"
          />
        </div>
      </section> */}
      <section id="experience" className="relative w-full bg-background">
        <div className="w-full max-w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto py-20">
          <SectionHeadline
            key="experience-section-headline"
            preTitle="Experience"
            mainTitle="Here is a quick summary of my work experience"
          />
          <Accordion
            type="multiple"
            defaultValue={['item-1']}
            className="w-full"
          >
            <AccordionItem
              value="item-1"
              className="border-solid border border-border rounded-xl px-4 mb-4"
            >
              <AccordionTrigger
                customIconActive={<MinusIcon className="size-8 text-primary" />}
                customIconNonActive={
                  <PlusIcon className="size-8 text-primary" />
                }
              >
                <div className="flex-1 no-underline text-left text-xl font-semibold">
                  Web Developer @ Favorite Medium
                </div>
                <div className="text-left text-xl font-semibold pr-2">
                  June 2014 - April 2019
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Separator className="mb-6" />
                <WorkDetails />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border-solid border border-border rounded-xl px-4 mb-4"
            >
              <AccordionTrigger
                customIconActive={<MinusIcon className="size-8 text-primary" />}
                customIconNonActive={
                  <PlusIcon className="size-8 text-primary" />
                }
              >
                <div className="flex-1 text-left text-xl font-semibold">
                  Web Developer @ Favorite Medium
                </div>
                <div className="text-left text-xl font-semibold pr-2">
                  June 2014 - April 2019
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Separator className="mb-6" />
                <WorkDetails />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="border-solid border border-border rounded-xl px-4 mb-4"
            >
              <AccordionTrigger
                customIconActive={<MinusIcon className="size-8 text-primary" />}
                customIconNonActive={
                  <PlusIcon className="size-8 text-primary" />
                }
              >
                <div className="flex-1 text-left text-xl font-semibold">
                  Web Developer @ Favorite Medium
                </div>
                <div className="text-left text-xl font-semibold pr-2">
                  June 2014 - April 2019
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Separator className="mb-6" />
                <WorkDetails />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="border-solid border border-border rounded-xl px-4"
            >
              <AccordionTrigger
                customIconActive={<MinusIcon className="size-8 text-primary" />}
                customIconNonActive={
                  <PlusIcon className="size-8 text-primary" />
                }
              >
                <div className="flex-1 text-left text-xl font-semibold">
                  Web Developer @ Favorite Medium
                </div>
                <div className="text-left text-xl font-semibold pr-2">
                  June 2014 - April 2019
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Separator className="mb-6" />
                <WorkDetails />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default Home;
