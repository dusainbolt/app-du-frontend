import React, { Component } from "react";
import {
  HomeFilled,
  AppstoreFilled,
  GlobalOutlined,
  CaretDownFilled,
  AppstoreOutlined,
  BookFilled,
} from "@ant-design/icons";
import FadeIn from "react-fade-in";

import { Link } from "react-router-dom";
import { Menu, Dropdown } from "antd";

import { connect } from "react-redux";
import { actions } from "../../../pages/Login/actions";
import LogoHeader from "../../../common/image/LogoSidebar.png";
import { actions as actionLandingPage } from "../../../pages/Web/Home/actions";
import SideBar from "../SlideBar";
import { withTranslation } from "react-i18next";

const listLangage = ["vn", "en"];
class CommonHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  onShowSidebar = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  renderMenuLanguage = (t, lang) => {
    return (
      <Menu>
        {listLangage.map(value => (
          <Menu.Item
            key={value}
            className={this.checkActiveLanguage(lang, value)}
            onClick={this.changeLocales(value)}
          >
            {t(`header.language_${value}`)}
          </Menu.Item>
        ))}
      </Menu>
    );
  };
  checkActiveLanguage = (lang, value) => {
    if (lang === value) return "header__active-language";
    return "";
  };
  changeLocales = type => () => {
    this.props.i18n.changeLanguage(type);
    this.props.changeLanguage(type);
  };

  render() {
    const { t, lang } = this.props;
    const { visible } = this.state;
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
                  <Link to="/app">
                    <AppstoreFilled className="header__web--menu--icon" />
                    {t("header.menu_app")}
                  </Link>
                </li>
                <li>
                  <Dropdown
                    overlayClassName="header__language"
                    trigger="click"
                    overlay={this.renderMenuLanguage(t, lang)}
                  >
                    <p className="ant-dropdown-link dropdown-language">
                      <GlobalOutlined />
                      {lang === "vn"
                        ? t("header.language_vn")
                        : t("header.language_en")}
                      <CaretDownFilled />
                    </p>
                  </Dropdown>
                </li>
              </ul>
            </div>
          </div>
          <div className="header__web--display-mobie">
            <AppstoreOutlined
              className="header__web--display-mobie--icon"
              onClick={this.onShowSidebar}
            />
            <SideBar receiveVisible={this.onShowSidebar} visible={visible} />
          </div>
        </div>
      </FadeIn>
    );
  }
}

const mstp = state => ({
  lang: state.LandingPageReducer.lang
});

const mdtp = dispatch => ({
  changeLanguage: lang => dispatch(actionLandingPage.changeLanguage(lang))
});

export default connect(mstp, mdtp)(withTranslation()(CommonHeader));
