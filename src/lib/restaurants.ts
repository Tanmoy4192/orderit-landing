// src/lib/restaurants.ts
import { RESTAURANTS } from "../data/restaurants";

export function getAllRestaurants() {
  return RESTAURANTS;
}

export function getRestaurantById(id: string) {
  return RESTAURANTS.find((r) => r.id === id);
}

/** Haversine distance (km) */
export function distanceKm(lat1: number, lon1: number, lat2: number, lon2: number) {
  const toRad = (deg:number) => (deg * Math.PI) / 180;
  const R = 6371; // km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/** Filter restaurants within maxKm of a point */
export function filterNearby(restaurants:any[], user:{lat:number,lng:number}, maxKm = 20) {
  return restaurants
    .map(r => ({ ...r, distanceKm: distanceKm(user.lat, user.lng, r.lat, r.lng) }))
    .filter(r => r.distanceKm <= maxKm)
    .sort((a,b) => a.name.localeCompare(b.name));
}
