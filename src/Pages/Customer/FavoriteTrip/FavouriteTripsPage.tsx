
import React from 'react'
import DashBody from '../../../Layout/Dashboard/DashBody'
import DashHeader from '../../../Layout/Dashboard/DashHeader'
import LyTable from '../../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { QueryStatusEnum } from '../../../config/QueryStatus'
import { useGetFavTrips } from '../../../api/Customer'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function FavouriteTripsPage() {

    const column   =useTableColumns()
    const { id } = useParams()
    const {t} = useTranslation();

    const {data} = useGetFavTrips({customer_id:id});

    // console.log(data);
    // console.log(data?.data);

  return (
    <div>
      <h1>{t("FavouriteTrips")}</h1>

        <LyTable
          data={data?.data}
          isLoading={false}
          columns={column}
          is_pagination={true}
          total={data?.pagination?.total}
      />

    </div>
  )
}

export default FavouriteTripsPage

