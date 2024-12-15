import { useTranslation } from 'react-i18next';
import Languages from '@/constants/languages';

const LanguageChanger = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const clickToChangeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  console.log('Language Changer');
  return (
    <div className="flex flex-row justify-center gap-5">
      {Languages.map((value) => {
        const isActive = value.code === currentLanguage;
        return (
          <button
            className={`rounded-sm px-4 py-2 ${isActive ? 'bg-red-500' : 'bg-gray-400'}`}
            key={`lang-btn-${value.code}`}
            onClick={() => clickToChangeLanguage(value.code)}
          >
            {value.label}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageChanger;
