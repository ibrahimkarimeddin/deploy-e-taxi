import React, { FC, useEffect } from 'react';
import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { Field, useFormikContext } from 'formik';
import { useTranslation } from 'react-i18next';
import { ValidatedField, useImagePreview } from '../../../Components/Ui';
import KarimField from '../../../Components/Karimalden/KarimField';
import ColumnsImage from '../../../Components/Columns/ColumnsImage';

interface NotificationFormProps {}

const NotificationForm: FC<NotificationFormProps> = () => {
  const {t} = useTranslation();
  const formik = useFormikContext();

  const handleSelectSend = (v: string) => {
    if (v === 'all') {
    } else {
      formik.setFieldValue('code', '');
    }
  };  
  return (
    <>
      <Row xs={1} sm={1} md={1} lg={2} xl={2}>
        <Col>
          <KarimField
            name="title"
            label={t('title')}
            placeholder={t('title')}
            type="text"
          />
          <KarimField
            name="content"
            label={t('content')}
            placeholder={t('content')}
            type="text"
          />
            <KarimField
            name="type"
            label={t('type')}
            placeholder={t('type')}
            type="Select"
            option={[
              {label:t("driver") , value:"driver"} ,
              {label:t("customer") , value:"customer"} 
            ]}
          />

          <FormGroup onChange={(values:any) => handleSelectSend('fef')} style={{ marginInline: 20 }}>
            <span style={{ marginInline: 50 }}>
              <Field name="send_to" type="radio" value={'all'} />
              {' '}
              <Label className='dark_mode_white_color' check>
                {t('all')}
              </Label>
            </span>

            <Field type="radio" name="send_to" value={'one'} />
            {' '}
            <Label className='dark_mode_white_color' check>
              {t('one')}
            </Label>
          </FormGroup>
         {
          formik.getFieldProps('send_to').value  == 'one' && (
            <KarimField
            name="phone"
            label={t('phone')}
            placeholder={t('phone')}
            type="number"
          />
          )
         }
            
        </Col>
        <Col>
          <KarimField
            
            type="File"
            label={t('image')}
            name="image"
          />
        </Col>
      </Row>  
    </>
  );
};

export default NotificationForm;