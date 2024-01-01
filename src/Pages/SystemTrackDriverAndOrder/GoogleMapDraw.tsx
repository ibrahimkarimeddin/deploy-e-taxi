import { DirectionsRenderer, GoogleMap, Marker, Polyline } from '@react-google-maps/api'
import { Button, Popover } from 'antd'
import React, { useEffect, useState } from 'react'
import WithDrawer from '../../Hooks/WithDrawer'
import DriverInformation from './DriverInformation'
import CarImage from './CarImage'
import { io } from 'socket.io-client'
import { disconnectSocket, getScoket } from '../../lib/SocketProvider'
import { SocketEventLisntEnum } from '../../enums/SocketEventEnum'
import { SocketDashboardDebugDataEvent } from '../../types/SocketEvent'
import SendOrderToDriverModal from './SendOrderToDriverModal'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'

const GoogleMapDraw = ({ drivers }: { drivers: any[] }) => {


  const [Open, setOpen] = useState(false)
  const [driverId, setDriverId] = useState<number | null>(null)

  const [isOrderModalOpen, setisOrderModalOpen] = useState(false)
  const [OrderObject, setOrderObject] = useState<any>(null)
  const [Drivers, setDrivers] = useState<any>(drivers)
  const [Orders, setOrders] = useState<any>([])
  const {t} = useTranslation();


  useEffect(() => {

    const socket = getScoket()


    socket?.on(SocketEventLisntEnum.SOCKET_NEW_USER, function (data:any) {
      console.log(data);
      const {id, lat , long , full_name  , phone , coutry_code} = data
      
      setDrivers((prevDrivers: any) => [
        ...prevDrivers,
        {
          id: id,
          lat: lat,
          long: long,
          name: full_name,
          phone: phone
        }
       ]);

    })

    socket?.on(SocketEventLisntEnum.SOCKET_UPDATE_USER, function (data:any) {
      console.log(data);
      const {driver_id , lat , long } = data      
      setDrivers((prevDrivers:any) =>
        prevDrivers.map((driver:any) =>
          driver.id === driver_id
            ? { ...driver, lat: lat, lng: long }
            : driver
        )
      );
    })

    socket?.on(SocketEventLisntEnum.SOCKET_REMOVE_USER, function (data: any) {
      
      setDrivers((prevDrivers: any) =>
        prevDrivers.filter((driver: any) => driver.id !== data?.data)
      );
    })
    

    socket?.on(SocketEventLisntEnum.SOCKET_NEW_ORDER, function (data:any) {
      console.log(data);
      setOrders((prev:any)=>([data , ...prev]))
      
    })

    socket?.on(SocketEventLisntEnum.SOCKET_ACCEPTE_ORDER, function (data:any) {
      console.log(data?.driver_id);

      const { lat_from , long_from  , id } = data?.data      
      toast.success(`${t("driver")} ${data['driver_id']} ${t("Has Accepte the Order")} ${id}`)
      setDrivers((prevDrivers:any) =>
        prevDrivers.map((driver:any) =>
          driver.id == data?.driver_id
              ? { ...driver, order: {lat_from , long_from , is_have_order:true} }
            : driver
        )
      );
    })

    socket?.on(SocketEventLisntEnum.SOCKET_START_ORDER, function (data:any) {
      console.log(data);

      setDrivers((prevDrivers:any) =>
        prevDrivers.map((driver:any) =>
          driver.id == data?.driver_id
            ? { ...driver, order:null }
            : driver
        )
      );
      
      setOrders((prevOrder: any) =>
        prevOrder.filter((order: any) => order.id !== data?.order_id)
      );
    })
    
    return () => {
      console.log('DIsconnect');

      disconnectSocket();
    }
  }, [])


  console.log(Orders);


  return (
    <div>

      {Open ?
        <WithDrawer
          title='deifj'
          setOpen={setOpen}
          iopen={true}

          button={<Button type="primary">{t("open")}</Button>}
        >
          <DriverInformation driver_id={driverId} />
          {/* Your content goes here */}
        </WithDrawer>
        : ""
      }
      <div style={{ marginTop: "50px" }}>

        <GoogleMap center={{ lat: 33.4972367, lng: 36.2429607 }} zoom={18} mapContainerStyle={{ width: '100%', height: "70vh" }} >
          {
            Drivers?.map((driver: any) =>
            (

              
              <>
              <Marker
                onClick={() => {
                  setOpen(v => !v)
                  setDriverId(driver.id);
                }}
                position={{ lat: +driver?.lat, lng: +driver?.long }}
                icon={{
                  url: 'Layout/CarImage.jpg',
                  scaledSize: new google.maps.Size(30, 55)
                }}
              />
              {
                driver?.order?.is_have_order && (
                  <Polyline
                  path={[{
                    lat:+driver?.lat ,
                    lng:+driver?.long
                  } , 
                  {
                    lat:+driver['order']?.lat_from ,
                    lng:+driver['order']?.long_from 
    
                  }
                ]}
                  options={{
                    strokeColor: '#8328f29c',
                    strokeOpacity: 1,
                    strokeWeight: 6,
                    // strokeDasharray: [10, 5],
                  }}
                />
                )
              }
              
             
              </>


            )
            )
          }

          {
            Orders?.map((order: OrderInfoType) =>
            (
              <>
              
          
              <Marker
                onClick={() => {
                  setisOrderModalOpen(true)
                  setOrderObject(order as any )
                }}
                position={{ lat: +order?.lat_from, lng: +order?.long_from }}
                icon={{
                  url: 'Layout/order.gif',
                  scaledSize: new google.maps.Size(30, 55)
                }}

              />
              
                  </>

            )
            )
          }

        </GoogleMap>
        <SendOrderToDriverModal isOpen={isOrderModalOpen} setIsOpen={setisOrderModalOpen} order={OrderObject} drivers={Drivers} />
      </div>
    </div>
  )
}

export default GoogleMapDraw

export interface DriverInfoType {
  driver_id: number,
  lat: number,
  long: number,
  name?: string | null
  phone?: string | null
  // isHaveOrder:string
  //true - flase - pending
}
export interface OrderInfoType {
  distance:string
  id:number 
  lat_from:string 
  lat_to:string 
  long_from: string
  long_to:string
  payment_method: string

  // isHaveOrder:string
  //true - flase - pending
}




export const OrderFromSocketLater: OrderInfoType[] = [
 
]