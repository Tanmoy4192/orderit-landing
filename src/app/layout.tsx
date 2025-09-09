// src/app/layout.tsx
import "./globals.css"; // keep if you already have this
import Navbar from "../components/Navbar";
import "leaflet/dist/leaflet.css";

export const metadata = {
  title: "Order It",
  description: "Restaurant discovery and queueing",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
