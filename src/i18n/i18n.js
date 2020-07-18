import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import vn from "./locales/vn.json";


const resources = {
  en: {
    translation: en
  },
  vn: {
    translation: vn
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "vn",
    fallbackLng: "vn",
    nsSeparator: false

  });

export default i18n;

window.i18n = i18n;
