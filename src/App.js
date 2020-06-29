import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Router, Switch, Route } from "react-router-dom";
import { browserHistory } from "./utils/history";
import LayoutAdmin from "./pages/Layout/AdminMaster";
import LayoutWeb from "./pages/Layout/WebMaster";
import { AdminRoutes, WebRoutes } from "./Routes";
import AuthLoading from "./component/Loading/AuthenLoading";
import EventLoading from "./component/Loading/EventLoading";
import Modal from "./component/Modal";
import LoginPage from "./pages/Login";
import "./App.css";
import "./sass/app.scss";
import { Spin } from "antd";


class App extends Component {
  renderAdminLayout = () => {
    let html = null;
    html = AdminRoutes.map(route => {
      return (
        <LayoutAdmin
          name={route.name}
          key={route.path}
          component={route.component}
          path={route.path}
          exact={route.exact}
        />
      );
    });
    return html;
  };
  renderWebLayout = () => {
    let html = null;
    html = WebRoutes.map(route => {
      return (
        <LayoutWeb
          name={route.name}
          key={route.path}
          component={route.component}
          path={route.path}
          exact={route.exact}
        />
      );
    });
    return html;
  };
  render() {
    return (
      <div className="App bg-app">
        <AuthLoading />
        <EventLoading />
        <Modal />
        <Router history={browserHistory}>
          <Switch>
            <Route exact path="/bautroixanh/login" component={LoginPage} />
            {this.renderAdminLayout()}
            {this.renderWebLayout()}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withTranslation()(App);
