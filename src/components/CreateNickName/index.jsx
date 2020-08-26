import React from "react";
import { Formik, Field } from "formik";
import Input from "../Input";
import Button from "../Button";
import { validateFormCreateNickName } from "../../common";
import { useState } from "react";

export default function CreateNickname({ callCreateNickname }) {
  const initialValues = { userName: "", userEmail: "" };
  const [userId, setUserId] = useState(0);
  const onSubmitCreate = values => {
    let id = userId;
    if(!userId){
      id = getRandomInt(999999);
      setUserId(id);
    }
    callCreateNickname({ ...values, userId: id });
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  return (
    <Formik
      onSubmit={onSubmitCreate}
      validationSchema={validateFormCreateNickName}
      initialValues={initialValues}
    >
      {formik => (
        <div className="form__nick-name">
          <Field
            onPressEnter={formik.handleSubmit}
            name="userEmail"
            placeholder="Your email address"
            component={Input}
          />
          <Field
            onPressEnter={formik.handleSubmit}
            name="userName"
            placeholder="Your nickname"
            component={Input}
          />
          <Button onClick={formik.handleSubmit} className="btn-primary" title="CREATE" />
        </div>
      )}
    </Formik>
  );
}
