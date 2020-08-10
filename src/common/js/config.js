import plandingImg from "../image/process/planding.png";
import desginImg from "../image/process/Design.png";
import developmentImg from "../image/process/development.png";
import launchImg from "../image/process/launch.png";
import maintainImg from "../image/process/maintaince.png";
import { getI18n } from "react-i18next";

export const listLangage = ["vn", "en"];

export const timeTopPage = [
  {
    value: "d",
    title: "landing_page.countdown_day",
  },
  {
    value: "h",
    title: "landing_page.countdown_hours",
    convert: 24,
  },
  {
    value: "m",
    title: "landing_page.countdown_minutes",
    convert: 60,
  },
  {
    value: "s",
    title: "landing_page.countdown_second",
    convert: 60,
  },
];

export const dataProcess = [
  {
    img: plandingImg,
    title:getI18n().t( "ld_process.title_1"),
    description: getI18n().t("ld_process.des_1"),
  },
  {
    img: desginImg,
    title: getI18n().t("ld_process.title_2"),
    description: getI18n().t("ld_process.des_2"),
  },
  {
    img: developmentImg,
    title: getI18n().t("ld_process.title_3"),
    description: getI18n().t("ld_process.des_3"),
  },
  {
    img: launchImg,
    title: getI18n().t("ld_process.title_4"),
    description: getI18n().t("ld_process.des_4"),
  },
  {
    img: maintainImg,
    title: getI18n().t("ld_process.title_5"),
    description: getI18n().t("ld_process.des_5"),
  },
];
