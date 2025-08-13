// hooks/useTranslate.js
import translations from "../translations"; // adjust path

export default function useTranslate(lang = "en", section) {
  const defaultLang = "en";

  // Ensure both current and default sections exist
  const currentSection = translations[lang]?.[section] || {};
  const defaultSection = translations[defaultLang]?.[section] || {};

  // Merge current language over default language (fallback per key)
  const merged = { ...defaultSection, ...currentSection };

  // Optional: deep merge for nested objects
  const deepMerge = (target, source) => {
    const result = { ...target };
    for (const key in source) {
      if (typeof source[key] === "object" && !Array.isArray(source[key])) {
        result[key] = deepMerge(target[key] || {}, source[key]);
      } else {
        result[key] = source[key] ?? target[key];
      }
    }
    return result;
  };

  const finalTranslation = deepMerge(defaultSection, currentSection);

  if (process.env.NODE_ENV === "development") {
    Object.keys(defaultSection).forEach((key) => {
      if (
        currentSection[key] === undefined &&
        typeof defaultSection[key] !== "object"
      ) {
        console.warn(
          `[Translation Missing] ${lang}.${section}.${key} — falling back to English`
        );
      }
    });
  }

  return finalTranslation;
}
