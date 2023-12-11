
import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { useGetOrders} from '../../api/order'
import { QueryStatusEnum } from '../../config/QueryStatus'
import SearchField from '../../Components/Karimalden/View/SearchField'

function OrderPage() {

    const column = useTableColumns();
    const {data  , status } = useGetOrders();

  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader showAddButton={false} title={'Order'}>
        <SearchField/>
      </DashHeader>
      
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

export default OrderPage

