import React, { FC } from 'react';
import { Card, CardBody, Container } from 'reactstrap';
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
  const { mutate, isSuccess, percentCompleted, isLoading, isError } = useAddNotification();
  const {t} = useTranslation();
  const Navigate = useNavigate();
  const handleSubmit = (value: any) => {
    let data_to_send = {
      ...value,
      receiver_ids: value.send_to === 'all' ? 'all' : get_id_from_array(value.select),
    };
    delete data_to_send['code'];
    delete data_to_send['select'];
    delete data_to_send['send_to'];

    mutate(getDataToSend(data_to_send));
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
          <h3 style={{ textAlign: 'center', margin: '20px 0 ' }}>{t('notification_form')}</h3>
          <Formik
            onSubmit={handleSubmit}
            validationSchema={getValidationSchema}
            initialValues={getInitialValues()}
          >
            {(formik) => (
              <Form>
                <CardBody>
                  <NotificationForm />
                </CardBody>
                {/* <AuthComponent> */}
                  <ProgressBar
                    value={percentCompleted}
                    isLoading={isLoading}
                    isError={isError}
                    isSuccess={isSuccess}
                  />
                  <div className="d-flex justify-content-center align-items-center">
                    <LoadingButton type="submit" color="primary" isLoading={isLoading}>
                      {t('add')}
                    </LoadingButton>
                  </div>
                {/* </AuthComponent> */}
              </Form>
            )}
          </Formik>
        </Container>
      </Card>
    </>
  );
};

export default AddNotificationPage;