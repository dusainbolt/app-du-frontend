import React from "react";
import { BackTop } from "antd";
import { UpCircleFilled } from "@ant-design/icons";

function BackTopCommon() {
  return (
    <BackTop className="back-top-wrapper">
      <UpCircleFilled className="back-top"></UpCircleFilled>
    </BackTop>
  );
}
export default BackTopCommon;
