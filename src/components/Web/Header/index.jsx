import React from "react";
import {
  MenuOutlined,
  UserOutlined,
  MessageFilled,
  LogoutOutlined,
} from "@ant-design/icons";
import "./index.scss";
import { Typography, Avatar, Popover } from "antd";
import { connect } from "react-redux";
import { actions } from "../../../pages/Login/actions";
import ChangePassModal from "../../../components/Admin/ChangePasswordModal";
import LogoHeader from "../../../common/image/LogoSidebar.png";
import { actions as actionsModal } from "../../../component/Modal/actions";


const { Paragraph } = Typography;

class CommonHeader extends React.Component {
  list = (
    <ul className="list__profile">
      <li className="list__item" onClick={() => this.changePassword()} >
        <UserOutlined className="list__item--icon" /> Change Password
      </li>
      <li onClick={() => this.logout()} className="list__item">
        <LogoutOutlined className="list__item--icon" /> Log Out
      </li>
    </ul>
  );

  changePassword = () => {
    this.props.showModal("Đổi mật khẩu", <ChangePassModal />);
  }

  logout = () => {
    this.props.logoutAdmin();
  };
  render() {
    return (
      <div className="header">
        {/* <MenuOutlined
          className="header__icon"
          onClick={this.props.toggleMenu}
        /> */}
        <div className="header__web">
          <Paragraph className="header__web--logo" level={4}>
            <img src={LogoHeader} width="140" height="55" alt="avatar"/>
          </Paragraph>
          <div className="header__web--display-web">
            {/* <MessageFilled className="profile__icon--message" /> */}
            {/* <Popover
              placement="bottomRight"
              content={this.list}
              trigger="click"
              className="profile__popover"
            >
              <Avatar
                className="profile__icon--avatar"
                icon={<UserOutlined />}
              />
            </Popover> */}
            
            home
          </div>
          <div className="header__web--display-mobie">
            {/* <MessageFilled className="profile__icon--message" /> */}
            {/* <Popover
              placement="bottomRight"
              content={this.list}
              trigger="click"
              className="profile__popover"
            >
              <Avatar
                className="profile__icon--avatar"
                icon={<UserOutlined />}
              />
            </Popover> */}
            
             <Avatar
                className="profile__icon--avatar"
                icon={<UserOutlined />}
              />
          </div>
        </div>
      </div>
    );
  }
}

const mstp = state => ({

});

const mdtp = dispacth => ({
  logoutAdmin: () => dispacth(actions.postLogoutStart()),
  showModal: (title, content) => dispacth(actionsModal.showModal(title, content)),
});

export default connect(mstp, mdtp)(CommonHeader);
