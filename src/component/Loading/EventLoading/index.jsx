import React, { Component } from "react";
import { Spin } from "antd";
class EventLoading extends Component {
  render() {
    const { isLoading } = this.props;
    return (
      isLoading && (
        <div className="event-loading">
          <Spin tip="Loading..."></Spin>
        </div>
      )
    );
  }
}

export default EventLoading;
