// src/app/page.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { MotionButton } from "../components/ui/button";
import SearchBar from "../components/SearchBar";

const fadeInUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };
const popIn = { hidden: { opacity: 0, scale: 0.96 }, show: { opacity: 1, scale: 1 } };
const staggerContainer = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <motion.section variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Find and Reserve Great Restaurants—Right on Time</h1>
        <p className="text-gray-600 mb-6">Search top-rated spots, see live waits, and sync directions so you arrive just as your table is ready.</p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
          <SearchBar />
          <input type="text" placeholder="Search restaurants, cuisines, or dishes" className="border rounded-xl px-4 py-2 w-full md:w-96" />

          <MotionButton variant="outline" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            Use my location
          </MotionButton>

          <Link href="/reserve">
            <MotionButton whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              Reserve Table
            </MotionButton>
          </Link>
        </div>

        <motion.div className="grid md:grid-cols-3 gap-6 mt-10" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <RestaurantCard name="Citrus & Co." rating={4.8} cuisine="Californian" img="/citrus.jpg" />
          <RestaurantCard name="Umami House" rating={4.7} cuisine="Japanese" img="/umami.jpg" />
          <RestaurantCard name="Pasta Nostra" rating={4.6} cuisine="Italian" img="/pasta.jpg" />
        </motion.div>
      </motion.section>

      {/* MAP / LIVE WAITS */}
      <motion.section variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="bg-gray-50 py-12 px-6">
        <h2 className="text-xl font-semibold mb-6 text-center">Top-rated nearby with live waits</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <motion.div variants={popIn} className="rounded-xl overflow-hidden shadow">
            <img src="/map.png" alt="Map" className="w-full" />
          </motion.div>

          <motion.div variants={popIn} className="p-6 bg-white rounded-xl shadow flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-4">4.7+ Near Me</h3>
              <ul className="space-y-3 text-gray-700">
                <li>Citrus & Co. — ETA 8m • Wait 18m</li>
                <li>Umami House — ETA 6m • Wait 12m</li>
                <li>Pasta Nostra — ETA 10m • Wait 25m</li>
              </ul>
            </div>
            <Link href="/map">
              <MotionButton className="mt-6 w-full" whileHover={{ scale: 1.02 }}>View More on Map</MotionButton>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* POPULAR PICKS */}
      <motion.section variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-xl font-semibold mb-6 text-center">Popular picks</h2>
        <motion.div variants={staggerContainer} className="grid md:grid-cols-4 gap-6">
          <PopularCard name="Stone Pie" rating={4.9} cuisine="Pizza + Italian" img="/stonepie.jpg" />
          <PopularCard name="Noodle Lab" rating={4.7} cuisine="Ramen + Japanese" img="/noodle.jpg" />
          <PopularCard name="Stack & Grill" rating={4.6} cuisine="Burgers + American" img="/burger.jpg" />
          <PopularCard name="Green Spoon" rating={4.8} cuisine="Vegan + Healthy" img="/greenspoon.jpg" />
        </motion.div>
      </motion.section>

      {/* HOW IT WORKS */}
      <motion.section variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="bg-gray-50 py-12 px-6">
        <h2 className="text-xl font-semibold mb-6 text-center">How it works</h2>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <StepCard title="Discover" desc="Find top spots near you with ratings and wait times." />
          <StepCard title="Queue or Reserve" desc="Join a queue or book a table in seconds." />
          <StepCard title="Arrive Just in Time" desc="Sync directions with your live queue position." />
        </motion.div>
      </motion.section>

      {/* WHY CHOOSE US */}
      <motion.section variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-xl font-semibold mb-6">Why choose us</h2>
        <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
          <ReasonCard title="Live Queue Sync" desc="ETA and wait times update as you travel." />
          <ReasonCard title="Fast Decisions" desc="Only the details you need to choose quickly." />
          <ReasonCard title="Trusted Ratings" desc="Top picks from verified diners." />
        </motion.div>
      </motion.section>

      <footer className="bg-gray-100 py-8 text-center text-gray-600">
        <div className="flex justify-center items-center gap-2 mb-2">
          {/* Logo */}
          <Image
            src="/logo.png"
            alt="OrderIt Logo"
            width={28}
            height={28}
            className="transition-transform duration-300 hover:scale-110 cursor-pointer"
          />
          {/* Text */}
          <p className="font-semibold text-gray-900 transition-transform duration-300 hover:scale-110 cursor-pointer">
            <span className="text-orange-500">Order</span>It
          </p>
        </div>

        <p className="text-sm">Simple restaurant discovery and real-time queue.</p>

        <div className="flex justify-center gap-6 mt-3 text-sm">
          <a href="/about">About</a>
          <a href="/help">Help</a>
          <a href="/terms">Terms</a>
        </div>

        <p className="mt-4 text-sm">hello@orderit.ai — San Francisco, CA</p>
      </footer>

    </motion.div>
  );
}

/* small components (kept in-page for simplicity) */
import { motion as m } from "framer-motion";
function RestaurantCard({ name, rating, cuisine, img }: any) {
  return (
    <m.div variants={popIn} className="rounded-xl shadow hover:shadow-lg transition overflow-hidden" whileHover={{ scale: 1.03 }}>
      <img src={img} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{cuisine}</p>
        <p className="text-orange-600 font-semibold">{rating}</p>
      </div>
    </m.div>
  );
}

function PopularCard({ name, rating, cuisine, img }: any) {
  return (
    <m.div variants={popIn} whileHover={{ scale: 1.04 }} className="rounded-xl shadow transition overflow-hidden flex flex-col">
      <img src={img} alt={name} className="w-full h-32 object-cover" />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-500">{cuisine}</p>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <p className="text-orange-600 font-semibold">{rating}</p>
          <div className="flex gap-2">
            <Link href="/queue"><MotionButton size="sm">Join Queue</MotionButton></Link>
            <Link href="/reserve"><MotionButton size="sm" variant="outline">Reserve</MotionButton></Link>
          </div>
        </div>
      </div>
    </m.div>
  );
}

function StepCard({ title, desc }: any) {
  return (
    <motion.div variants={fadeInUp} className="p-6 bg-white rounded-xl shadow">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </motion.div>
  );
}

function ReasonCard({ title, desc }: any) {
  return (
    <motion.div variants={fadeInUp} className="p-6 bg-orange-50 rounded-xl">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 text-sm">{desc}</p>
    </motion.div>
  );
}
