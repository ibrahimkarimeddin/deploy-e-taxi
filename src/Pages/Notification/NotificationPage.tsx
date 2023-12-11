
import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import {useGetNotifications} from '../../api/Notification'
import { QueryStatusEnum } from '../../config/QueryStatus'

function NotificationPage() {

    const column   =useTableColumns()
    const {data  ,status } = useGetNotifications();

    
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader showAddButton={false} title={'notification'}></DashHeader>
      
      <LyTable
        data={data?.data}
        isLoading={false}
        is_pagination={true}
        total={data?.pagination?.total}
        columns={column}
    />

    </DashBody>
  )
}

export default NotificationPage

