import React, { useState } from "react";
import {
  HomeFilled,
  AppstoreFilled,
  GlobalOutlined,
  CaretDownFilled,
  AppstoreOutlined,
  BookFilled,
} from "@ant-design/icons";
import FadeIn from "react-fade-in";
import FlagLanguage from "../../Flag";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import { listLangage } from "../../../common/configLandingPage";
import LogoHeader from "../../../resource/image/LogoSidebar.png";
import SideBar from "../SlideBar";
import { useTranslation } from "react-i18next";

let localLang = localStorage.getItem("lang");
const lang = localLang ? localLang : "vn";

function CommonHeader() {
  const [visible, setVisible] = useState(false);
  const { t, i18n } = useTranslation();

  const onShowSidebar = () => {
    setVisible(!visible);
  };

  return (
    <FadeIn transitionDuration={1000}>
      <div className="header__web">
        <img src={LogoHeader} width="140" height="55" alt="avatar" />
        <div className="header__web--display-web">
          <div className="header__web--menu">
            <ul>
              <li>
                <Link className="home-item-menu-active" to="/">
                  <HomeFilled className="header__web--menu--icon" />
                  {t("header.menu_home")}
                </Link>
              </li>
              <li>
                <Link to="/blog">
                  <BookFilled className="header__web--menu--icon" />
                  {t("header.menu_blog")}
                </Link>
              </li>
              <li>
                <Link to="/bautroixanh">
                  <AppstoreFilled className="header__web--menu--icon" />
                  {t("header.menu_app")}
                </Link>
              </li>
              <li>
                <FlagLanguage />
              </li>
            </ul>
          </div>
        </div>
        <div className="header__web--display-mobie">
          <AppstoreOutlined className="header__web--display-mobie--icon" onClick={onShowSidebar} />
          <SideBar receiveVisible={onShowSidebar} visible={visible} />
        </div>
      </div>
    </FadeIn>
  );
}

export default CommonHeader;
