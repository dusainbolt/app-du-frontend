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
  return (
    <div className="input">
      {labelTitle && <label>{labelTitle}</label>}
      {type === "password" && (
        <InputField.Password
          {...field}
          {...props}
          iconRender={visible =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      )}
      {!type && <InputField allowClear {...field} {...props} />}
      {type === "textarea" && (
        <InputField.TextArea
          rows={countRows}
          allowClear
          {...field}
          {...props}
        />
      )}
      {errors[field.name] && touched[field.name] && (
        <span className="required">{errors[field.name]}</span>
      )}
    </div>
  );
}
