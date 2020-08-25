import React from "react";
import Lazyload from "../LazyLoadingImg";
import { Formik, Field } from "formik";
import Input from "../Input";
import { SendOutlined } from "@ant-design/icons";
export default function ChatBox({ data, callMessage }) {
  const initialVales = { message: "" };

  const onPress = (values, { resetForm }) => {
    callMessage(values);
    resetForm();
  };

  console.log(data);

  return (
    <div className="chat--container">
      <div className="chat--container--box">
        <div className="chat--content">
          <Lazyload
            className="chat--content__img"
            src={"https://www.w3schools.com/howto/img_avatar.png"}
            alt="image"
          />
          <div>
            sdsdsd
            <p>ssssssssssssssssssssssssssssssssssssssssssssss</p>
          </div>
        </div>
        <div className="chat--content right">
          <p>ssssssssssssssssssssssssssssssssssssssssssssss</p>
          <Lazyload
            src={"https://www.w3schools.com/howto/img_avatar.png"}
            className="chat--content__img"
          />
        </div>
      </div>
      <Formik onSubmit={onPress} initialValues={initialVales}>
        {formik => (
          <div className="chat--container__bottom">
            <Lazyload
              className="chat--container__bottom--img"
              src={"https://www.w3schools.com/howto/img_avatar.png"}
              alt="image"
            />
            <Field
              name="message"
              component={Input}
              maxLength={255}
              placeholder={"Enter message..."}
              autoSize={true}
              onPressEnter={formik.handleSubmit}
              Icon={SendOutlined}
              callHandleIcon={formik.handleSubmit}
              type="textarea"
            />
          </div>
        )}
      </Formik>
    </div>
  );
}
