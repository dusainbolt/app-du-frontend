/** @format */

import React, { Component } from "react";
import LoadingAuthenticationImage from "../../../common/image/LoadingProject.gif";
class AuthLoading extends Component {
  render() {
    const { isLoading } = this.props;
    return (
      isLoading && (
        <div className="authen-loading">
          <img src={LoadingAuthenticationImage} alt="loading" />
        </div>
      )
    );
  }
}
export default AuthLoading;
