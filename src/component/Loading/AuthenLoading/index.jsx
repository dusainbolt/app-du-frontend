/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import LoadingAuthenticationImage from "../../../common/image/LoadingProject.gif";

class AuthLoading extends Component {
  render() {
    const { isloading } = this.props;
    let html = null;
    if (isloading) {
      html = (
        <div className="authen-loading">
          <img
            src={LoadingAuthenticationImage}
            alt="loading"/>
        </div>
      );
    }
    return html;
  }
}

const mapStateToProps = state => ({
  isloading: state.loadingAuthReducer.isLoading,
});

const mapDispatchToProps = dispatch => ({

});

const connectRedux = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectRedux)(AuthLoading);
