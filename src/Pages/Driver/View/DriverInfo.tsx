import React from 'react'
import KarimField from '../../../Components/Karimalden/KarimField'
import { Col, Row } from 'reactstrap'
const DriverInfo = () => {
  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
      <Col>
        <KarimField type='File' name="driver_image1" label='license_front_image' />

        <KarimField type='File' name="driver_image2" label='license_back' />
        <KarimField type='File' name="driver_image3" label='nationality_back' />
        <KarimField type='File' name="driver_image4" label='yearly_back' />


      </Col>
      <Col>

        <KarimField type='File' name="driver_image5" label='nationality_front' />
        <KarimField type='File' name="driver_image6" label='residential_card' />
        <KarimField type='File' name="driver_image7" label='yearly_front' />


      </Col>


    </Row>
  )
}

export default DriverInfo