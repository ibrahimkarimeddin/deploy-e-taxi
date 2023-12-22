
import React from 'react'
import DashBody from '../../../Layout/Dashboard/DashBody'
import DashHeader from '../../../Layout/Dashboard/DashHeader'
import LyTable from '../../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { QueryStatusEnum } from '../../../config/QueryStatus'
import { useGetFavTrips } from '../../../api/Customer'
import { useParams } from 'react-router-dom'

function FavouriteTripsPage() {

    const column   =useTableColumns()
    const { id } = useParams()
    const {data  ,status } = useGetFavTrips({customer_id:id});
    
    // console.log(data);
    
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader showAddButton={false} title={'FavouriteTrips'}></DashHeader>
      
      <LyTable
        data={data}
        isLoading={false}
        columns={column}
    />
      
    </DashBody>
  )
}

export default FavouriteTripsPage

