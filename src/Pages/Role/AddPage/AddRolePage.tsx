import React, { FC, useEffect } from 'react';
import { Card, Col, Row } from 'reactstrap';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useAddRole, useGetAllPermission } from '../../../api/Role';
import { FancyCheckbox } from './Checkbox';
import { useTranslation } from 'react-i18next';
import LoadingSpinner from '../../../Components/Ui/LoadingSpinner';
import { ValidatedField } from '../../../Components/Ui';
import { LoadingButton } from '../../../Components/Ui/LoadingButton';
import { useNavigate } from 'react-router-dom';

interface AddRolePageProps {}

const AddRolePage: FC<AddRolePageProps> = () => {

  const {t} = useTranslation();
  const { data, isLoading: PermissionLoading } = useGetAllPermission();
  const { mutate, isLoading, isSuccess } = useAddRole();
  const my_array: string[] = [];
  const Navigate = useNavigate();


  const handleSubmit = (values: any) => {
    // console.log(values);
    
    mutate({
      name: values.role_name,
      permission:my_array  ,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      Navigate('/Account/Role');
    }
  }, [isSuccess]);

  if (PermissionLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <h3>{t('add_role')}</h3>
      <Card style={{ minHeight: '75vh', position: 'relative', padding: 10, marginBottom: 20 }}>
        <Formik initialValues={getInitialValues()} validationSchema={getValidationSchema()} onSubmit={handleSubmit}>
          {(formik) => (
            <Form>
              <Row xl={2}>
                <Col>
                  <ValidatedField name="role_name" label={t('role_name')} placeholder={t('role_name')} isRequired />
                </Col>
              </Row>
              <Row xl={2}>
                {data &&
                  data.map((check:any) => {
                    return (
                      <Col>
                        <FancyCheckbox name={check.name}  my_array={my_array} id={check.id} />
                        {/* checked={false} */}
                      </Col>
                    );
                  })}
              </Row>
              <span style={{ marginInline: 'auto', display: 'flex', width: '100%', justifyContent: 'center' }}>
                <LoadingButton className="mt-1 float-right mx-auto" color="primary" isLoading={isLoading} type="submit">
                  {true ? t('add') : t('save')}
                </LoadingButton>
              </span>
            </Form>
          )}
        </Formik>
      </Card>
    </>
  );
};

export default AddRolePage;

function getInitialValues(editMode?: boolean, objectToEdit?: any) {
  if (editMode) {
    return {
      permissions: '',
      role_name: '',
    };
  }
  return {
    permissions: '',
    role_name: '',
  };
}

function getValidationSchema(editMode?: boolean) {
  return Yup.object().shape({
    role_name: Yup.string().required('required'),
  });
}

function convert_data_to_array_permission(array: any[]) {
  let permission: string[] = [];
  for (let index = 0; index < array.length; index++) {
    permission[index] = array[index].value;
  }
  return permission;
}