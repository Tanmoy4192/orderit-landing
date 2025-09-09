"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo + Title */}
        <div className="flex items-center gap-2">
          {/* Logo with separate hover effect */}
          <Image
            src="/logo.png"
            alt="OrderIt Logo"
            width={32}
            height={32}
            className="transition-transform duration-300 hover:scale-110 hover:-rotate-6 cursor-pointer"
          />

          {/* Text with separate hover effect */}
          <span className="text-xl font-semibold transition-transform duration-300 hover:scale-110 cursor-pointer">
            <span className="text-orange-500">Order</span>
            <span className="text-gray-900">It</span>
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-3">
          <a href="/about" className="text-sm text-gray-600 hover:text-gray-900">About</a>
          <a href="/help" className="text-sm text-gray-600 hover:text-gray-900">Help</a>
          <Button size="sm">Join Queue</Button>
        </div>
      </nav>
    </header>
  );
}
