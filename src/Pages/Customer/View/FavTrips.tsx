import React from 'react'
import { Col, Row } from 'reactstrap'
import KarimField from '../../../Components/Karimalden/KarimField'
import { useGetFavTrips } from '../../../api/Customer';
import { useParams } from 'react-router-dom';
import LyTable from '../../../Layout/Dashboard/LyTable';
import useTableColumns from './useTableColumns';

const FavTrips = () => {
  const column   =useTableColumns()

  const { id } = useParams()
  const {data  ,status } = useGetFavTrips({customer_id:id});
  console.log(data);
  
  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
      
      <LyTable
        data={data}
        isLoading={false}
        columns={column}
    />

    </Row>
  )
}

export default FavTrips