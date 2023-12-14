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
import KarimField from "../../../Components/Karimalden/KarimField";

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
    values['role_name'] = rolesOptions.find(e => e.value == values['role_id'])?.label
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
              <KarimField
                name="full_name"
                label="full_name"
                placeholder="full_name"
                type="text"
              />
            </Col>
            <Col>
              <KarimField 
              type="Select"
              option={rolesOptions}
              label="role"
              placeholder="Select Role"
              name="role_id"
               /> 
              <p style={{color:'red'}}>{formik.errors.role_name} </p>
            </Col>
          </Row>
          <Row xs={1} sm={1} md={2} lg={2} xl={2}>
            <Col>
              <KarimField
                name="email"
                label="email"
                placeholder="email"
                type="text"
              />
            </Col>
            <Col>
              <KarimField
                name="phone"
                label="phone"
                placeholder="phone"
                type="number"
              />
            </Col>
            {!editMode && (
              <>
                <Col>
                  <KarimField
                    name="password"
                    label="password"
                    placeholder="password"
                    type="password"
                  />
                </Col>
                <Col>
                  <KarimField
                    name="password_confirmation"
                    label="confirm_password"
                    placeholder="confirm_password"
                    type="password"
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
    role_name: "",
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