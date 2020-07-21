import React, { Component } from "react";
import { BackTop } from "antd";

class BackTopCommon extends Component {
  render() {
    const style = {
        height: 40,
        width: 40,
        lineHeight: '40px',
        borderRadius: 4,
        backgroundColor: '#1088e9',
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
    };
    return (
      <BackTop>
        <div style={style}>UP</div>
      </BackTop>
    );
  }
}
export default BackTopCommon;
