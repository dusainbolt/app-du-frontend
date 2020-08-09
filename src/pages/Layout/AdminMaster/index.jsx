import React, { Component, useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { browserHistory } from "../../../utils/history";
import { Layout } from "antd";
import { connect, useSelector, useDispatch } from "react-redux";
import CommonHeader from "../../../components/Admin/Header";
import Sidebar from "../../../components/Admin/SlideBar";
import "./index.scss";
import { actions } from "../../Login/actions";

const { Header, Content, Sider } = Layout;

function App({ component: Mycomponent, classes, name, path, ...remainProps }) {
  const token = useSelector(state => state.loginReducer.auth?.token);
  const [collapsed, setCollapsed] = useState(true);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setCollapsed(!collapsed);
  };

  const onClickContent = () => {
    setCollapsed(true);
  };

  useEffect(() => {
    if (token) {
      dispatch(actions.postAuthAdminStart(token));
    } else {
      browserHistory.push("/bautroixanh/login");
    }
  }, []);

  return (
    <Route
      {...remainProps}
      render={routeProps => {
        if (path === "/bautroixanh") {
          return browserHistory.push("/bautroixanh/home");
        }
        return (
          <Layout className="layout">
            <Header className="layout__header">
              <CommonHeader toggleMenu={toggleMenu} />
            </Header>
            <Layout className="site-layout">
              <Sider trigger={null} collapsible collapsed={collapsed}>
                <Sidebar />
              </Sider>
              <Content onClick={onClickContent} className="site-layout-background">
                <Mycomponent {...routeProps} />
              </Content>
            </Layout>
          </Layout>
        );
      }}
    />
  );
}

export default App;
