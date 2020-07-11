import React, { Component } from "react";
import {
  MailOutlined,
  AppstoreOutlined,
  GlobalOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import FadeIn from "react-fade-in";

import { Link } from "react-router-dom";
import { Menu, Dropdown } from "antd";

import { connect } from "react-redux";
import { actions } from "../../../pages/Login/actions";
import LogoHeader from "../../../common/image/LogoSidebar.png";
import { actions as actionsModal } from "../../../pages/Layout/AdminMaster/actions";
import SideBar from "../SlideBar";
import { withTranslation } from "react-i18next";

const listLangage = ["vn","en"];
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

  renderMenuLanguage = (t, lang)=> { 
    return (
      <Menu>
        { listLangage.map(value =>
          <Menu.Item key={value} className={this.checkActiveLanguage(lang, value)} onClick={this.changeLocales(value)}>{t(`language_${value}`)}</Menu.Item>
        )}
      </Menu>
    );
  };
  checkActiveLanguage = (lang, value) => {
    if(lang === value) return "header__active-language";
    return "";
  }
  changeLocales = type => () => {
    this.props.i18n.changeLanguage(type);
    localStorage.setItem("lang", type);
  };

  render() {
    const { t } = this.props;
    let lang = localStorage.getItem("lang");
    if(!lang) lang = "vn";
    return (
      <FadeIn transitionDuration={1000}>
        <div className="header__web">
          <img src={LogoHeader} width="140" height="55" alt="avatar" />
          <div className="header__web--display-web">
            <div className="header__web--menu">
              <ul>
                <li>
                  <Link
                    className="home-item-menu-active"
                    to="/bautroixanh/login"
                  >
                    <MailOutlined className="header__web--menu--icon" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/bautroixanh/login">
                    <AppstoreOutlined className="header__web--menu--icon" />
                    Home part 2
                  </Link>
                </li>
                <li>
                  <Link to="/bautroixanh/login">
                    <SettingOutlined className="header__web--menu--icon" />
                    Home part 3
                  </Link>
                </li>
                <li>
                  <Dropdown overlayClassName="header__language" overlay={this.renderMenuLanguage(t, lang)}>
                    <p
                      className="ant-dropdown-link dropdown-language"
                    >
                      <GlobalOutlined /> { lang === "vn" ? t("language_vn") : t("language_en")}
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
            <SideBar
              receiveVisible={() => this.setState({ visible: false })}
              visible={this.state.visible}
            />
          </div>
        </div>
      </FadeIn>
    );
  }
}

const mstp = (state) => ({});

const mdtp = (dispacth) => ({
  logoutAdmin: () => dispacth(actions.postLogoutStart()),
  showModal: (title, content) =>
    dispacth(actionsModal.showModal(title, content)),
});

export default connect(mstp, mdtp)(withTranslation()(CommonHeader));
