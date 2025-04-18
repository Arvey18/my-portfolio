'use client';

// React and related libraries
import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

// UI components
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import Button from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// State management
import useSettingsStore from '@/stores/settings';

// Constants
import links from '@/constants/links';

// Custom components and assets
import BannerBlock from '@/components/banner-block';
import { openLink } from '@/lib/utils';

// Assets
import Work from '@/assets/svg/work.svg?react';
import Mail from '@/assets/svg/mail.svg?react';
import AttachmentClip from '@/assets/svg/attachment-clip.svg?react';
import Load from '@/assets/svg/load.svg?react';

// form validation schema using Zod
const formSchema = z.object({
  name: z.string().min(1, 'Name is required!'),
  email: z
    .string()
    .min(1, 'Email is required!')
    .email('Invalid email address!'),

  message: z.string(),
});

emailjs.init({ publicKey: import.meta.env.VITE_REACT_APP_EMAIL_JS_PUBLIC_KEY });

/**
 * The `Contact` page renders a contact form and a banner section.
 *
 * - The contact form allows users to input their name, email, and message.
 * - The banner section highlights the user's experience with a call-to-action button.
 *
 * Features:
 * - Form submission is handled by the `submitForm` function.
 * - Responsive design with support for mobile and larger screens.
 * - Includes animations using the `motion` library.
 */
const Contact = () => {
  const isMobile = useSettingsStore((state) => state.isMobile);
  const [formBehavior, setFormBehavior] = useState({
    submitting: false,
    showSuccess: false,
    showError: false,
  });

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values, 'form values');
    setFormBehavior((prev) => ({ ...prev, submitting: true }));
    if (recaptchaRef.current !== null) {
      try {
        const token = await recaptchaRef.current.executeAsync();
        await emailjs.send(
          import.meta.env.VITE_REACT_APP_EMAIL_JS_SERVICE_ID,
          import.meta.env.VITE_REACT_APP_EMAIL_JS_TEMPLATE_ID,
          { ...values, 'g-recaptcha-response': token }
        );
        setFormBehavior((prev) => ({
          ...prev,
          submitting: false,
          showSuccess: true,
          showError: false,
        }));
        recaptchaRef.current.reset();
        form.reset();
      } catch (error) {
        console.error('Error submitting form:', error);
        recaptchaRef.current.reset();
        setFormBehavior((prev) => ({
          ...prev,
          submitting: false,
          showSuccess: false,
          showError: true,
        }));
      }
    } else {
      console.error('google recaptcha not loaded');
      setFormBehavior((prev) => ({
        ...prev,
        submitting: false,
        showSuccess: false,
        showError: true,
      }));
    }
  };

  return (
    <>
      <section
        id="contact-form"
        className="relative overflow-hidden bg-background px-4"
      >
        <div className="relative mx-auto w-full max-w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl">
          <h1 className="relative mt-24 w-full text-center text-4xl font-medium">
            Contact me
          </h1>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="relative mx-auto mt-10 w-full max-w-full pb-10 xl:max-w-screen-lg 2xl:max-w-screen-xl">
              <div className="flex w-full flex-col gap-4 md:flex-row">
                <div className="flex-1">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Your Name"
                            className="w-full rounded-sm border border-gray-300 bg-white px-4 py-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex-1">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Your Email"
                            className="w-full rounded-sm border border-gray-300 bg-white px-4 py-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        rows={5}
                        placeholder="Your Message"
                        className="mt-4 w-full rounded-sm border border-gray-300 bg-white p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <>
                <ReCAPTCHA
                  sitekey={
                    import.meta.env.VITE_REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY
                  }
                  ref={recaptchaRef}
                  badge="bottomleft"
                  size="invisible"
                />
              </>
              <div className="flex w-full flex-row gap-4">
                <div className="flex-1">
                  <div
                    onClick={() =>
                      openLink({ link: links.resume, target: '_blank' })
                    }
                    className="relative mt-4 inline-flex h-auto w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md bg-white px-4 py-2 text-base font-medium text-primary ring-offset-background transition-colors hover:bg-primary/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 lg:py-2 lg:text-lg [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                  >
                    <AttachmentClip /> Resume
                  </div>
                </div>
                <div className="flex-1">
                  <Button
                    type="submit"
                    className={`mt-4 h-auto w-full py-2 text-base lg:py-2 lg:text-lg ${formBehavior.submitting ? 'cursor-default bg-gray-400 hover:bg-gray-400' : ''}`}
                  >
                    {formBehavior.submitting ? (
                      <>
                        <Load /> Sending
                      </>
                    ) : (
                      <>
                        <Mail /> Send Message
                      </>
                    )}
                  </Button>
                </div>
              </div>
              {!formBehavior.submitting &&
                (formBehavior.showSuccess || formBehavior.showError) && (
                  <div
                    className={`mt-4 text-right text-sm font-medium ${formBehavior.showSuccess ? 'text-green-400' : 'text-destructive'} `}
                  >
                    {formBehavior.showSuccess
                      ? 'Your message has been sent!'
                      : 'Something went wrong! Please try again.'}
                  </div>
                )}
            </div>
          </form>
        </Form>
      </section>
      <section
        id="experience-banner"
        className="relative mx-auto w-full bg-background p-4 xl:max-w-screen-xl 2xl:max-w-screen-2xl"
      >
        <motion.div
          initial={{ opacity: 0, top: '2rem' }}
          whileInView={{ opacity: 1, top: '0rem' }}
          viewport={{ once: true, amount: isMobile ? 0 : 0.5 }}
          className="relative mx-auto mb-20 w-full max-w-full py-10 md:py-20 xl:max-w-screen-lg 2xl:max-w-screen-xl"
        >
          <BannerBlock
            title="Check out my experience"
            description="I'm always open to new opportunities and collaborations. If you'd like to work together or have any questions, feel free to reach out. I'd love to hear from you!"
            button={{
              label: 'Experiences',
              link: 'http://localhost:3000/#experience',
              type: 'link',
              target: '_self',
            }}
            icon={<Work />}
          />
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
