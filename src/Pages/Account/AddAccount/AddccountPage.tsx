import React, { FC, useEffect } from "react";
import { RegisterForm } from "./RegisterForm";
import { Card, CardHeader, CardBody } from "reactstrap";
import { useAddAccount } from "../../../api/Account";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const AddAccount: FC = () => {
  const {t} = useTranslation();
  const addMutation: any = useAddAccount();
  const Naviagte = useNavigate();

  useEffect(() => {
    if (addMutation.isSuccess) {
      Naviagte("/Account/View");
    }
  }, [addMutation.isSuccess]);

  return (
    <Card>
      <CardHeader>
        <h4>{t("add_account")}</h4>
      </CardHeader>
      <CardBody>
        <RegisterForm mutation={addMutation} />
      </CardBody>
    </Card>
  );
};

export default AddAccount;