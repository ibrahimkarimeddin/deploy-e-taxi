import React, { FC } from "react";
import { Form, Formik } from "formik";
import { Row, Col } from "reactstrap";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { ADMIN, Roles, SUPER_ADMIN, VENDOR} from "../../../config/RoleConfige";
import * as Yup from "yup";
import "./index.css";
import PropTypes from "prop-types";
import { getDataToSend } from "../../../api/Account";
import Select from 'react-select';
import { convet_data_to_select } from "./Utils";
import { useGetAllRoles } from "../../../api/Role";
import { useTranslation } from "react-i18next";
import { ValidatedField } from "../../../Components/Ui";
import { LoadingButton } from "../../../Components/Ui/LoadingButton";

interface RegisterFormProps {
  mutation: any;
  editMode?: boolean;
  objectToEdit?: any;
}

export const RegisterForm: FC<RegisterFormProps> = ({ mutation, editMode = false, objectToEdit = {} }) => {
  const {t} = useTranslation();
  const {data} = useGetAllRoles();

  
  const rolesOptions = convet_data_to_select(data||[]);

  const handleSubmit = (values: any) => {
    const dataToSend = getDataToSend(values, editMode, objectToEdit);
    mutation.mutate(dataToSend);
  };

  return (
    <Formik
      initialValues={getInitialValues(editMode, objectToEdit)}
      validationSchema={getValidationSchema(editMode)}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form>
          <Row lg={2} xl={2}>
            <Col>
              <ValidatedField
                name="full_name"
                label={t("full_name")}
                placeholder={t("full_name")}
                icon={PersonOutlineOutlinedIcon}
                isRequired
              />
            </Col>
            <Col>
              <p className="RoleTitle">{t("role")}</p>
              <Select 
              
              options={rolesOptions}
              value={rolesOptions.find((opt:any) => opt?.value == formik.getFieldProps('role_id').value)} className="ROleSelect"
              onChange={(e:any)=> {
                formik.setFieldValue('role_name',e.value)
                formik.setFieldValue('role_id',e.value)
              }} /> 
              <p style={{color:'red'}}>{formik.errors.role_name} </p>
            </Col>
          </Row>
          <Row xs={1} sm={1} md={2} lg={2} xl={2}>
            <Col>
              <ValidatedField
                name="email"
                label={t("email")}
                placeholder={t("email")}
                type="email"
                icon={MailOutlineIcon}
                autoComplete="new-password"
                isRequired
              />
            </Col>
            <Col>
              <ValidatedField
                name="phone"
                label={t("phone")}
                placeholder={t("phone")}
                isRequired
              />
            </Col>
            {!editMode && (
              <>
                <Col>
                  <ValidatedField
                    name="password"
                    label={t("password")}
                    placeholder={t("password")}
                    type="password"
                    autoComplete="new-password"
                    icon={LockOutlinedIcon}
                    isRequired
                  />
                </Col>
                <Col>
                  <ValidatedField
                    name="password_confirmation"
                    label={t("confirm_password")}
                    placeholder={t("confirm_password")}
                    type="password"
                    autoComplete="new-password"
                    icon={LockOutlinedIcon}
                    isRequired
                  />
                </Col>
              </>
            )}
          </Row>
          <LoadingButton
            isLoading={mutation.isLoading}
            className="mt-1 float-right"
            color="primary"
            type="submit"
          >
            {!editMode ? t("add") : t("save")}
          </LoadingButton>
        </Form>
      )}
    </Formik>
  );
};

RegisterForm.propTypes = {
  editMode: PropTypes.bool,
  objectToEdit: PropTypes.object,
};

RegisterForm.defaultProps = {
  editMode: false,
  objectToEdit: {},
};

function getInitialValues(editMode: boolean, objectToEdit: any) {
  if (editMode) {
    return {
      full_name: objectToEdit.full_name,
      email: objectToEdit.email,
      phone: objectToEdit.phone,
      role: objectToEdit.role_type,
      password: "",
      password_confirmation: "",
      role_id:objectToEdit?.roles.id
    };
  }
  return {
    full_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    phone: "",
    role_name: Roles[0],
    role_id:''
  };
}

function getValidationSchema(editMode: boolean) {
  return Yup.object().shape({
    full_name: Yup.string().required("required"),
    email: Yup.string().email("validation.invalid_email").required("required"),
    phone: Yup.string().required("required"),
    role_id:Yup.string().required("required"),
  });
}