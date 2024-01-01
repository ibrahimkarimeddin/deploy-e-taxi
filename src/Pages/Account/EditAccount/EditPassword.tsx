import React, { FC, useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { Formik, Form } from "formik";
// import ChangePassword, {
//   initialValues,
//   validationSchema,
// } from "components/forms/ChangePassword";
import { useTranslation } from "react-i18next";
import { LoadingButton } from "../../../Components/Ui/LoadingButton";
import { useChangePassword } from "../../../api/Account";
import ChangePassword, { initialValues, validationSchema } from "./formutils";

interface EditPasswordModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  objectToEdit: any;
  setObjectToEdit: (objectToEdit: any) => void;
}

const EditPasswordModal: FC<EditPasswordModalProps> = ({
  isOpen,
  setIsOpen,
  objectToEdit,
  setObjectToEdit,
}) => {
  const {t} = useTranslation();
  const updateMutation = useChangePassword();

  const handleSubmit = (values: any) => {
    updateMutation.mutate({ ...values, account_id: objectToEdit.id , password_confirmation:values.c_password });
  };

  useEffect(() => {
    if (updateMutation.isSuccess) {
      setIsOpen(false);
    }
  }, [updateMutation.isSuccess, setIsOpen]);

  return (
    <Modal centered isOpen={isOpen} size="md">
      <ModalHeader className="change_password_header">{t("change_password")}</ModalHeader>
      {objectToEdit && (
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {(formik) => (
            <Form>
              <ModalBody>
                <div>
                  <h6 className="change_password_body">{objectToEdit?.full_name}</h6>
                </div>
                <ChangePassword />
              </ModalBody>
              <ModalFooter>
                <Button
                  disabled={updateMutation.isLoading}
                  onClick={() => setIsOpen(false)}
                  color="danger"
                >
                  {t("cancel")}
                </Button>
                <LoadingButton
                  type="submit"
                  color="primary"
                  isLoading={updateMutation.isLoading}
                >
                  {t("save")}
                </LoadingButton>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      )}
    </Modal>
  );
};

export default EditPasswordModal;