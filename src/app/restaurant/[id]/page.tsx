// src/app/restaurant/[id]/page.tsx
import Link from "next/link";

export default function RestaurantPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Restaurant Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Restaurant Detail</h1>
        <div className="flex gap-3">
          <Link
            href="/queue"
            className="px-3 py-2 bg-orange-500 text-white rounded hover:opacity-90"
          >
            Join Queue
          </Link>
          <Link
            href="/nearby"
            className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Find Nearby
          </Link>
          <Link
            href="/reserve"
            className="px-3 py-2 bg-orange-500 text-white rounded hover:opacity-90"
          >
            Reserve Table
          </Link>
        </div>
      </div>

      {/* Restaurant Info Card */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">Citrus & Co.</h2>
        <p className="text-gray-600 mb-4">Californian · 0.6 mi · Open until 10:00 PM</p>
        <div className="flex gap-3 text-sm text-gray-700">
          <span>⭐ 4.8</span>
          <span>⏳ Wait 18m</span>
          <span>📋 Live Queue</span>
        </div>
      </div>

      {/* Queue Section */}
      <div className="p-4 border rounded-lg bg-white mb-6">
        <h3 className="font-semibold mb-3">Join Queue</h3>
        <Link
          href="/queue"
          className="block px-3 py-2 bg-orange-500 text-white rounded hover:opacity-95 text-center"
        >
          Confirm & Join Queue
        </Link>
      </div>

      {/* Reserve Section */}
      <div className="p-4 border rounded-lg bg-white mb-6">
        <h3 className="font-semibold mb-3">Reserve a Table</h3>
        <div className="flex gap-3">
          <Link
            href="/reserve?time=6:30"
            className="px-3 py-2 border rounded hover:bg-gray-100"
          >
            6:30 PM
          </Link>
          <Link
            href="/reserve?time=7:00"
            className="px-3 py-2 border rounded hover:bg-gray-100"
          >
            7:00 PM
          </Link>
          <Link
            href="/reserve?time=7:30"
            className="px-3 py-2 border rounded hover:bg-gray-100"
          >
            7:30 PM
          </Link>
        </div>
      </div>

      {/* Location Section */}
      <div className="p-4 border rounded-lg bg-white mb-6">
        <h3 className="font-semibold mb-3">Location</h3>
        <p className="text-gray-600">0.6 mi · Downtown</p>
        <Link
          href="https://maps.google.com"
          target="_blank"
          className="inline-block mt-2 px-3 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Open in Maps
        </Link>
      </div>

      {/* How It Works Section */}
      <div className="p-4 border rounded-lg bg-white">
        <h3 className="font-semibold mb-3">How It Works</h3>
        <div className="flex gap-3 text-sm">
          <div className="px-3 py-2 border rounded">🔍 Find a spot</div>
          <div className="px-3 py-2 border rounded">📋 Join the live queue</div>
          <div className="px-3 py-2 border rounded">🔔 Get SMS updates</div>
        </div>
      </div>
    </div>
  );
}
