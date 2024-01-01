import React, { useState } from 'react'
import { useGetDriverInfoForSystemTrack } from '../../api/Driver'
import ImageDriverPreview from './ImageDriverPreview'
import { BaseURL } from '../../api/config'
import { TbPointFilled } from "react-icons/tb";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { Rate } from 'antd';
import { useTranslation } from 'react-i18next';



    interface DriverinfoProps  {
            driver_id: number | null  
    }


    const DriverInformation = ({driver_id}:DriverinfoProps) => {

      console.log(driver_id , !!driver_id);
        const {t} = useTranslation();
        const {data  , isLoading , isError}=  useGetDriverInfoForSystemTrack({driver_id}, {
          enabled:!!driver_id 
        })
        
      return (
        <div className='driverInfo_socket_container'>

          <div className='image_container' >
            <ImageDriverPreview src={BaseURL + data?.driver.avatar} className="driver_track_image"/>
            
          </div>

          
              <div className='info_container'>
                <h4>{t("Driver Info")}</h4>
                <span className='main_info_cont'><TbPointFilled className='icon_info'/><span className='driver_info'>{t("driver_name")}: <span className='driver_respons'>{data?.driver?.full_name}</span></span></span>
                <span className='main_info_cont'><TbPointFilled className='icon_info'/><span className='driver_info'>{t("gender")}:<span className='driver_respons'>{data?.driver?.gender}</span></span></span>
                <span className='main_info_cont'><TbPointFilled className='icon_info'/><span className='driver_info'>{t("phone")}: <span className='driver_respons'>{data?.driver?.phone}</span></span></span>
                <span className='main_info_cont'><TbPointFilled className='icon_info'/><span className='driver_info'>{t("driver order today")}:<span className='driver_respons'>{data?.driver_order_today}</span></span></span>
                <span className='main_info_cont'><TbPointFilled className='icon_info'/><span className='driver_info'>{t("driver order yesterday")}: <span className='driver_respons'>{data?.driver_order_yesterday}</span></span></span>
              </div>
          {
            data?.order
            ?
              <div className='info_container'>
                <h4>{t("Customer Info")}</h4>
                <span className='main_info_cont'><TbPointFilled className='icon_info'/><span className='driver_info'>{t("customer_name")}: <span className='driver_respons'>{data?.order?.full_name}</span></span></span>
                <span className='main_info_cont'><TbPointFilled className='icon_info'/><span className='driver_info'>{t("from")}:<span className='driver_respons'>{data?.order?.place_from}</span></span></span>
                <span className='main_info_cont'><TbPointFilled className='icon_info'/><span className='driver_info'>{t("to")}: <span className='driver_respons'>{data?.order?.place_to}</span></span></span>
                <span className='main_info_cont'><TbPointFilled className='icon_info'/><span className='driver_info'>{t("distance")}: <span className='driver_respons'>{data?.order?.distance}</span></span></span>
                <span className='main_info_cont'><TbPointFilled className='icon_info'/><span className='driver_info'>{t("payment_method")}: <span className='driver_respons'>{data?.order?.payment_method}</span></span></span>
                <span className='main_info_cont'><TbPointFilled className='icon_info'/><span className='driver_info'>{t("rate")}: <span className='driver_respons'><Rate defaultValue={data?.order?.rate} disabled /></span></span></span>

              </div>
            : <div className='main_info_cont'></div>
          }
              

              <div className='phone_container'><MdOutlinePhoneAndroid className='icon_info'/><span className='driver_respons'>{data?.driver?.phone}</span></div>
              


        </div>
      )
    }
    
    export default DriverInformation

    export interface fakedata {
      driver_name:string,
    }
