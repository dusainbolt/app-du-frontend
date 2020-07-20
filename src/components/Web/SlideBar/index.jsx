import { Drawer } from "antd";
import React, { Component } from "react";
import { withTranslation } from "react-i18next";
class sidarBarWeb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placement: "top",
    };
  }
  onClose = () => {
    this.props.receiveVisible();
  };

  onChange = e => {
    this.setState({
      placement: e.target.value,
    });
  };

  render() {
    const { visible, t } = this.props;
    const { placement } = this.state;
    return (
      <Drawer
        title={t("header.title_menu_drawer")}
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

export default withTranslation()(sidarBarWeb);
