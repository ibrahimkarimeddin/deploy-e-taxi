
import React from 'react'
import { Col, Row } from 'reactstrap';
import KarimField from '../../../Components/Karimalden/KarimField';
import { FakeSelectData } from '../../../Layout/app/Const';
import { useFormikContext } from 'formik';

import { DatePicker } from 'antd';

function FormViewAccount() {
  const formik = useFormikContext<any>();



  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
    <Col>
    <KarimField name="name" type="text"label='name'  placeholder='placeholder' />
 
    
    </Col>
    <Col>
   <KarimField name="date" type="Date" label='date' placeholder='placeholder' />
 
    </Col>

   
  </Row>
  )
}

export default FormViewAccount


