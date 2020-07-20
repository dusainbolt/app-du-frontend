/** @format */

import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Layout } from "antd";
import CommonHeader from "../../../components/Web/Header";
import "./index.scss";
import Footer from "../../../components/Web/Footer";

const { Header, Content } = Layout;
class App extends Component {

  render() {
    const {
      component: Mycomponent,
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
                  <Mycomponent {...routeProps} />
                  <Footer />
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
