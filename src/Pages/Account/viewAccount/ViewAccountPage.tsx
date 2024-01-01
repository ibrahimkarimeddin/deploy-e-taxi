
import React from 'react'
import DashBody from '../../../Layout/Dashboard/DashBody'
import DashHeader from '../../../Layout/Dashboard/DashHeader'
import LyTable from '../../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { useGetAccounts} from '../../../api/Account'
import { QueryStatusEnum } from '../../../config/QueryStatus'
import EditPasswordModal from '../EditAccount/EditPassword'

function ViewAccountPage() {

    const {data  ,status } = useGetAccounts()

    const [editPasswordModal, setEditPasswordModal] = React.useState(false);
    const [objectToEdit, setObjectToEdit] = React.useState(null);
  
    const columns = useTableColumns(setEditPasswordModal ,setObjectToEdit);
    
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader title={'view_accounts'} showAddButton={false}></DashHeader>

      <LyTable
        data={data}
        isLoading={false}
        columns={columns}
    />

    <EditPasswordModal
            isOpen={editPasswordModal}
            setIsOpen={setEditPasswordModal}
            objectToEdit={objectToEdit}
            setObjectToEdit={setObjectToEdit}
             />
      
    </DashBody>
  )
}

export default ViewAccountPage

