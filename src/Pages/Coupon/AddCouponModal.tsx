

import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import FormCoupon from './FormCoupon'
import { useAddCode } from '../../api/Coupon'
import { getDataToSend, getInitialValues, getValidationSchema } from './formUtil'
import { QueryStatusEnum } from '../../config/QueryStatus'
import { useTranslation } from 'react-i18next'

function AddCouponModal() {


  const [t] = useTranslation()
  const {mutate , status} = useAddCode()
  const handelSubmit = (values:any )=>{

    const dataToSend = getDataToSend(values)

    mutate(dataToSend) 
    // Submit Value
  }
  return (
    <LayoutModal
    
     isAddModal={true}
     getInitialValues={getInitialValues()} 
     handleSubmit={handelSubmit} 
     status={status as QueryStatusEnum}
     headerText={t('Add') +t('code')}
     
     getValidationSchema={getValidationSchema()}>

    <FormCoupon />
  </LayoutModal>
  )
}

export default AddCouponModal

