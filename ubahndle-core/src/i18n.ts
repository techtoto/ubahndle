import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import german from "../translations/de.json" assert { type: "json" }
import english from "../translations/en.json" assert { type: "json" }

// languages we support currently
type Languages = "de" | "en";
type Translations = Record<Languages, any>;

export function initI18n(brandTranslations: Translations) {
  return i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      debug: true,
      fallbackLng: 'en',
      ns: ["core"],
      defaultNS: "core",
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
      resources: {
        de: {
          core: german,
          brand: brandTranslations.de,
        },
        en: {
          core: english,
          brand: brandTranslations.en,
        },
      }
    })
}
