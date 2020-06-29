import React from "react";
import { Layout, Menu } from "antd";
import { withTranslation } from "react-i18next";
import { AdminRoutes } from "../../../Routes";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import "./index.scss";

const { Item } = Menu;
const icons = {
  manager: UserOutlined,
  task: VideoCameraOutlined,
  contact: UploadOutlined,
};
class Sidebar extends React.Component {
  renderMenu = () => {
    let menu = null;
    menu = AdminRoutes.map((item, index) => {
      return (
        <Menu.Item key={`${item.name}_${index}`} icon={this.getIconMenu(item.nameIcon)}>
          {item.name}
        </Menu.Item>
      );
    });
    return menu;
  };
  getIconMenu = iconName => {
    const Icon = icons[iconName];
    return icons ? <Icon /> : "";
  }
  render() {
    return (
      <Menu mode="inline" theme="light" className="layout-page-sider-menu">
        {this.renderMenu()}
      </Menu>
    );
  }
}

export default Sidebar;
