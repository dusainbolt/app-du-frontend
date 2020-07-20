import React, { Component } from "react";
import { Route } from "react-router-dom";
import { browserHistory } from "../../../utils/history";
import { Layout } from "antd";
import { connect } from "react-redux";
import CommonHeader from "../../../components/Admin/Header";
import Sidebar from "../../../components/Admin/SlideBar";
import "./index.scss";
import { actions } from "../../Login/actions";

const { Header, Content, Sider } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState(state => ({
      collapsed: !state.collapsed,
    }));
  }

  componentsDidMount() {
    const { postAuth, token } = this.props;
    if(token){
      postAuth(token);
    }else{
      browserHistory.push("/bautroixanh/login");
    }
  }

  render() {
    const {
      components: Mycomponents,
      classes,
      name,
      token,
      ...remainProps
    } = this.props;
    
    return (
      <Route
        {...remainProps}
        render={routeProps => {
          if (this.props.path === "/bautroixanh") {
            return browserHistory.push("/bautroixanh/home");
          }
          return (
            <Layout className="layout">
              <Header className="layout__header">
                <CommonHeader toggleMenu={this.toggleMenu} />
              </Header>
              <Layout className="site-layout">
                <Sider
                  trigger={null}
                  collapsible
                  collapsed={this.state.collapsed}
                >
                  <Sidebar />
                </Sider>
                <Content className="site-layout-background">
                  <Mycomponents {...routeProps} />
                </Content>
              </Layout>
            </Layout>
          );
        }}
      />
    );
  }
}

const mstp = state => ({
  token: state.loginReducer.auth?.token,
});

const mdtp = dispatch => ({
  postAuth: values => dispatch(actions.postAuthAdminStart(values)),
});

export default connect(mstp, mdtp)(App);
