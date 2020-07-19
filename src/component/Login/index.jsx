import React from "react";
import { Input as InputField } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

export default function Input({
  field,
  form: { touched, errors },
  labelTitle,
  countRows,
  type,
  ...props
}) {
  const errorValidate = errors[field.name] && touched[field.name];
  const classError = errorValidate ? "error-field" : "";
  return (
    <div className="input">
      {labelTitle && <label>{labelTitle}</label>}
      {type === "password" && (
        <InputField.Password
          className={classError}
          {...field}
          {...props}
          iconRender={visible =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      )}
      {!type && <InputField className={classError} allowClear {...field} {...props} />}
      {type === "textarea" && (
        <InputField.TextArea
          className={classError}
          rows={countRows}
          allowClear
          {...field}
          {...props}
        />
      )}
      {errorValidate && (
        <span className="required">{errors[field.name]}</span>
      )}
    </div>
  );
}
