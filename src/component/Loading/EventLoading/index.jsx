/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Spin } from "antd";

class EventLoading extends Component {
  render() {
    const { isloading } = this.props;
    let html = null;
    if (isloading) {
      html = (
        <div className="event-loading">
          <Spin tip="Loading..."></Spin>
        </div>
      );
    }
    return html;
  }
}

const mapStateToProps = state => ({
  isloading: state.loadingEventReducer.isLoading,
});

const mapDispatchToProps = dispatch => ({});

const connectRedux = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectRedux)(EventLoading);
