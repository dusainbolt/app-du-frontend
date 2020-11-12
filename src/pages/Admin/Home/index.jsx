import React, { memo } from "react";

import { Row } from "antd";
import { Formik, Field } from "formik";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useState } from "react";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { actions } from "./actions";
import { SendOutlined, FileAddOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function Home() {
  const [listInput, setListInput] = useState({ sub: "", msg_1: "", email: "" });
  const [current, setCurrent] = useState(1);
  const dispatch = useDispatch();

  const renderField = useMemo(
    formik => {
      let html = [];
      let list = {};
      for (let i = 1; i <= current; i++) {
        const name = `msg_${i}`;
        html.push(
          <Field
            name={name}
            labelTitle={`Tin nhắn ${i}`}
            placeholder="Nhập tin nhắn"
            component={Input}
          />
        );
        if (i === current) {
          setListInput({ ...listInput, [name]: "" });
        }
      }
      return html;
    },
    [current]
  );

  const addInputField = () => {
    setCurrent(current + 1);
  };

  const onSubmitSendEmail = values => {
    const { email, sub } = values;
    let msg = "";
    for (const [key, value] of Object.entries(values)) {
      if (key.indexOf("msg_") !== -1 && value) {
        msg += "!__" + value;
      }
    }
    dispatch(actions.sendEmailStart({ email, sub, msg }));
  };

  const redirectHome = () => {};

  return (
    <Row>
      <Formik onSubmit={onSubmitSendEmail} initialValues={true && listInput}>
        {formik => (
          <div className="demo">
            <h2>SEND MAIL TO YOUR MY PIG</h2>
            <div className="form-group">
              <Field
                className="demo--email-label"
                name="sub"
                labelTitle="Tiêu đề"
                placeholder="Nhập tiêu đề email"
                component={Input}
              />
              <Field
                className="demo--email-label"
                name="email"
                labelTitle="Email người nhận"
                placeholder="email...@gmail.com"
                component={Input}
              />
              {renderField}
              <div className="form-group__btn-gruop btn-modal">
                <Button
                  icon={<FileAddOutlined />}
                  className="btn-outline-primary"
                  onClick={addInputField}
                  title="Viết thêm"
                />
                <Button
                  className="form-group__btn-right btn-primary"
                  type="submit"
                  title="Gửi"
                  icon={<SendOutlined />}
                  onClick={formik.handleSubmit}
                />
              </div>
            </div>
            <Link style={{ textAlign: "center", fontSize: "11px", display: "block" }} to="/">
              Quay lại trang chủ
            </Link>
          </div>
        )}
      </Formik>
    </Row>
  );
}

export default memo(Home);
