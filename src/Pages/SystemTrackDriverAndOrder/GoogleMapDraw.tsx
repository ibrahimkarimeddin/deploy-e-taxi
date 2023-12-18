import { DirectionsRenderer, GoogleMap , Marker} from '@react-google-maps/api'
import React, { useEffect, useState } from 'react'
  

const GoogleMapDraw = () => {






  return (
    <div>
    <div style={{marginTop:"50px"}}>

    <GoogleMap  center={{lat:33.49671298552324,lng:36.24314508075161}} zoom={18} mapContainerStyle={{width:'100%' , height:"70vh"}} > 
      <Marker 
            position={{lat:33.49669509159378, lng:36.242994877049746 }}
            // icon={{path:'Logo.png'}}
            
      />
  </GoogleMap>


</div>
</div>
  )
}

export default GoogleMapDraw
