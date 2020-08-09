import React, { Component, useEffect } from "react";
import { Route } from "react-router-dom";
import { Layout } from "antd";
import CommonHeader from "../../../components/Web/Header";
import "./index.scss";
import Footer from "../../../components/Web/Footer";

const { Header, Content } = Layout;
function App({ component: Mycomponent, classes, name, ...remainProps }) {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = event => {
    let scrollTop = Math.round(event.target.scrollingElement.scrollTop);
    let headerTop = document.getElementById("header-web");
    if (scrollTop > 50 && headerTop) {
      headerTop.style.boxShadow = "1px 1px 5px #ddd";
    } else if (scrollTop < 50 && headerTop) {
      headerTop.style.boxShadow = "none";
    }
  };
  return (
    <Route
      {...remainProps}
      render={routeProps => {
        return (
          <Layout className="layout-web">
            <Header id="header-web" className="layout-web__header-web">
              <CommonHeader />
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

export default App;
