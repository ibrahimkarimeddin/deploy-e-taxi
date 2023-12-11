
import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { useGetDriverRate} from '../../api/DriverOrderRate'
import { QueryStatusEnum } from '../../config/QueryStatus'

function DriverOrderRatePage() {

    const column   =useTableColumns()
    const {data  ,status } = useGetDriverRate()

    // console.log(data);
    
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader title={'driver_rate'} showAddButton={false}></DashHeader>
      
      <LyTable
        data={data?.data}
        isLoading={false}
        columns={column}
        is_pagination={true}
        total={data?.pagination?.total}
    />
      
    </DashBody>
  )
}

export default DriverOrderRatePage

