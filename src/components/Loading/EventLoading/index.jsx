import React from "react";
import { Spin } from "antd";

function EventLoading({ isLoading }) {
  return (
    isLoading && (
      <div className="event-loading">
        <Spin tip="Loading..."></Spin>
      </div>
    )
  );
}

export default EventLoading;
