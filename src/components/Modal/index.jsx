import { Modal } from "antd";
import React, { Component } from "react";
class ModalCommon extends Component {
  render() {
    const { modal } = this.props;
    return (
      <div>
        <Modal
          title={modal.title}
          visible={modal.visible}
          onCancel={this.props.hideModal}
          footer={null}
        >
          {modal.content}
        </Modal>
      </div>
    );
  }
}

export default ModalCommon;
