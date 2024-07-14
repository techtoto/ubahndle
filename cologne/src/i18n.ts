import i18n from 'i18next';
import { initI18n } from '@ubahndle/core';
import de from "../translations/de.json" assert { type: "json" }
import en from "../translations/en.json" assert { type: "json" }

initI18n({
  de,
  en,
})

export default i18n;
