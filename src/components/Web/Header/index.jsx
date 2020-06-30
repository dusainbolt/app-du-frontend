/** @format */

import React from "react";
import {
  MenuOutlined,
  UserOutlined,
  MessageFilled,
  LogoutOutlined,
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Typography, Avatar, Menu, Row, Col } from "antd";
import { connect } from "react-redux";
import { actions } from "../../../pages/Login/actions";
import ChangePassModal from "../../../components/Admin/ChangePasswordModal";
import LogoHeader from "../../../common/image/LogoSidebar.png";
import { actions as actionsModal } from "../../../component/Modal/actions";

const { Paragraph } = Typography;
const { SubMenu, current } = Menu;

class CommonHeader extends React.Component {
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
  render() {
    return (
          <div className="header__web">
              <img src={LogoHeader} width="140" height="55" alt="avatar" />
            <div className="header__web--display-web">
              <div className="header__web--menu">
                <ul>
                  <li>
                    <Link className="home-item-menu-active" to="/bautroixanh/login">Home </Link>
                  </li>
                  <li>
                    <Link to="/bautroixanh/login">Home part 2 </Link>
                  </li>
                  <li>
                    <Link to="/bautroixanh/login">Home part 3 </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header__web--display-mobie">
              <Avatar
                className="header__web--display-mobie--icon"
                icon={<UserOutlined />}
              />
            </div>
          </div>
    );
  }
}

const mstp = state => ({});

const mdtp = dispacth => ({
  logoutAdmin: () => dispacth(actions.postLogoutStart()),
  showModal: (title, content) =>
    dispacth(actionsModal.showModal(title, content))
});

export default connect(mstp, mdtp)(CommonHeader);
