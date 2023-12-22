import React, { useEffect, useState } from 'react'
import { getInitialValues, getValidationSchema, getDataToSend } from '../formUtil'
import { Tab, TabList, TabPanel as TabBody, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import { MdLanguage } from 'react-icons/md'
import { FaSadCry } from 'react-icons/fa'
import ViewPage from '../../../Layout/Dashboard/ViewPage';
import { Rate } from 'antd';
import BasicInfo from './BasicInfo';
import { usePageState } from '../../../lib/state mangment/LayoutPagestate';
import { useParams } from 'react-router-dom';
import LoadingPage from '../../../Layout/app/LoadingPage';
import { useTranslation } from 'react-i18next';
import { useGetFavTrips, useGetSingleCustomer } from '../../../api/Customer';
import FavTrips from './FavTrips';

const ViewCustomer = () => {
  const [BarStatus, setBarStatus] = useState({ value: 0, isLoading: false, isError: false, isSuccess: false })
  const handleSubmit = (values: any) => {

  }
  const { setObjectToEdit, objectToEdit } = usePageState()
  const {t} = useTranslation();
  const { id } = useParams()
  const { data } = useGetSingleCustomer({customer_id:id})
  // const {data  ,status } = useGetFavTrips({customer_id:id});

  useEffect(() => {

    setObjectToEdit(data);

  }, [data]);


  const ViewProps = { getInitialValues, getValidationSchema, getDataToSend, handleSubmit, BarStatus };


  return (
    <div className='ViewPage'>
      {objectToEdit && data ?
        <ViewPage {...ViewProps} showProgressBar={false}>
          <Rate defaultValue={4} disabled className='ms-2 fs-2 translate-middle-y' />
          <Tabs>
            <TabList>
              <Tab><div className='d-flex'><MdLanguage size={20} /> <h6>{t("BasicInfo")}</h6></div></Tab>
              <Tab><div className='d-flex'><MdLanguage size={20} /> <h6>{t("fav_trips")}</h6></div></Tab>
            </TabList>
            <TabBody >
              <div className=" mt-4"><BasicInfo /></div>
            </TabBody>
            <TabBody >
              <div className=" mt-4"><FavTrips /></div>
            </TabBody>
          </Tabs>
        </ViewPage>
        : <LoadingPage />}


    </div>
  )

}

export default ViewCustomer