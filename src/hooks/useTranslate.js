import { useLanguage } from '../context/LanguageContext';
import translations from '../i18n/translations';

export default function useTranslate() {
  const { language } = useLanguage();
  const fallbackLanguage = 'en';

  function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, key) => {
      return acc && acc[key] !== undefined ? acc[key] : undefined;
    }, obj);
  }

  function interpolate(str, values) {
    if (!values) return str;
    return str.replace(/\{(\w+)\}/g, (_, k) =>
      values[k] !== undefined ? values[k] : `{${k}}`
    );
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

  function deepMerge(fallback, current) {
    if (Array.isArray(fallback) && Array.isArray(current)) {
      return current.length ? current : fallback;
    }
    if (
      typeof fallback === 'object' &&
      fallback !== null &&
      typeof current === 'object' &&
      current !== null
    ) {
      const merged = { ...fallback };
      for (const key in current) {
        merged[key] = deepMerge(fallback[key], current[key]);
      }
      return merged;
    }
    return current !== undefined ? current : fallback;
  }

  function t(keyPath, values) {
    const currentVal = getNestedValue(translations[language], keyPath);
    const fallbackVal = getNestedValue(translations[fallbackLanguage], keyPath);

    let value = deepMerge(fallbackVal, currentVal);

    if (value === undefined) {
      logMissingTranslation(keyPath);
      checkAllLanguagesForKey(keyPath);
      return keyPath; // Final fallback: show keyPath
    }

    if (typeof value === 'string') {
      return interpolate(value, values);
    }

    return value;
  }

  return t;
}
