import { Modal } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "./actions";

class ModalCommon extends Component {
  handleCancel = () => {
    this.props.hideModal();
  };

  render() {
    const { modal } = this.props;
    return (
      <div>
        <Modal
          title={modal.title}
          visible={modal.visible}
          //   onOk={modal.handleOk}
          onCancel={this.handleCancel}
          footer={
            [
              // <Button key="back" onClick={this.handleCancel}>
              //   Return
              // </Button>,
              // <Button key="submit" type="primary" onClick={this.handleOk}>
              //   Submit
              // </Button>,
            ]
          }
        >
          {modal.content}
        </Modal>
      </div>
    );
  }
}

const mstp = state => ({
  modal: state.modalReducer,
});

const mdtp = dispatch => ({
  hideModal: () => dispatch(actions.hideModal()),
});

export default connect(mstp, mdtp)(ModalCommon);
