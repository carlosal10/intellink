import { useLanguage } from '../context/LanguageContext';
import translations from '../i18n/translations';

export default function useTranslate() {
  const { language } = useLanguage();

  function t(keyPath) {
    return keyPath.split('.').reduce((obj, key) => {
      return obj && obj[key] !== undefined ? obj[key] : keyPath;
    }, translations[language]);
  }

  return t;
}
