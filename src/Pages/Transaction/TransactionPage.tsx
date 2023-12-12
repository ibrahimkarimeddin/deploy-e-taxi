
import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { useGetAllTransaction } from '../../api/Transaction'
import { QueryStatusEnum } from '../../config/QueryStatus'

function TransactionPage() {

    const column   =useTableColumns()
    const {data  ,status } = useGetAllTransaction();
  // console.log(data);
  
    
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader title={'Transaction'} showAddButton={false}></DashHeader>
      
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

export default TransactionPage

