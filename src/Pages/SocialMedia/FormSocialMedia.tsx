
import React from 'react'
import { Col, Row } from 'reactstrap';
import KarimField from '../../Components/Karimalden/KarimField';
import { FakeSelectData } from '../../Layout/app/Const';
import { useFormikContext } from 'formik';

import { DatePicker } from 'antd';

function FormSocialMedia() {
  const formik = useFormikContext<any>();



  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
    <Col>
    <KarimField name="social_media_link" type="text"label='social_media_link'  placeholder='placeholder' />
      
    </Col>
    <Col>
    <KarimField name="social_media_image"  type="File" label='image' placeholder='placeholder'  />
    {/* <KarimField name="is_active"  type="Checkbox" label='is_active' placeholder='placeholder' Group /> */}

    </Col>

   
  </Row>
  )
}

export default FormSocialMedia


