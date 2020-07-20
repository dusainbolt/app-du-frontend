import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Router, Switch, Route } from "react-router-dom";
import { browserHistory } from "./utils/history";
import LayoutAdmin from "./pages/Layout/AdminMaster";
import LayoutWeb from "./pages/Layout/WebMaster";
import { AdminRoutes, WebRoutes } from "./Routes";
import AuthLoading from "./components/Loading/AuthenLoading";
import EventLoading from "./components/Loading/EventLoading";
import Modal from "./components/Modal";
import LoginPage from "./pages/Login";
import NotFound from "./pages/Web/NotFound";
import { actions as actionLayout } from "./pages/Layout/AdminMaster/actions";
import "./App.css";
import "./sass/app.scss";
import { connect } from "react-redux";
class App extends Component {
  renderAdminLayout = () => {
    let html = null;
    html = AdminRoutes.map(route => {
      return (
        <LayoutAdmin
          name={route.name}
          key={route.path}
          components={route.components}
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
          components={route.components}
          path={route.path}
          exact={route.exact}
        />
      );
    });
    return html;
  };
  render() {
    const { layout } = this.props;
    return (
      <div className="App">
        <AuthLoading isLoading={layout.isLoadingAuth} />
        <EventLoading isLoading={layout.isLoadingEvent}/>
        <Modal hideModal={this.props.hideModal} modal={layout.modal} />
        <Router history={browserHistory}>
          <Switch>
            <Route exact path="/bautroixanh/login" components={LoginPage} />
            {this.renderAdminLayout()}
            {this.renderWebLayout()}
            <Route exact path="" components={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mstp = state => ({
  layout: state.layoutReducer,
});

const mdtp = dispatch => ({
  hideModal: () => dispatch(actionLayout.hideModal()),
});


export default connect(mstp, mdtp)(withTranslation()(App));