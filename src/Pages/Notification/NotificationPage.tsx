
import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import {useGetNotifications} from '../../api/Notification'
import { QueryStatusEnum } from '../../config/QueryStatus'
import AddButtonLayout from '../../Layout/Dashboard/AddButton/AddButtonLayout'
import { useNavigate } from 'react-router-dom'

function NotificationPage() {

    const column   =useTableColumns()
    const {data  ,status } = useGetNotifications();
    const Navigate = useNavigate();
    
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader showAddButton={false} title={'notification'}>
      <span onClick={() => Navigate("/Notification/Add")}><AddButtonLayout /></span>

      </DashHeader>
      
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

