
import React from 'react'
import { Col, Row } from 'reactstrap';
import KarimField from '../../Components/Karimalden/KarimField';
import { FakeSelectData } from '../../Layout/app/Const';
import { useFormikContext } from 'formik';

import { DatePicker } from 'antd';
import { useTranslation } from 'react-i18next';
import { ImagePreview, ValidatedField, useImagePreview } from '../../Components/Ui';
import FileInput from '../../Components/Ui/FileInput';
import { InitialValues } from './formUtil';
import { BaseURL } from '../../api/config';

function FormCategory() {
  const formik = useFormikContext<InitialValues>();
  const [t] = useTranslation()
  // console.log(BaseURL+formik.getFieldProps('category_image')?.value);
  
  const {handleImageChange , preview} = useImagePreview(BaseURL+ formik.getFieldProps('category_image')?.value)

  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
    <Col>
      <KarimField
            dir='ltr'
        name="translated_fields[1][category_name]"
        type='text'
        label={`${t("category_name")} (${t("en")})`}
        placeholder={`${t("category_name")} (${t("en")})`}
      />
      <KarimField
        type='text'
      dir='rtl'
        name="translated_fields[2][category_name]"
        label={`${t("category_name")} (${t("ar")})`}
        placeholder={`${t("category_name")} (${t("ar")})`}
      />
      <KarimField
        name="category_sort"
        label={t("sort")}
        placeholder={t("sort")}
        type="number"
      />  <KarimField
      name="special_delivery_fee"
      label={t("delivery_fee")}
      placeholder={t("delivery_fee")}
      type="number"
    />
    </Col>
    <Col>
      <FileInput
        label={t("category_image")}
        name="category_image"
        accept="image/*"
        onChange={(e:any) => {
          handleImageChange(e);
          formik.setFieldValue("category_image", e.target.files[0]);
        }}
      />
      <ImagePreview preview={preview} />
    </Col>
  </Row>
  )
}

export default FormCategory


