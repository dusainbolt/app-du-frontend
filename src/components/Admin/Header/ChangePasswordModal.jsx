import React from "react";
import { Row, Col, Modal } from "antd";
import Input from "../../../components/Input";
import { Formik, Field } from "formik";
import Button from "../../Button";
import {
  validateFormChangePassword,
  fieldChangePassword,
} from "../../../common/js/configValueSubmit";

function ModalChangePassword({ userDetail, visible, onCancel, receiveSubmit }) {
  const initialValues = {
    [fieldChangePassword.PASSWORD]: "",
    [fieldChangePassword.PASSWORD_NEW]: "",
    [fieldChangePassword.PASSWORD_CONFIRM]: "",
  };

  const onSubmit = values => {
    receiveSubmit({ ...values, email: userDetail.email });
  };

  return (
    <Modal
      title={null}
      visible={visible}
      onCancel={onCancel}
      closable={false}
      width={500}
      footer={null}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validateFormChangePassword}
        onSubmit={onSubmit}
        onReset={onCancel}
      >
        {formik => (
          <div className="form-group layout-web">
            <div className="form-group__title">
              <Row justify="space-between">
                <Col span={24}>
                  <label className="form-group__label-left">Tên:</label>
                  <label className="form-group__label-right">{userDetail.name}</label>
                </Col>
              </Row>
              <Row justify="space-between">
                <Col span={24}>
                  <label className="form-group__label-left">Email:</label>
                  <label className="form-group__label-right">{userDetail.email}</label>
                </Col>
              </Row>
            </div>
            <Field
              name={fieldChangePassword.PASSWORD}
              labelTitle="Mật khẩu cũ"
              type="password"
              placeholder="Nhập mật khẩu cũ"
              component={Input}
            />
            <Field
              name={fieldChangePassword.PASSWORD_NEW}
              labelTitle="Mật khẩu mới"
              type="password"
              placeholder="Nhập mật khẩu mới"
              component={Input}
            />
            <Field
              name={fieldChangePassword.PASSWORD_CONFIRM}
              labelTitle="Xác nhận mật khẩu"
              type="password"
              placeholder="Nhập lại mật khẩu mới"
              component={Input}
            />
            <div className="form-group__btn-gruop btn-modal">
              <Button
                className="btn-outline-primary"
                onClick={formik.handleReset}
                title="Hủy"
              />
              <Button
                className="form-group__btn-right btn-primary"
                type="submit"
                title="Hoan tat"
                onClick={formik.handleSubmit}
              />
            </div>
          </div>
        )}
      </Formik>
    </Modal>
  );
}

export default ModalChangePassword;
