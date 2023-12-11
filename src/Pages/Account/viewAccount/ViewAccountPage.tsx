
import React from 'react'
import DashBody from '../../../Layout/Dashboard/DashBody'
import DashHeader from '../../../Layout/Dashboard/DashHeader'
import LyTable from '../../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { useGetAccounts} from '../../../api/Account'
import { QueryStatusEnum } from '../../../config/QueryStatus'

function ViewAccountPage() {

    const column   =useTableColumns()
    const {data  ,status } = useGetAccounts()

    
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader title={'view_accounts'} showAddButton={false}></DashHeader>
      
      <LyTable
        data={data}
        isLoading={false}
        columns={column}
    />
      
    </DashBody>
  )
}

export default ViewAccountPage

