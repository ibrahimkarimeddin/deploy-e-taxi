import React from 'react'
import { Col, Row } from 'reactstrap'
import KarimField from '../../../Components/Karimalden/KarimField'

const BasicInfo = () => {
  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
      <Col>
        <KarimField name="full_name" label='name' placeholder='full_name' />
        <KarimField name="code" label='driver_code'  placeholder='Driver Code'/>
        <KarimField name="birthday" label='driver_birthday' placeholder='Driver Birithday' />
        <KarimField name="phone" label='phone' placeholder='phone' />
        <KarimField name="gender" label='gender' placeholder='gender' />

      </Col>
      <Col>
        <KarimField type='File' name="avatar" placeholder='Driver Image' label='driver_image' />
        <KarimField name="wallet" isDisabled />
        <KarimField  name="created_at" label='join_at' placeholder='Join at'isDisabled />
        <KarimField name="city"  isDisabled/>

      </Col>


    </Row>
  )
}

export default BasicInfo