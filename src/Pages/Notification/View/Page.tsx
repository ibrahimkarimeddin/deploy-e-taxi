import React, { useState } from 'react'
import {getInitialValues, getValidationSchema, getDataToSend} from '../formUtil'
import { Tab, TabList, TabPanel as TabBody, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import { MdLanguage } from 'react-icons/md'
import { FaSadCry } from 'react-icons/fa'
import ViewPage from '../../../Layout/Dashboard/ViewPage';
import NotificationView from './NotificationView';
import { useAddNotification } from '../../../api/Notification';

const ViewUser = () => {

  const mutation  = useAddNotification()
  const handleSubmit = (values:any)=>{
    
   
  }
 const data :any = []
  const ViewProps = {getInitialValues, getValidationSchema, getDataToSend,handleSubmit , BarStatus:mutation};
  return (
  <div className='ViewPage'>
    <ViewPage {...ViewProps}>
    <Tabs>
      <TabList>
      
      <Tab><div className='d-flex'><FaSadCry size={20} /> <h6>{("Edit_user")}</h6></div></Tab>
      </TabList>
       <TabBody >
       <div className=" mt-4"><NotificationView/></div>
        </TabBody>
       
    </Tabs>
    </ViewPage>
   
  </div>
  )

}

export default ViewUser