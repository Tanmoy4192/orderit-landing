"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

// ✅ Lazy load leaflet only on client
let L: any;
if (typeof window !== "undefined") {
  L = require("leaflet");
}

// ✅ Dynamically import react-leaflet components (no SSR crash)
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);
const Polyline = dynamic(
  () => import("react-leaflet").then((mod) => mod.Polyline),
  { ssr: false }
);

// ✅ Helper function to create custom marker icons
const createIcon = (color: string, size: number) =>
  L?.divIcon
    ? L.divIcon({
        html: `<div style="background:${color};width:${size}px;height:${size}px;border-radius:50%;border:2px solid white;"></div>`,
        className: "",
        iconSize: [size, size],
      })
    : undefined;

type MapClientProps = {
  userLoc: { lat: number; lng: number };
  restaurant: { lat: number; lng: number; name: string; address: string };
  points?: [number, number][];
};

export default function MapClient({ userLoc, restaurant, points = [] }: MapClientProps) {
  const [center, setCenter] = useState<[number, number]>([restaurant.lat, restaurant.lng]);

  useEffect(() => {
    if (userLoc?.lat && userLoc?.lng) {
      setCenter([userLoc.lat, userLoc.lng]);
    }
  }, [userLoc]);

  return (
    <div className="rounded-lg overflow-hidden shadow">
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom
        style={{ height: "300px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />

        {/* User Location */}
        {userLoc && (
          <Marker
            position={[userLoc.lat, userLoc.lng]}
            icon={createIcon("#1976d2", 14)}
          >
            <Popup>You are here</Popup>
          </Marker>
        )}

        {/* Restaurant Location */}
        <Marker
          position={[restaurant.lat, restaurant.lng]}
          icon={createIcon("#ff7a18", 18)}
        >
          <Popup>{restaurant.name}</Popup>
        </Marker>

        {/* Route Polyline */}
        {points.length > 0 && (
          <Polyline positions={points} color="#ff7a18" weight={3} />
        )}
      </MapContainer>

      <div className="p-3 flex gap-2 justify-between items-center">
        <p className="text-sm text-gray-600">{restaurant.address}</p>
      </div>
    </div>
  );
}
