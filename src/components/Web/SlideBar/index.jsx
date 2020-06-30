import { Drawer, Button, Radio, Space } from "antd";
import React, { Component } from "react";
class sidarBarWeb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visible,
      placement: "top",
    };
  }
  onClose = () => {
    this.setState({
      visible: false,
    });
    this.props.receiveVisible();
  };

  onChange = (e) => {
    this.setState({
      placement: e.target.value,
    });
  };

  render() {
    let { placement, visible } = this.state;
    // console.log("prpos: ", this.props.visible);
    // console.log(visible);
    visible = this.props.visible;
    return (
      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={this.onClose}
        visible={visible}
        key={placement}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    );
  }
}

export default sidarBarWeb;
