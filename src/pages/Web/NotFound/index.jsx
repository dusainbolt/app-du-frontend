import React, { Component, } from "react";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import { withRouter } from "react-router-dom";


class Home extends Component {

  render() {
    const { t } = this.props;
    return (
      <div>Not Found</div>
    );
  }
}

const mstp = state => ({
});
const mdtp = dispatch => ({
});

export default withRouter(connect(mstp, mdtp)(withTranslation()(Home)));
