import { DirectionsRenderer, GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import LoadingPage from '../../Layout/app/LoadingPage';
import GoogleMapDraw from './GoogleMapDraw';
import axios from 'axios';
import { BASE_URL_SOCKET } from '../../lib/SocketProvider';




const SystemTrackPage = () => {

  const {t} = useTranslation();
  const  [Driver , setDriver  ] = useState<null | any[]>(null)
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDZrGqtL1iBm9ZOTdfT-vW-3wpV-LO608M",
    libraries: ['places']
  })

    useEffect(()=>{

      async function goAsync(){

        setDriver(await getDriverOnline())
      }
      
      
      goAsync();
    },[])

    
  if(!isLoaded || !Driver){
    return <LoadingPage />
  }
  return (
    <GoogleMapDraw  drivers={Driver} />

  )
}

export default SystemTrackPage



export async function getDriverOnline (){


  const data = await axios.get(BASE_URL_SOCKET)
  
  return data.data
}