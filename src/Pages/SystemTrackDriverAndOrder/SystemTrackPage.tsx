import { DirectionsRenderer, GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import LoadingPage from '../../Layout/app/LoadingPage';
import GoogleMapDraw from './GoogleMapDraw';






const SystemTrackPage = () => {

  const {t} = useTranslation();




  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDZrGqtL1iBm9ZOTdfT-vW-3wpV-LO608M",
    libraries: ['places']
  })


  if(!isLoaded){
    return <LoadingPage />
  }
  return (
    <GoogleMapDraw/>

  )
}

export default SystemTrackPage
