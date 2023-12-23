import { DirectionsRenderer, GoogleMap , Marker} from '@react-google-maps/api'
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

// interface DriverSocketType {
//   avatar? :string |null
//   country_code?: string |null
//   full_name?:string |null
//   gender?: string |null
//   id: number
//   lat: string
//   long: string
//   phone?: string |null
// }

const GoogleMapDraw = ({drivers}:{drivers:any[]}) => {


  const [Open, setOpen] = useState(false)
  const [driverId,  setDriverId] = useState<number | null>(null)

  const [DriverInMap , setDriverInMap ] = useState<any[]>(drivers) 
  const [isOrderModalOpen , setisOrderModalOpen ] = useState(false) 
  const [OrderObject , setOrderObject ] = useState(null) 


  useEffect(()=>{
    const socket  = getScoket()

       
      socket?.on(SocketEventLisntEnum.SOCKET_DEBUG , function(dataFromSocket:any) {
        // console.log(dataFromSocket); ` 
      })

      // socket?.on(SocketEventLisntEnum.SOCKET_NEW_USER , function(driver_id:number, lat:number,lng:number) {
      //   console.log(lat);
      // })

      // socket?.on(SocketEventLisntEnum.SOCKET_UPDATE_USER , function(lat:number,lng:number) {
      //   console.log(lng); 
      // })

      // socket?.on(SocketEventLisntEnum.SOCKET_REMOVE_USER , function(driver_id:number) {
      //   console.log(driver_id); 
      // })
      return ()=>{
        console.log('DIsconnect');
        
        disconnectSocket();
      }
   },[])


   
  
  return (
    <div>

  { Open ? 
    <WithDrawer
    title='deifj'
    setOpen={setOpen}
    iopen={true}

    button={<Button type="primary">Open</Button>}
    >
      <DriverInformation driver_id={driverId}/>
      {/* Your content goes here */}
    </WithDrawer>
    :""
  }
      <div style={{marginTop:"50px"}}>

        <GoogleMap  center={{lat:33.4972367,lng:36.2429607}} zoom={18} mapContainerStyle={{width:'100%' , height:"70vh"}} > 
         {
          DriverFromSocketLater?.map((driver:any) =>
          (
          
            <Marker  
            onClick={()=>{
                setOpen(v =>!v)
                setDriverId(1);
              }}
            position={{lat:+driver?.lat,lng:+driver?.long}}
            icon={{
              url: 'Layout/CarImage.jpg' ,
              scaledSize:  new google.maps.Size(30 ,55)
            }}
            />
           
            
           )
          )
         }

      {   
          OrderFromSocketLater?.map((order:any) =>
          (
          
            <Marker  
            onClick={()=>{
                  setisOrderModalOpen(true)
                  setOrderObject(order)
              }}
            position={{lat:+order?.lat,lng:+order?.long}}
            icon={{
              url: 'Layout/order.gif' ,
              scaledSize:  new google.maps.Size(30 ,55)
            }}
            
            />
           
            
           )
          )
       }

        </GoogleMap>
        <SendOrderToDriverModal  isOpen={isOrderModalOpen}  setIsOpen={setisOrderModalOpen} order={OrderObject}  drivers={DriverFromSocketLater}  />
      </div>
    </div>
  )
}

export default GoogleMapDraw

export interface DriverInfoType {
  driver_id :number ,
  lat:number,
  long:number,
  name?:string | null
  phone?: string |null
  // isHaveOrder:string
  //true - flase - pending
}
export interface OrderInfoType {
  order_id :number ,
  lat:number,
  long:number,
  // isHaveOrder:string
  //true - flase - pending
}


export const DriverFromSocketLater :DriverInfoType[]  = [
  {
    driver_id:1 ,
    lat:33.49769509159378,
     long:36.242994877049746,
     name:"ibrahim",
     phone:"0951069343"
    //  isHaveOrder:"false"
   },
   {
    driver_id:2 ,
    lat:33.49749539159378,
     long:36.245994877049746,
     name:"karim",
     phone:"099999999 "
    //  isHaveOrder:"false"
   },
   {
    driver_id:3 ,
    lat:33.49769749159378,
     long:36.247994877049746,
     name:"mhmad",
     phone:"095349343"
    //  isHaveOrder:"false"
   },
   {
    driver_id:4 ,
    lat:33.49789549159378,
     long:36.248994877049746,
     name:"suliman",
     phone:"0951239343"
    //  isHaveOrder:"false"
   },
   {
    driver_id:5 ,
    lat:33.49769559159378,
     long:36.242994827049746,
     name:"moaz",
     phone:"0951062222"
    //  isHaveOrder:"false"
   },
   {
    driver_id:6 ,
    lat:33.49769539159378,
     long:36.242914877049746,
     name:"test",
     phone:"09510453259"
    //  isHaveOrder:"false"
   },
   {
    driver_id:7 ,
    lat:33.49519509159378,
     long:36.215994877049746,
     name:"test2",
     phone:"095100000"
    //  isHaveOrder:"false"
   }
]


export const OrderFromSocketLater :OrderInfoType[]  = [
  {
    order_id:1 ,
    lat:33.49669509159378,
     long:36.242994877049746,
    //  isHaveOrder:"false"
   }
]