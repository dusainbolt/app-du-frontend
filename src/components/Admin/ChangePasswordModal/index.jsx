import { Button, Row, Col } from "antd";

import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "../../../components/Login";
import { actions as actionsModal } from "../../../pages/Layout/AdminMaster/actions";
import { actions as actionLogin } from "../../../pages/Login/actions";
import { Formik, Field } from "formik";
import * as Yup from "yup";

class ModalCommon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValues: {
        password: "",
        passwordNew: "",
        passwordConfirm: "",
        email: this.props.userDetail.email,
      },
    };

    this.validationSchema = Yup.object({
      password: Yup.string()
        .required("Vui lòng nhập mật khẩu cũ")
        .max(255, "Vui lòng nhập dưới 255 ký tự"),
      passwordNew: Yup.string()
        .required("Vui lòng nhập mật khẩu mới")
        .min(6, "Vui lòng nhập ít nhất 6 ký tự")
        .notOneOf([Yup.ref("password"), null], "Mật khẩu mới không được trùng")
        .max(27, "Vui lòng nhập dưới 27 ký tự"),
      passwordConfirm: Yup.string()
        .required("Vui lòng nhập lại mật khẩu mới")
        .oneOf(
          [Yup.ref("passwordNew"), null],
          "Mật khẩu xác nhận không trùng khớp"
        )
        .min(6, "Vui lòng nhập ít nhất 6 ký tự")
        .max(27, "Vui lòng nhập dưới 27 ký tự"),
    });
  }
  onSubmit = (values, { resetForm }) => {
    this.props.changePassword(values);
    resetForm();
  };

  onHideModal = ( ) => {
    this.props.hideModal();
  };

  render() {
    const { initialValues } = this.state;
    const { userDetail } = this.props;
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={this.validationSchema}
        onSubmit={this.onSubmit}
        onReset={this.onHideModal}
      >
        {formik => (
          <div className="form-group">
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
                  <label className="form-group__label-right">
                    {userDetail.email}
                  </label>
                </Col>
              </Row>
            </div>
            <Field
              name="password"
              labelTitle="Mật khẩu cũ"
              type="password"
              placeholder="Nhập mật khẩu cũ"
              component={Input}
            />
            <Field
              name="passwordNew"
              labelTitle="Mật khẩu mới"
              type="password"
              placeholder="Nhập mật khẩu mới"
              component={Input}
            />
            <Field
              name="passwordConfirm"
              labelTitle="Xác nhận mật khẩu"
              type="password"
              placeholder="Nhập lại mật khẩu mới"
              component={Input}
            />
            <div className="form-group__btn-gruop btn-modal">
              <Button
                key="back"
                className="form-group__btn-left white-color"
                onClick={formik.handleReset}
              >
                Hủy
              </Button>
              <Button
                key="submit"
                className="form-group__btn-right white-color"
                type="submit"
                onClick={formik.handleSubmit}
              >
                Hoàn tất
              </Button>
            </div>
          </div>
        )}
      </Formik>
    );
  }
}

const mstp = state => ({
  userDetail: state.loginReducer.userDetail,
});

const mdtp = dispatch => ({
  hideModal: () => dispatch(actionsModal.hideModal()),
  changePassword: values => dispatch(actionLogin.postChangePasswordStart(values)),
});

export default connect(mstp, mdtp)(ModalCommon);
