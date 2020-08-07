import { Formik } from "formik";
import * as Yup from "yup";
import { getI18n } from "react-i18next";

export const fieldChangePassword = {
  PASSWORD: "password",
  PASSWORD_NEW: "passwordNew",
  PASSWORD_CONFIRM: "passwordConfirm",
};

export const validateFormChangePassword = Yup.object({
  [fieldChangePassword.PASSWORD]: Yup.string()
    .required(getI18n().t("Vui lòng nhập mật khẩu cũ"))
    .max(255, "Vui lòng nhập dưới 255 ký tự"),
  [fieldChangePassword.PASSWORD_NEW]: Yup.string()
    .required("Vui lòng nhập mật khẩu mới")
    .min(6, "Vui lòng nhập ít nhất 6 ký tự")
    .notOneOf([Yup.ref("password"), null], "Mật khẩu mới không được trùng")
    .max(27, "Vui lòng nhập dưới 27 ký tự"),
  [fieldChangePassword.PASSWORD_CONFIRM]: Yup.string()
    .required("Vui lòng nhập lại mật khẩu mới")
    .oneOf([Yup.ref("passwordNew"), null], "Mật khẩu xác nhận không trùng khớp")
    .min(6, "Vui lòng nhập ít nhất 6 ký tự")
    .max(27, "Vui lòng nhập dưới 27 ký tự"),
});
