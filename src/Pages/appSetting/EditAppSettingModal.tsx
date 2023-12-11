
import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import FormAppSetting from './FormAppSetting'
import { InitialValues, getInitialValues, getValidationSchema } from './formUtil'
import { usePageState } from '../../lib/state mangment/LayoutPagestate'                                                                                                                               
import { QueryStatusEnum } from '../../config/QueryStatus'
import { useUpdateAppSetting } from '../../api/appSetting'

function EditAppSettingModal() {
  const {objectToEdit} = usePageState()
  const {status , mutate } = useUpdateAppSetting();
  const handleEditSubmit = (values:InitialValues) => {
    console.log(values);
    mutate({
      key:values.key,
      value:values.value,
      setting_id:objectToEdit.id,
      title:values.name,
      is_percentage:values?.is_percentage
    })
  }
  return (
    <LayoutModal 
     isAddModal={false}
     getInitialValues={getInitialValues(objectToEdit)} 
     handleSubmit={handleEditSubmit}
     status={status as QueryStatusEnum}
     headerText='Edit Modal' 
     getValidationSchema={getValidationSchema(objectToEdit)}>
      <FormAppSetting />
    </LayoutModal>
  )
}

export default EditAppSettingModal
