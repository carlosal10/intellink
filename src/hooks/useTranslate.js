export default function useTranslate(namespace) {
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

  function deepMerge(fallback, current) {
    if (Array.isArray(fallback) && Array.isArray(current)) {
      return current.length ? current : fallback;
    }
    if (typeof fallback === 'object' && fallback && typeof current === 'object' && current) {
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
    const value = deepMerge(fallbackVal, currentVal);

    if (typeof value === 'string') {
      return interpolate(value, values);
    }
    return value;
  }

  if (namespace) {
    const current = getNestedValue(translations[language], namespace) || {};
    const fallback = getNestedValue(translations[fallbackLanguage], namespace) || {};
    return deepMerge(fallback, current);
  }

  return t;
}
