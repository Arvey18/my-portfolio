import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const appEnvironment = import.meta.env.VITE_ENVIRONMENT;

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    fallbackLng: 'en',
    debug: appEnvironment !== 'PRODUCTION' ? true : false,
    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ['navigator'], // Only use browser language setting
      caches: [], // Do not cache language selection in localStorage or cookies
    },
    backend: {
      loadPath: '/locales/{{lng}}.json', // Adjusted to match your file structure
    },
  });

export default i18next;
