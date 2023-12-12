
import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { useBlockCustomer, useGetcustomer, useGiftCustomer, useUnBlockCustomer} from '../../api/Customer'
import { QueryStatusEnum } from '../../config/QueryStatus'
import UnBlockModal from '../../Components/Utils/UnBlockModal'
import BlockModel from '../../Components/Utils/BlockModal'
import GiftModal from '../../Components/Utils/GiftModal'
import SearchField from '../../Components/Karimalden/View/SearchField'

function CustomerPage() {

    const column   =useTableColumns()
    const {data  ,status } = useGetcustomer()
    
    const UnBlockCustomer =  useUnBlockCustomer()
    const BlockCustomer =  useBlockCustomer()
    const GiftCustomer =  useGiftCustomer()


console.log(data);
    
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader title={'customer'} showAddButton={false}>
        <SearchField/>
      </DashHeader>
      
      <LyTable
        data={data?.data}
        isLoading={false}
        columns={column}
        is_pagination={true}
        total={data?.pagination?.total}
    />
    
      <UnBlockModal  
        type='customer'
        Mutation={UnBlockCustomer}     
      />
      <BlockModel  
        type='customer'
        Mutation={BlockCustomer}     
      />
      <GiftModal  
        type='customer'
        Mutation={GiftCustomer}     
      />
      
    </DashBody>
  )
}

export default CustomerPage

