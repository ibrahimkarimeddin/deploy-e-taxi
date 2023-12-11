
import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import FormCategory from './FormCategory'
import { getInitialValues, getValidationSchema } from './formUtil'
import { usePageState } from '../../lib/state mangment/LayoutPagestate'

function EditCategoryModal() {
  const {objectToEdit} = usePageState()
  return (
    <LayoutModal 
     isAddModal={false}
     getInitialValues={getInitialValues(objectToEdit)} 
     handleSubmit={() => { }}
     headerText='Edit Modal' 
     getValidationSchema={getValidationSchema(objectToEdit)}>
      <FormCategory />
    </LayoutModal>
  )
}

export default EditCategoryModal
