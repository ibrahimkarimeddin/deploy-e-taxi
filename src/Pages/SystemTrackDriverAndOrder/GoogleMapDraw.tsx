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

  // const [JoinCity, setJoinCity] = useState("");
  // const socket = io.connect("http://localhost:3001");

  // console.log(DriverInMap);
  
  // const joinRoom = () => {
  //   if (JoinCity !== "") {
  //     console.log('Uer CLick Join ' , JoinCity);
  //     socket.emit("join_City", JoinCity);
  //   }
  // };

  // const UpdateLocation = () => {
  //   socket.emit("mizo", {lat,lng:number});
  // };
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

        </GoogleMap>
      </div>
    </div>
  )
}

export default GoogleMapDraw

export interface DriverInfoType {
  driver_id :number ,
  lat:number,
  long:number,
  // isHaveOrder:string
  //true - flase - pending
}

export const DriverFromSocketLater :DriverInfoType[]  = [
  {
    driver_id:1 ,
    lat:33.49669509159378,
     long:36.242994877049746,
    //  isHaveOrder:"false"
   }
]