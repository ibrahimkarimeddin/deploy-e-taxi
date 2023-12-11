
import React from 'react'
import { Col, Row } from 'reactstrap';
import KarimField from '../../Components/Karimalden/KarimField';
import { FakeSelectData } from '../../Layout/app/Const';
import { useFormikContext } from 'formik';

import { DatePicker } from 'antd';

function FormCoupon() {
  const formik = useFormikContext<any>();



  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
    <Col>
      <KarimField name="number" type="number"label='number'  placeholder='placeholder' />
    </Col>
    <Col>
      <KarimField name="value" type="number" label='value' placeholder='placeholder' />
    </Col>

   
  </Row>
  )
}

export default FormCoupon


