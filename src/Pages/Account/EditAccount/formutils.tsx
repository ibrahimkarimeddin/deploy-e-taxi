import React, { FC } from "react";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { PasswordField } from "../../../Components/Ui/PasswordField/PasswordField";

interface ChangePasswordProps {
  id?: string;
  mutation?: any;
}

export const validationSchema = Yup.object().shape({
  password: Yup.string().required("_required.password"),
  c_password: Yup.string()
    .required("_required.password")
    .oneOf([Yup.ref("password")], "validation.passwords_match"),
});

export const initialValues = {
  password: "",
  c_password: "",
};

const ChangePassword: FC<ChangePasswordProps> = ({ id, mutation }) => {
  const {t} = useTranslation();

  return (
    <>
      <PasswordField
      
        name="password"
        label={t("password")}
        // placeholder="Password"
      />
      <PasswordField
        name="c_password"
        label={t("confirm_password")}
        // placeholder="Confirm Password"
      />
    </>
  );
};

export default ChangePassword;