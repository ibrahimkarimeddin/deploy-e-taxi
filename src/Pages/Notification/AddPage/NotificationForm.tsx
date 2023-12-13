import React, { FC, useEffect } from 'react';
import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { Field, useFormikContext } from 'formik';
import { useTranslation } from 'react-i18next';
import { ValidatedField, useImagePreview } from '../../../Components/Ui';
import KarimField from '../../../Components/Karimalden/KarimField';
import ColumnsImage from '../../../Components/Columns/ColumnsImage';

interface NotificationFormProps {}

const NotificationForm: FC<NotificationFormProps> = () => {
  // const {t} = useTranslation();
  // const { preview, handleImageChange } = useImagePreview();
  // const formik = useFormikContext();

  // useEffect(() => {
  //   document.getElementById('input')!.style.display = 'none';
  // }, []);

  // const handleSelectSend = (v: string) => {
  //   if (v === 'all') {
  //     document.getElementById('input')!.style.display = 'none';
  //   } else {
  //     formik.setFieldValue('code', '');
  //     document.getElementById('input')!.style.display = 'block';
  //   }
  // };

  return (
    <>
      {/* <Row xs={1} sm={1} md={1} lg={2} xl={2}>
        <Col>
          <ValidatedField
            name="title"
            label={t('title')}
            placeholder={t('title')}
            type="text"
          />
          <ValidatedField
            name="content"
            label={t('content')}
            placeholder={t('content')}
            type="text"
          />

          {t('type')} :
          {formik.errors?.type && (
            <span style={{ display: 'inline', marginInline: 20, color: 'red' }}>
              {formik.errors?.type}
            </span>
          )}

          <FormGroup style={{ marginInline: 20 }}>
            <span style={{ marginInline: 50 }}>
              <Field name="type" type="radio" value={'customer'} />
              {' '}
              <Label check>
                {t('customer')}
              </Label>
            </span>

            <Field type="radio" name="type" value={'driver'} />
            {' '}
            <Label check >
              {t('drivers')}
            </Label>
          </FormGroup>
          {t('send_to')} :
          {formik.errors?.send_to && (
            <span style={{ display: 'inline', marginInline: 20, color: 'red' }}>
              {formik.errors?.send_to}
            </span>
          )}

          <FormGroup onChange={(values) => handleSelectSend(values.target.value)} style={{ marginInline: 20 }}>
            <span style={{ marginInline: 50 }}>
              <Field name="send_to" type="radio" value={'all'} />
              {' '}
              <Label check>
                {t('all')}
              </Label>
            </span>

            <Field type="radio" name="send_to" value={'multi'} />
            {' '}
            <Label check>
              {t('multi')}
            </Label>
          </FormGroup>
          <span id="input"> */}
            {/* <MultiSelectSort /> */}
            {/* <KarimField/> */}
          {/* </span>

        </Col>
        <Col>
          <ValidatedField
            id="image"
            type="file"
            label={t('image')}
            name="image"
            accept="image/*"
            onChange={(e:any) => {
              handleImageChange(e);
              formik.setFieldValue('image', e.target.files[0]);
            }}
          />
          <ColumnsImage preview={preview} />

        </Col>
      </Row> */} 
    </>
  );
};

export default NotificationForm;