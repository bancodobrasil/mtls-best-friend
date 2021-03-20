import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranlation from "./languages/en.json";
import ptBRTranlation from "./languages/pt-BR.json";

const resources = {
  en: { translation: enTranlation },
  ptBR: { translation: ptBRTranlation },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: true,

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
