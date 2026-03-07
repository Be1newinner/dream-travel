"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, Users, Star } from "lucide-react"
import { CirclePlus } from "lucide-react"
import { CircleAlert } from "lucide-react"
import { MoveHorizontal } from "lucide-react"

const packages = [
  {
    id: 1,
    title: "Mystic Mountains Retreat",
    image: "/city-tour-6-650x400.webp",
    location: "Dubai, UAE",
    time: "03",
    people: "2-10 Person",
    price: "$350",
    rating: 4.8
  },
  {
    id: 2,
    title: "Historic Landmarks Journey",
    image: "/city-tour-5-650x400.webp",
    location: "Phuket, Thailand",
    time: "04",
    people: "2-8 Person",
    price: "$420",
    rating: 4.7
  },
  {
    id: 3,
    title: "Old Town Discovery Walk",
    image: "/tour-10-650x400.webp",
    location: "Maldives",
    time: "02",
    people: "Couple",
    price: "$690",
    rating: 4.9
  },
  {
    id: 4,
    title: "Art, Music & Heritage Tour",
    image: "/tour-9-650x400.webp",
    location: "Istanbul, Turkey",
    time: "03",
    people: "2-12 Person",
    price: "$540",
    rating: 4.6
  },
  {
    id: 5,
    title: "Culture & Cuisine Discovery",
    image: "/tour-10-650x400.webp",
    location: "Maldives",
    time: "04",
    people: "Couple",
    price: "$690",
    rating: 4.9
  },
  {
    id: 6,
    title: "Eco-Friendly City Ride",
    image: "/tour-9-650x400.webp",
    location: "Istanbul, Turkey",
    time: "05",
    people: "2-12 Person",
    price: "$540",
    rating: 4.6
  }
]

export default function PopularPackages() {
  return (
    <section className="py-20">

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-14">

        <h2 className="text-4xl font-bold mb-3">
          Popular Travel Package
        </h2>

        <p className="text-gray-500 text-lg mx-auto font-medium w-[40%]">
          A curated list of the most popular travel packages based on different destinations.</p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {packages.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl border border-gray-300 p-2 overflow-hidden shadow hover:shadow-xl transition group"
          >

            {/* Image */}
            <div className="relative h-[220px] overflow-hidden rounded-xl">

              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Price */}
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold">
                {item.price}
              </div>

            </div>

            {/* Content */}
            <div className="p-5">

              {/* Rating */}
              <div className="flex items-center gap-1 text-yellow-500 mb-2">
                <Star size={16} fill="currentColor" />
                <span className="text-sm font-medium text-gray-700">
                  {item.rating}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold mb-2">
                {item.title}
              </h3>

              {/* Location */}
              <div className="flex items-center gap-2 text-gray-500 font-medium text-sm mb-4">
                <MapPin size={16} />
                {item.location}
                <div className="flex items-center gap-3">
                  <MoveHorizontal />
                  <div className="flex items-center">
                    {item.time}
                    <p>/Hours</p>
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="flex items-center justify-between pb-4 mt-4 border-b border-gray-300">
                <Link
                  href="#"
                  className="bg-blue-600 text-white text-sm font-medium px-6 py-2 rounded-md hover:bg-blue-700 transition flex items-center justify-center"
                >
                  Book Now
                </Link>
                <div className="text-right leading-tight">
                  <p className="text-sm text-gray-700 font-medium">per person</p>
                  <p className="font-bold text-3xl">{item.price}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 font-medium mt-4">
                <div className="flex items-center gap-1">
                  <p>Experience</p>
                  <CircleAlert size={14} color="gray" />
                </div>
                <div className="flex items-center gap-1 ">
                  <CirclePlus size={14} color="gray" />
                  <p>Inclusion</p>
                  <CircleAlert size={14} color="gray" />
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>

    </section>
  )
}