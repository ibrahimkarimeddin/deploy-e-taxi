import React, { FC, useEffect } from "react";
import { RegisterForm } from "../AddAccount/RegisterForm";
import { Card, CardHeader, CardBody } from "reactstrap";
import { useUpdateAccount } from "../../../api/Account";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

interface EditAccountProps {
  location: {
    state: any;
  };
}

const EditAccount: FC<EditAccountProps> = () => {
  const {t} = useTranslation();
  const location  = useLocation()
  const objectToEdit = location?.state;
  console.log(objectToEdit);
  
  const updateMutation = useUpdateAccount();
  const Navigate = useNavigate();

  useEffect(() => {
    if (updateMutation.isSuccess) {
      Navigate("/Account/View");
    }
  }, [updateMutation.isSuccess]);

  return (
    <Card>
      <CardHeader>
        <h4 className="add_account_title">{t("edit_account")}</h4>
      </CardHeader>
      <CardBody>
        <RegisterForm
          mutation={updateMutation}
          editMode={true}
          objectToEdit={objectToEdit}
        />
      </CardBody>
    </Card>
  );
};

export default EditAccount;