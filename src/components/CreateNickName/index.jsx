import React from "react";
import { Formik, Field } from "formik";
import Input from "../Input";
import Button from "../Button";
import { validateLoginCommon } from "../../common";
import { useTranslation } from "react-i18next";
import Dot from "../Dot";
import { useSelector } from "react-redux";

export default function CreateNickname({ isLoadingLogin, callCreateNickname, errorLogin }) {
  const initialValues = { email: "", password: "" };

  const { t } = useTranslation();
  const onSubmitCreate = values => {
    callCreateNickname(values);
  };

  return (
    <Formik
      onSubmit={onSubmitCreate}
      validationSchema={validateLoginCommon}
      initialValues={initialValues}
    >
      {formik => (
        <div className="form__nick-name">
          <Field
            onPressEnter={formik.handleSubmit}
            name="email"
            placeholder="Your email address"
            component={Input}
          />
          <Field
            onPressEnter={formik.handleSubmit}
            type="password"
            name="password"
            placeholder="Your password"
            component={Input}
          />
          {errorLogin ? (
            <span className="required required--submit">{t(`msg.${errorLogin}`)}</span>
          ) : (
            ""
          )}
          {isLoadingLogin ? (
            <Dot />
          ) : (
            <Button onClick={formik.handleSubmit} className="btn-primary" title="CREATE" />
          )}
        </div>
      )}
    </Formik>
  );
}
