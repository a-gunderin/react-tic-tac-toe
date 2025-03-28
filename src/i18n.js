import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

const isDev = import.meta.env.MODE === "development";

i18n
  .use(HttpBackend) // Load translations from external files
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Initialize react-i18next
  .init({
    fallbackLng: "en", // Default language
    debug: isDev, // Set to false in production
    interpolation: {
      escapeValue: false, // Not needed for React/Preact
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    backend: {
      loadPath: "/locales/{{lng}}.json",
    },
  });

export default i18n;
