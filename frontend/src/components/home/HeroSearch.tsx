"use client"

import { CalendarDays } from "lucide-react"
import { Crosshair } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

type TabType = "tours" | "hotels" | "visa" | "experience"

export default function HeroSearch() {
  const [activeTab, setActiveTab] = useState<TabType>("tours")

  const [destination, setDestination] = useState("")
  const [date, setDate] = useState("")
  const [tourType, setTourType] = useState("")

  const handleSearch = () => {
    const data = {
      tab: activeTab,
      destination,
      date,
      tourType
    }

    console.log("Search Data:", data)

    // later you can redirect to results page
  }

  return (
    <section className="relative flex items-center justify-center -translate-y-1/3">

      <div className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-7xl">

        {/* Tabs */}
        <div className="flex gap-4 mb-6">

          {["tours", "hotels", "visa", "experience"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as TabType)}
              className={`capitalize px-6 py-3 rounded-full font-medium -translate-y-11 ${activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100"
                }`}
            >
              {tab}
            </button>
          ))}

        </div>


        {/* Form */}
        <div className="w-full grid md:grid-cols-4 gap-4 -translate-y-8">

          {/* Destination */}
          
          <div className="flex items-center rounded-lg px-2 border">
            <Crosshair color="black" />
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className=" outline-none p-3 w-full"
          >
            <option value="">Select Destination</option>
            <option>Dubai</option>
            <option>Thailand</option>
            <option>Turkey</option>
            <option>Maldives</option>
          </select>
          </div>

          {/* Date */}
          <div className="flex items-center rounded-lg px-2 border">
            <CalendarDays />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="outline-none w-full p-3"
          />
          </div>

          {/* Tour Type */}
          <div className="flex items-center rounded-lg px-2 border">
          <select
            value={tourType}
            onChange={(e) => setTourType(e.target.value)}
            className="outline-none w-full p-3"
          >
            <option value="">Tour Types</option>
            <option>Adventure</option>
            <option>Family</option>
            <option>Luxury</option>
            <option>Honeymoon</option>
          </select>
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white font-semibold rounded p-3 hover:bg-blue-700 transition "
          >
            Search
          </button>

        </div>
        <p>Can’t find what you’re looking for? create your <Link href="#" className="text-blue-700">Custom Itinerary</Link></p>

      </div>

    </section>
  )
}