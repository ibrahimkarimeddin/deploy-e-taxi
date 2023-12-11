
import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import {useGetAllRoles} from '../../api/Role'
import { QueryStatusEnum } from '../../config/QueryStatus'
import AddButtonLayout from '../../Layout/Dashboard/AddButton/AddButtonLayout'
import { useNavigate } from 'react-router-dom'
function RolePage() {

    const column   =useTableColumns()
    const {data  ,status } = useGetAllRoles()
    const Navigate = useNavigate();    
    
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader showAddButton={false} title={'role'} >
        <span onClick={() => Navigate("/Account/Role/Add")}><AddButtonLayout /></span>
      </DashHeader>
      
      <LyTable
        data={data}
        isLoading={false}
        columns={column}
    />
      
    </DashBody>
  )
}

export default RolePage

