import { Col, Modal, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { findNearestDrivers } from './Utils/calculateDistance'
import DataTable from 'react-data-table-component'
import { MdOutlineSendToMobile } from 'react-icons/md'

interface ModalProps {
    isOpen: boolean 
    setIsOpen :any 
    order:any 
    drivers:any
}
function SendOrderToDriverModal({isOpen , setIsOpen , drivers , order}:ModalProps) {
    const [nearestDrivers , setnearestDrivers ] = useState<any[]>([])
    const handleOk = ()=>{
        setIsOpen((v:any) =>!v)
    }
    const handleCancel = ()=>{
        setIsOpen((v:any) =>!v)

    }

    useEffect(()=>{
        // console.log("ORder" ,order);
        // console.log("Drivers" ,drivers);
        if(isOpen){
            
            setnearestDrivers(findNearestDrivers(order , drivers));
        }
        
    },[isOpen])
  return (
    <Modal title="Send Order To Nearst 5 Driver  " open={isOpen} onOk={handleOk} onCancel={handleCancel}>
        

            <DataTable

                columns={Columns}
               data={nearestDrivers}


            />
      </Modal>
  )
}

export default SendOrderToDriverModal


export const Columns = [
    {
        name: ("distance"),
        sortable: false,
        // center: "true",
        cell: (row:any) => row?.distance?.toFixed(2) + "km"
      },
      {
        name: ("name"),
        sortable: false,
        // center: "true",
        cell: (row:any) => row?.name
      },
      {
        name: ("phone"),
        sortable: false,
        // center: "true",
        cell: (row:any) => row?.phone
      },
      {
        name:"#",
        cell:()=> <MdOutlineSendToMobile/>
      }
]