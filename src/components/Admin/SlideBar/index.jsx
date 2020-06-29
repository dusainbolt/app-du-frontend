import React from "react";
import { Menu } from "antd";
import { withTranslation } from "react-i18next";
import { AdminRoutes } from "../../../Routes";
import { NavLink, Redirect } from "react-router-dom";
import { browserHistory } from "../../../utils/history";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import "./index.scss";

const icons = {
  manager: UserOutlined,
  task: VideoCameraOutlined,
  contact: UploadOutlined,
};
class Sidebar extends React.Component {

  constructor(props){
    super(props);
  }

  renderMenu = () => {
    let menu = null;
    menu = AdminRoutes.map((item, index) => {
      if (index !== 0) {
        const activeClassMenun = window.location.pathname === item.path ? "ant-menu-item-selected" : "";
        return (
          <Menu.Item
            key={`${item.name}_${index}`}
            icon={this.getIconMenu(item.iconName)}
            onClick={() => this.gerRedirect(item.path)}
            className={activeClassMenun}
          >
            {item.name}
          </Menu.Item>
        );
      }
    });
    return menu;
  };
  
  gerRedirect = path =>{
    return browserHistory.push(path);
  };
  getIconMenu = iconName => {
    const Icon = icons[iconName];
    return icons ? <Icon /> : "";
  };
  render() {
    return (
      <Menu
        mode="inline"
        theme="light"
        className="layout-page-sider-menu"
      >
        {this.renderMenu()}
      </Menu>
    );
  }
}

export default Sidebar;
