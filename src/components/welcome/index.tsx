import { useTranslation } from 'react-i18next';
import LanguageChanger from '@/components/language-changer';

const Welcome = () => {
  const { t } = useTranslation();

  console.log('Welcome Component');
  return (
    <>
      <LanguageChanger />
      <div className="text-6xl font-bold">
        {t('hello')}, Welcome to My Portfolio!
      </div>
    </>
  );
};

export default Welcome;
