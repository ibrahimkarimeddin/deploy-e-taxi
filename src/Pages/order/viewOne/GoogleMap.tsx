import React, { useEffect, useState } from 'react';
import { Circle, DirectionsRenderer, GoogleMap, Polyline } from '@react-google-maps/api';
import { ChangePointShape } from './FormUtils';

interface GoogleMapsProps {
  data: {
    lat_from: number;
    long_from: number;
    lat_to: number;
    long_to: number;
    status: string;
    points?: string[];
    // Add other properties and their types based on your data structure
  };
}

const GoogleMaps: React.FC<GoogleMapsProps> = ({ data }) => {
  useEffect(() => {
    calculateRoute();
  }, []);

  const [directionsResponse, setDirectionsResponse] = useState<google.maps.DirectionsResult | null>(null);

  async function calculateRoute() {
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: { lat: +data.lat_from, lng: +data.long_from },
      destination: { lat: +data.lat_to, lng: +data.long_to },
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
  }

  const center = { lat: +data.lat_from || 33.270569, lng: +data.long_from || 44.388852 };

  return (
    <div>
      <div style={{ marginTop: '50px' }}>
        <GoogleMap
          center={
            data?.status === 'complete'
              ? ChangePointShape(data?.points || [])[0]
              : center
          }
          zoom={18}
          mapContainerStyle={{ width: '100%', height: '70vh' }}
        >
          {directionsResponse && data?.status !== 'complete' && (
            <DirectionsRenderer directions={directionsResponse} />
          )}

          {ChangePointShape(data?.points || []) && data?.status === 'complete' && (
            <Polyline
              path={ChangePointShape(data?.points || [])}
              options={{
                strokeColor: '#8328f29c',
                strokeOpacity: 1,
                strokeWeight: 6,
                // strokeDasharray: [10, 5],
              }}
            />
          )}
        </GoogleMap>
      </div>
    </div>
  );
};

export default GoogleMaps;