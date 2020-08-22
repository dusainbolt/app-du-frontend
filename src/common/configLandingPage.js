import Html from "./image/tech-stack/html.png";
import Sass from "./image/tech-stack/sass.png";
import Jquery from "./image/tech-stack/jquery-logo.png";
import Reactjs from "./image/tech-stack/Reactlogo.png";
import AntDesgin from "./image/tech-stack/ant_desgin.png";
import Vuejs from "./image/tech-stack/vuejs.jpg";
import Linux from "./image/tech-stack/linux.png";
import Mysql from "./image/tech-stack/mysql.png";
import Aws from "./image/tech-stack/aws.jpg";
import Laravel from "./image/tech-stack/laravel.jpg";
import Docker from "./image/tech-stack/docker.jpeg";
import Jenkins from "./image/tech-stack/Jenkins.png";
import ImgTop4 from "./image/img-top4.png";
import ImgTop3 from "./image/img-top3.png";
import ImgTop2 from "./image/img-top2.png";
import ImgTop1 from "./image/img-top1.png";
import ImgStep_1 from "./image/process/step-1.png";
import ImgStep_2 from "./image/process/step-2.png";
import ImgStep_3 from "./image/process/step-3.png";
import ImgStep_4 from "./image/process/step-4.png";
import ImgStep_5 from "./image/process/step-5.png";
import {
  SafetyCertificateOutlined,
  AuditOutlined,
  ApiOutlined,
  StarOutlined,
  CommentOutlined,
  HeartOutlined,
  PieChartOutlined,
  BulbOutlined,
  RocketOutlined,
  BorderOuterOutlined,
  BugOutlined,
  CheckOutlined,
  LockOutlined,
  AppstoreAddOutlined,
  PicLeftOutlined,
  RiseOutlined,
  BarChartOutlined,
  ToolOutlined,
  FileDoneOutlined,
  SecurityScanOutlined,
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

export const LIST_STACK_FE = [
  {
    img: Html,
    title: "tech-stack.title_hmtl",
    description: "tech-stack.get_detail",
    label: "tech-stack.html",
  },
  {
    img: Sass,
    title: "tech-stack.title_sass",
    description: "tech-stack.get_detail",
    label: "tech-stack.scss",
  },
  {
    img: Jquery,
    title: "tech-stack.title_jquery",
    description: "tech-stack.get_detail",
    label: "tech-stack.jquery",
  },
  {
    img: Reactjs,
    title: "tech-stack.title_reactjs",
    description: "tech-stack.get_detail",
    label: "tech-stack.react_js",
  },
  {
    img: Vuejs,
    title: "tech-stack.title_vue",
    description: "tech-stack.get_detail",
    label: "tech-stack.vuejs",
  },
  {
    img: AntDesgin,
    title: "tech-stack.title_ant",
    description: "tech-stack.get_detail",
    label: "tech-stack.ant_design",
  },
];

export const DATA_SLICK_IMG_TOP = [ImgTop1, ImgTop2, ImgTop3, ImgTop4];

export const LIST_STACK_BE = [
  {
    img: Linux,
    title: "tech-stack.title_linux",
    description: "tech-stack.get_detail",
    label: "tech-stack.linux",
  },
  {
    img: Mysql,
    title: "tech-stack.title_mysql",
    description: "tech-stack.get_detail",
    label: "tech-stack.mysql",
  },
  {
    img: Aws,
    title: "tech-stack.title_aws",
    description: "tech-stack.get_detail",
    label: "tech-stack.aws",
  },
  {
    img: Laravel,
    title: "tech-stack.title_laravel",
    description: "tech-stack.get_detail",
    label: "tech-stack.laravel",
  },
  {
    img: Docker,
    title: "tech-stack.title_docker",
    description: "tech-stack.get_detail",
    label: "tech-stack.docker",
  },
  {
    img: Jenkins,
    title: "tech-stack.title_jenkins",
    description: "tech-stack.get_detail",
    label: "tech-stack.jenkins",
  },
];

export const DATA_WHY_INFO = [
  {
    title: "landing_page.why_title_1",
    description: "landing_page.why_description_1",
    icon: AuditOutlined,
  },
  {
    title: "landing_page.why_title_2",
    description: "landing_page.why_description_2",
    icon: StarOutlined,
  },
  {
    title: "landing_page.why_title_3",
    description: "landing_page.why_description_3",
    icon: HeartOutlined,
  },
  {
    title: "landing_page.why_title_4",
    description: "landing_page.why_description_4",
    icon: ApiOutlined,
  },
  {
    title: "landing_page.why_title_5",
    description: "landing_page.why_description_5",
    icon: SafetyCertificateOutlined,
  },
  {
    title: "landing_page.why_title_6",
    description: "landing_page.why_description_6",
    icon: CommentOutlined,
  },
];

export const DATA_STEP = [
  {
    title: "ld_process.title_1",
    img: ImgStep_1,
    content: "ld_process.des_1",
    icon: [CommentOutlined, BulbOutlined, PieChartOutlined, AppstoreAddOutlined],
  },
  {
    title: "ld_process.title_2",
    img: ImgStep_2,
    content: "ld_process.des_2",
    icon: [BorderOuterOutlined, PicLeftOutlined, CheckOutlined],
  },
  {
    title: "ld_process.title_3",
    img: ImgStep_3,
    content: "ld_process.des_3",
    icon: [CommentOutlined, BulbOutlined, PieChartOutlined, AppstoreAddOutlined],
  },
  {
    title: "ld_process.title_4",
    img: ImgStep_4,
    content: "ld_process.des_4",
    icon: [RiseOutlined, SecurityScanOutlined, BugOutlined, FileDoneOutlined],
  },
  {
    title: "ld_process.title_5",
    img: ImgStep_5,
    content: "ld_process.des_5",
    icon: [LockOutlined, BarChartOutlined, ToolOutlined, RocketOutlined],
  },
];
