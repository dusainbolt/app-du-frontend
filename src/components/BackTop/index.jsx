import React, { Component } from "react";
import { BackTop } from "antd";
import { UpCircleFilled } from "@ant-design/icons";
class BackTopCommon extends Component {
  render() {
    return (
      <BackTop className="back-top-wrapper">
        <UpCircleFilled className="back-top"></UpCircleFilled>
      </BackTop>
    );
  }
}
export default BackTopCommon;
