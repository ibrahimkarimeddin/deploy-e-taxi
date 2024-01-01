import React from 'react'
import { useTranslation } from 'react-i18next'
import LyTable from '../../../Layout/Dashboard/LyTable';
import { useGetDriverOrder, useGetOneDriver } from '../../../api/Driver';
import useTableColumns from './useTableColumns'
import { useParams } from 'react-router-dom';

const OrderInfo = () => {
  const {t} = useTranslation();
  const column = useTableColumns();
  const { id } = useParams()

  const {data} = useGetDriverOrder({driver_id:id});
  
  // console.log(data);
  // console.log(data?.data);

  return (
    <>
      <h1 className='modal_info'>{t("order_info")}</h1>
      <div>
        <LyTable
        data={data?.data}
        isLoading={false}
        columns={column}
        is_pagination={true}
        total={data?.pagination?.total}
        />
      </div>
    </>
  )
}

export default OrderInfo