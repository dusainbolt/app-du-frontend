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
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     collapsed: true,
  //   };
  //   this.toggleMenu = this.toggleMenu.bind(this);
  // }

  // toggleMenu() {
  //   this.setState(state => ({
  //     collapsed: !state.collapsed,
  //   }));
  // }

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
        render={(routeProps) => {
          return (
            <Layout className="layout">
              <Header className="layout__header-page">
                <CommonHeader toggleMenu={this.toggleMenu} />
              </Header>
              <Layout className="site-layout-page">
                {/* <Sider
                  trigger={null}
                  collapsible
                >
                  <Sidebar />
                </Sider> */}
                <Content className="site-layout-background">
                  <MyComponent {...routeProps} />
                </Content>
              </Layout>
            </Layout>
            // <Layout className="layout">
            //   <Header  className="layout__header">
            //     <div className="logo" />
            //     <Menu
            //       theme="dark"
            //       mode="horizontal"
            //       defaultSelectedKeys={["2"]}
            //     >
            //       <Menu.Item key="1">nav 1</Menu.Item>
            //       <Menu.Item key="2">nav 2</Menu.Item>
            //       <Menu.Item key="3">nav 3</Menu.Item>
            //     </Menu>
            //   </Header>
            //   <Content
            //     className="site-layout"
            //     style={{ padding: "0 50px", marginTop: 64 }}
            //   >
            //     <Breadcrumb style={{ margin: "16px 0" }}>
            //       <Breadcrumb.Item>Home</Breadcrumb.Item>
            //       <Breadcrumb.Item>List</Breadcrumb.Item>
            //       <Breadcrumb.Item>App</Breadcrumb.Item>
            //     </Breadcrumb>
            //     <div
            //       className="site-layout-background"
            //       style={{ padding: 24, minHeight: 380 }}
            //     >
            //       <MyComponent {...routeProps} />
            //     </div>
            //   </Content>
            //   <Footer style={{ textAlign: "center" }}>
            //     ©2018 Created by Du Sainbolt
            //   </Footer>
            // </Layout>
          );
        }}
      />
    );
  }
}

export default App;
