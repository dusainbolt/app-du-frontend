import React from "react";
import { Formik, Field } from "formik";
import Input from "../Input";
import Button from "../Button";
import { validateFormCreateNickName } from "../../common";

export default function CreateNickname({ callCreateNickname }) {
  const initialValues = { nickName: "", email: "" };

  const onSubmitCreate = values => {
    callCreateNickname(values);
  };

  return (
    <Formik onSubmit={onSubmitCreate} validationSchema={validateFormCreateNickName} initialValues={initialValues}>
      {formik => (
        <div className="form__nick-name">
          <Field name="email" placeholder="Your email address" component={Input}/>
          <Field name="nickName" placeholder="Your nickname" component={Input}/>
          <Button onClick={formik.handleSubmit} className="btn-primary" title="CREATE"/>
        </div>
      )}
    </Formik>
  );
}
