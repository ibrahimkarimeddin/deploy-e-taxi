
import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { useGetSocialMedia} from '../../api/SocialMedia'
import { QueryStatusEnum } from '../../config/QueryStatus'
import AddSocialMediaModal from './AddSocialMediaModal'
import EditSocialMedia from './EditSocialMedia'

function SocialMediaPage() {

    const column   =useTableColumns()
    const {data  ,status } = useGetSocialMedia()
    
    
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader title={'social_media'}></DashHeader>
      
      <LyTable
        data={data?.social_media}
        isLoading={false}
        columns={column}
    />
      
    <AddSocialMediaModal />
    <EditSocialMedia/>
    </DashBody>
  )
}

export default SocialMediaPage

