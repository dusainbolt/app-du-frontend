import React from "react";
import { Modal, Typography } from "antd";

const { Title } = Typography;

function ModalCommon({
  visible,
  onCancel,
  width,
  classTitle = "",
  title,
  content,
  levelTitle = 4,
}) {
  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      wrapClassName="modal"
      width={width}
      footer={null}
      title={null}
      closable={false}
    >
      <Title className={`modal__title ${classTitle}`} level={levelTitle}>
        <span>{title}</span>
      </Title>
      {content}
    </Modal>
  );
}

export default ModalCommon;
