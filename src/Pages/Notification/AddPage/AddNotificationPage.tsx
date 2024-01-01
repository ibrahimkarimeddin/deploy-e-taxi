import React, { FC } from 'react';
import { Button, Card, CardBody, CardHeader, Container } from 'reactstrap';
import { Form, Formik } from 'formik';

import { useAddNotification } from '../../../api/Notification';
import { getDataToSend, getInitialValues, getValidationSchema, get_id_from_array } from './formutils';
import NotificationForm from './NotificationForm';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '../../../Components/Ui/LoadingButton';
import ProgressBar from '../../../Components/Ui/ProgressBar';
import { useNavigate } from 'react-router-dom';

interface AddNotificationPageProps {}

const AddNotificationPage: FC<AddNotificationPageProps> = () => {
  const { mutate, isSuccess, value, isLoading, isError } = useAddNotification();
  const {t} = useTranslation();
  const Navigate = useNavigate();

  const handleSubmit = (value: any) => {

    console.log(value);

    const data  = {
      ...value,
      type:typeof  value['type'] == "string" ?   value['type']: value['type']['label']
    }
    mutate(getDataToSend(data));
  };

  React.useEffect(() => {
    if (isSuccess) {
        Navigate('/Notification');
    }
  }, [isSuccess]);

  return (
    <>
      <h3 style={{ padding: 5 }}>{t('add_notification')}</h3>
      <Card>
        <Container style={{ marginBottom: 160 }}>
          <CardHeader style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <h3 className='dark_mode_white_color'>{t('notification_form')}</h3>
            <Button onClick={() => Navigate('/Notification')} color="primary">
                {t('back')}
            </Button>
          </CardHeader>
          <Formik
            onSubmit={handleSubmit}
            validationSchema={getValidationSchema}
            initialValues={getInitialValues(t)}
          >
            {(formik) => (
              <Form>
                <CardBody>
                  <NotificationForm />
                </CardBody>
                  <ProgressBar
                    value={value}
                    isLoading={isLoading}
                    isError={isError}
                    isSuccess={isSuccess}
                  />
                  <div className="d-flex justify-content-center align-items-center">
                    <LoadingButton type="submit" color="primary" isLoading={isLoading}>
                      {t('add')}
                    </LoadingButton>
                  </div>
              </Form>
            )}
          </Formik>
        </Container>
      </Card>
    </>
  );
};

export default AddNotificationPage;