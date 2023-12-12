import React from 'react'
import { Col, Row } from 'reactstrap'
import KarimField from '../../../Components/Karimalden/KarimField'

const BasicInfo = () => {
  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
      <Col>
        <KarimField name="customer_name" label='name' placeholder='customer_name' isDisabled/>
        <KarimField name="customer_phone" label='phone'  placeholder='customer_phone'isDisabled/>
        <KarimField name="customer_code" label='customer_code' placeholder='customer_code' isDisabled/>
        <KarimField  name="created_at" label='join_at' placeholder='join_at'isDisabled />
        <KarimField name="customer_city" label='customer_city' placeholder='customer_city' isDisabled/>

      </Col>
      <Col>
        <KarimField type='File' name="customer_image" placeholder='customer_image' label='customer_image' isDisabled/>
        <KarimField  name="customer_wallet" label='customer_wallet' placeholder='customer_wallet'isDisabled />
      </Col>


    </Row>
  )
}

export default BasicInfo