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
  // constructor(props) {
  //   super(props);
  //   this.state({});
  // }
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
        <MenuOutlined
          className="header__icon"
          onClick={this.props.toggleMenu}
        />
        <div className="header__actor">
          <Paragraph className="header__actor--logo" level={4}>
            <img width="140" height="55" src={LogoHeader} alt="avatar"/>
          </Paragraph>
          <div className="header__actor--profile">
            <MessageFilled className="profile__icon--message" />
            <Popover
              placement="bottomRight"
              content={this.list}
              trigger="click"
              className="profile__popover"
            >
              <Avatar
                className="profile__icon--avatar"
                icon={<UserOutlined />}
              />
            </Popover>
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
