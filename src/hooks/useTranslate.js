import { useLanguage } from '../context/LanguageContext';
import translations from '../i18n/translations';

export default function useTranslate() {
  const { language } = useLanguage();
  const fallbackLanguage = 'en'; // Change to your default

  function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, key) => {
      return acc && acc[key] !== undefined ? acc[key] : undefined;
    }, obj);
  }

  function interpolate(str, values) {
    if (!values) return str;
    return str.replace(/\{(\w+)\}/g, (_, k) => (values[k] !== undefined ? values[k] : `{${k}}`));
  }

  function logMissingTranslation(keyPath) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`[i18n] Missing translation for "${keyPath}" in "${language}"`);
    }
  }

  function checkAllLanguagesForKey(keyPath) {
    if (process.env.NODE_ENV !== 'production') {
      const missingIn = Object.keys(translations).filter(
        (lang) => getNestedValue(translations[lang], keyPath) === undefined
      );
      if (missingIn.length) {
        console.warn(`[i18n] Missing "${keyPath}" in: ${missingIn.join(', ')}`);
      }
    }
  }

  function t(keyPath, values) {
    let value = getNestedValue(translations[language], keyPath);

    if (value === undefined) {
      logMissingTranslation(keyPath);
      checkAllLanguagesForKey(keyPath);

      // Fallback language if available
      if (fallbackLanguage && translations[fallbackLanguage]) {
        value = getNestedValue(translations[fallbackLanguage], keyPath);
      }
    }

    // If still missing, show keyPath
    if (value === undefined) {
      return keyPath;
    }

    // Support interpolation if string
    if (typeof value === 'string') {
      return interpolate(value, values);
    }

    return value;
  }

  return t;
}
