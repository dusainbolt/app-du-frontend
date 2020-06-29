import React from "react";

import { Layout } from "antd";

import "./index.scss";

const { Footer } = Layout;

export default class commonFooter extends React.Component {
  constructor () {
    super();
    console.log("11111","1111");
  }

  render () {

    return (
      <Footer style={{ textAlign: "center" }}>
        Ekoios 2020
      </Footer>
    );
  }
}
