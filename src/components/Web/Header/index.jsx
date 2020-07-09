/** @format */

import React from "react";
import {
  UserOutlined,
  LogoutOutlined,
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import FadeIn from "react-fade-in";

import { Link } from "react-router-dom";
import { Typography, Menu, } from "antd";
import { connect } from "react-redux";
import { actions } from "../../../pages/Login/actions";
import ChangePassModal from "../../../components/Admin/ChangePasswordModal";
import LogoHeader from "../../../common/image/LogoSidebar.png";
import { actions as actionsModal } from "../../../pages/Layout/AdminMaster/actions";
import SideBar from "../SlideBar";
const { Paragraph } = Typography;
const { SubMenu, current } = Menu;

class CommonHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  list = (
    <ul className="list__profile">
      <li className="list__item" onClick={() => this.changePassword()}>
        <UserOutlined className="list__item--icon" /> Change Password
      </li>
      <li onClick={() => this.logout()} className="list__item">
        <LogoutOutlined className="list__item--icon" /> Log Out
      </li>
    </ul>
  );

  changePassword = () => {
    this.props.showModal("Đổi mật khẩu", <ChangePassModal />);
  };

  logout = () => {
    this.props.logoutAdmin();
  };
  onShowSidebar = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };
  render() {
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

export default connect(mstp, mdtp)(CommonHeader);
