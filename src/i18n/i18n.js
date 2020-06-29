import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ja from "./locales/ja/defaults.json";

const resources = {
  ja: {
    translation: ja
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ja",
    fallbackLng: "ja",
    nsSeparator: false

  });

export default i18n;

window.i18n = i18n;
