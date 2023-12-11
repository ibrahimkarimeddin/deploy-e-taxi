
import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { useGetAppSetting} from '../../api/appSetting'
import { QueryStatusEnum } from '../../config/QueryStatus'
import EditAppSettingModal from './EditAppSettingModal'

function AppSettingPage() {

    const column   =useTableColumns()
    const {data  ,status } = useGetAppSetting()    
    
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader showAddButton={false} title={'app_setting'}></DashHeader>
      
      <LyTable
        data={data}
        isLoading={false}
        columns={column}
    />
      
    <EditAppSettingModal />
    </DashBody>
  )
}

export default AppSettingPage

