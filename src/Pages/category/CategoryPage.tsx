
import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { useGetCategory} from '../../api/category'
import { QueryStatusEnum } from '../../config/QueryStatus'
import EditCategoryModal from './EditCategoryModal'
import AddCategoryModal from './AddCategoryModal'

function CategoryPage() {

    const column   =useTableColumns()
    const {data  ,status , } = useGetCategory()

      // console.log(data);
    
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader title={'category'}></DashHeader>

   
      <LyTable
        data={data?.categories}
        isLoading={false}
        columns={column}
    />
      
    <EditCategoryModal />
    <AddCategoryModal />
    </DashBody>
  )
}

export default CategoryPage

