
import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { useBlockDriver, useGetDriver, useGiftDriver, useUnBlockDriver } from '../../api/Driver'
import { QueryStatusEnum } from '../../config/QueryStatus'
import { FaEye, FaGift, FaStopCircle, FaTrash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import SearchField from '../../Components/Karimalden/View/SearchField'
import UnBlockModal from '../../Components/Utils/UnBlockModal'
import BlockModel from '../../Components/Utils/BlockModal'
import GiftModal from '../../Components/Utils/GiftModal'
import { useTranslation } from 'react-i18next'

function DriverPage() {

  const column = useTableColumns()
  const { data, status } = useGetDriver()
  const {t} = useTranslation();

  const UnBlockDriver =  useUnBlockDriver()
  const BlockDriver =  useBlockDriver()
  const GiftDriver =  useGiftDriver()



  const navigate = useNavigate()
  const MyExpandableComponent = ({ data }: any) => {
    return (
      <pre className='d-flex align-items-center fw-bold gap-4 p-3  ms-5'>
        Actions :
        <div className=" d-flex align-items-center gap-4">

          <FaEye size={20} onClick={() => { ; navigate(`/information/driver/${data?.id}`) }} />
          <FaTrash size={20} />
          <FaStopCircle size={20} />
          <FaGift size={20} />
        </div>

      </pre>
    );
  };
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader title={('driver')} showAddButton={false}>
        <SearchField />
      </DashHeader>

      <LyTable
      
        data={data?.data}
        isLoading={false}
        columns={column}
        is_pagination={true}
        total={data?.pagination?.total}
        // expandableRows
        // expandableRowsComponent={MyExpandableComponent}

      />
      
      <UnBlockModal  
        type={t('driver')}
        Mutation={UnBlockDriver}     
      />
      <BlockModel  
        type={t('driver')}
        Mutation={BlockDriver}     
      />
      <GiftModal  
        type={t('driver')}
        Mutation={GiftDriver}     
      />
    </DashBody>
  )
}

export default DriverPage

