
import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { useGetAllCodeWithOutPaginitions, useGetCode} from '../../api/Coupon'
import { QueryStatusEnum } from '../../config/QueryStatus'
import AddCouponModal from './AddCouponModal'
import { Button } from 'reactstrap'
import { useTranslation } from 'react-i18next'
// import * as XLSX from 'ts-xlsx';
import { ChangeDataToPrint } from './formUtil'

function CouponPage() {

    const column   =useTableColumns()
    const {data  ,status } = useGetCode()

    const {t} = useTranslation();


  

  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader title={'code'}>
      </DashHeader>
      
      <LyTable
        data={data?.data}
        isLoading={false}
        columns={column}
        is_pagination={true}
        total={data?.pagination?.total}
    />
      
    <AddCouponModal />
    </DashBody>
  )
}

export default CouponPage

