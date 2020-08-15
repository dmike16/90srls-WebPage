// @flow

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

import { it, en } from "./i18n/index";

i18n.use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      it: it.default,
      'en-US':en.default,
      en: en.default
    },
    fallbackLng: "it",
    debug: !process.env.PROD,
    ns: ["common"],
    defaultNS: "common",

    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });

export const supportedLanguages: string[]= [
  'it', 'en'
]
export default i18n;
