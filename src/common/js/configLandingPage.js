import Html from "../image/tech-stack/html.png";
import Sass from "../image/tech-stack/sass.png";
import Jquery from "../image/tech-stack/jquery-logo.png";
import Reactjs from "../image/tech-stack/Reactlogo.png";
import AntDesgin from "../image/tech-stack/ant_desgin.png";
import Vuejs from "../image/tech-stack/vuejs.jpg";
import Linux from "../image/tech-stack/linux.png";
import Mysql from "../image/tech-stack/mysql.png";
import Aws from "../image/tech-stack/aws.jpg";
import Laravel from "../image/tech-stack/laravel.jpg";
import Docker from "../image/tech-stack/docker.jpeg";
import Jenkins from "../image/tech-stack/Jenkins.png";
import { getI18n } from "react-i18next";
import ImgTop4 from "../image/img-top4.png";
import ImgTop3 from "../image/img-top3.png";
import ImgTop2 from "../image/img-top2.png";
import ImgTop1 from "../image/img-top1.png";
import {
  SafetyCertificateOutlined,
  AuditOutlined,
  ApiOutlined,
  StarOutlined,
  CommentOutlined,
  HeartOutlined,
} from "@ant-design/icons";

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

export const listStackFontEnd = [
  {
    img: Html,
    title: getI18n().t("tech-stack.title_hmtl"),
    description: getI18n().t("tech-stack.get_detail"),
    label: getI18n().t("tech-stack.html"),
  },
  {
    img: Sass,
    title: getI18n().t("tech-stack.title_sass"),
    description: getI18n().t("tech-stack.get_detail"),
    label: getI18n().t("tech-stack.scss"),
  },
  {
    img: Jquery,
    title: getI18n().t("tech-stack.title_jquery"),
    description: getI18n().t("tech-stack.get_detail"),
    label: getI18n().t("tech-stack.jquery"),
  },
  {
    img: Reactjs,
    title: getI18n().t("tech-stack.title_reactjs"),
    description: getI18n().t("tech-stack.get_detail"),
    label: getI18n().t("tech-stack.react_js"),
  },
  {
    img: Vuejs,
    title: getI18n().t("tech-stack.title_vue"),
    description: getI18n().t("tech-stack.get_detail"),
    label: getI18n().t("tech-stack.vuejs"),
  },
  {
    img: AntDesgin,
    title: getI18n().t("tech-stack.title_ant"),
    description: getI18n().t("tech-stack.get_detail"),
    label: getI18n().t("tech-stack.ant_design"),
  },
];

export const dataSlickImageTop = [ImgTop1, ImgTop2, ImgTop3, ImgTop4];

export const listStackBackEnd = [
  {
    img: Linux,
    title: getI18n().t("tech-stack.title_linux"),
    description: getI18n().t("tech-stack.get_detail"),
    label: getI18n().t("tech-stack.linux"),
  },
  {
    img: Mysql,
    title: getI18n().t("tech-stack.title_mysql"),
    description: getI18n().t("tech-stack.get_detail"),
    label: getI18n().t("tech-stack.mysql"),
  },
  {
    img: Aws,
    title: getI18n().t("tech-stack.title_aws"),
    description: getI18n().t("tech-stack.get_detail"),
    label: getI18n().t("tech-stack.aws"),
  },
  {
    img: Laravel,
    title: getI18n().t("tech-stack.title_laravel"),
    description: getI18n().t("tech-stack.get_detail"),
    label: getI18n().t("tech-stack.laravel"),
  },
  {
    img: Docker,
    title: getI18n().t("tech-stack.title_docker"),
    description: getI18n().t("tech-stack.get_detail"),
    label: getI18n().t("tech-stack.docker"),
  },
  {
    img: Jenkins,
    title: getI18n().t("tech-stack.title_jenkins"),
    description: getI18n().t("tech-stack.get_detail"),
    label: getI18n().t("tech-stack.jenkins"),
  },
];

export const DataWhyInfo = [
  {
    title: getI18n().t("landing_page.why_title_1"),
    description: getI18n().t("landing_page.why_description_1"),
    icon: AuditOutlined,
  },
  {
    title: getI18n().t("landing_page.why_title_2"),
    description: getI18n().t("landing_page.why_description_2"),
    icon: StarOutlined,
  },
  {
    title: getI18n().t("landing_page.why_title_3"),
    description: getI18n().t("landing_page.why_description_3"),
    icon: HeartOutlined,
  },
  {
    title: getI18n().t("landing_page.why_title_4"),
    description: getI18n().t("landing_page.why_description_4"),
    icon: ApiOutlined,
  },
  {
    title: getI18n().t("landing_page.why_title_5"),
    description: getI18n().t("landing_page.why_description_5"),
    icon: SafetyCertificateOutlined,
  },
  {
    title: getI18n().t("landing_page.why_title_6"),
    description: getI18n().t("landing_page.why_description_6"),
    icon: CommentOutlined,
  },
];
