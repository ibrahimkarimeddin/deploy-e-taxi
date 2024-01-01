interface Coordinates {
    lat: number;
    long: number;
  }
  
  interface Driver {
    lat: number;
    long: number;
    name?: string | null;
    driver_id:number
    distance? :any |null
  }

export function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Earth's radius in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
  }
  

  export function findNearestDrivers(order: Coordinates, drivers: Driver[]): Driver[] {
    // Calculate distances and store them in an array of objects
    const driverDistances = drivers.map((driver) => ({
      driver,
      distance: calculateDistance(
        order.lat,
        order.long,
        driver.lat,
        driver.long
      ),
    }));

    driverDistances.sort((a, b) => a.distance - b.distance);

    // Get the top five nearest drivers
    const nearestDrivers = driverDistances.slice(0, 5).map((item) => {
        console.log(item);
        item['driver']['distance'] = item['distance']
        return item.driver
        
    });
  
    return nearestDrivers;

}