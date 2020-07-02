/** @format */

import React, { Component } from "react";
import { Route } from "react-router-dom";
import { browserHistory } from "../../../utils/history";
import { Layout, Menu, Breadcrumb } from "antd";
import { connect } from "react-redux";
import CommonHeader from "../../../components/Web/Header";
import Sidebar from "../../../components/Admin/SlideBar";
import "./index.scss";
import { actions } from "../../Login/actions";
const { Header, Content, Sider } = Layout;
class App extends Component {

  render() {
    const {
      component: MyComponent,
      classes,
      name,
      ...remainProps
    } = this.props;
    return (
      <Route
        {...remainProps}
        render={routeProps => {
          return (
            <Layout className="layout-web">
              <Header className="layout-web__header-web">
                <CommonHeader toggleMenu={this.toggleMenu} />
              </Header>
              <Layout className="site-layout-web">
                <Content className="site-layout-web-background">
                  <MyComponent {...routeProps} />
                </Content>
              </Layout>
            </Layout>
          );
        }}
      />
    );
  }
}

export default App;
