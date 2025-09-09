// src/components/SearchBar.tsx
"use client";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { getAllRestaurants, filterNearby, distanceKm } from "../lib/restaurants";

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [userLoc, setUserLoc] = useState<{lat:number,lng:number}|null>(null);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const containerRef = useRef<HTMLDivElement|null>(null);

  // get user location (best-effort)
  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => setUserLoc({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      () => setUserLoc(null),
      { enableHighAccuracy: true }
    );
  }, []);

  useEffect(() => {
    const all = getAllRestaurants();
    // if have user location, prefilter by distance
    let list = userLoc ? filterNearby(all, userLoc, 20) : [...all].sort((a,b)=> a.name.localeCompare(b.name));
    if (query.trim().length > 0) {
      const q = query.toLowerCase();
      list = list.filter(r => r.name.toLowerCase().includes(q));
    }
    // already sorted alphabetically by filterNearby and by name above
    setSuggestions(list.slice(0, 8));
  }, [query, userLoc]);

  // close on outside click
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!containerRef.current) return;
      if (!(e.target instanceof Node)) return;
      if (!containerRef.current.contains(e.target)) setSuggestions([]);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full md:w-96">
      <input
        value={query}
        onChange={(e)=> setQuery(e.target.value)}
        placeholder="Search restaurants, cuisines, or dishes"
        className="w-full rounded-xl border px-4 py-2 shadow-sm"
        aria-label="Search restaurants"
      />

      {query.trim().length > 0 && suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 z-50 mt-2 bg-white border rounded-lg shadow-lg overflow-hidden">
          {suggestions.map(r => (
            <li
              key={r.id}
              onClick={() => router.push(`/restaurant/${r.id}`)}
              className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 cursor-pointer"
            >
              <img src={r.img} alt={r.name} className="w-12 h-12 rounded-md object-cover" />
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{r.name}</div>
                <div className="text-xs text-gray-500 truncate">{r.cuisine} • {r.address}</div>
              </div>
              <div className="text-xs text-gray-500 text-right">
                {userLoc ? `${distanceKm(userLoc.lat, userLoc.lng, r.lat, r.lng).toFixed(1)} km` : ""}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
