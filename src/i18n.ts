import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Lazy import JSON via bundler. Next.js will include these on the client.
// Files live in: public/locales/{lng}/common.json
const resources = {
  en: {
    common: require("./../public/locales/en/common.json")
  },
  ar: {
    common: require("./../public/locales/ar/common.json")
  }
} as const;

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      resources,
      fallbackLng: "en",
      supportedLngs: ["en", "ar"],
      ns: ["common"],
      defaultNS: "common",
      lng: "en",
      detection: {
        // Keep it deterministic; toggle persists to localStorage.
        order: ["localStorage", "navigator"],
        caches: ["localStorage"]
      },
      interpolation: {
        escapeValue: false
      },
      react: {
        useSuspense: false
      }
    });
}

export default i18n;

