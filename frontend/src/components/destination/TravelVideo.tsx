"use client"

import Image from "next/image"
import { CirclePlay, X } from "lucide-react"
import { useState } from "react"

export default function TravelVideo({ image, videoUrl }: { image: string, videoUrl: string }) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 relative">

      {/* Thumbnail */}
      <div className="relative">
        <Image
          src={image}
          alt="Travel Video"
          width={1920}
          height={1080}
          className="w-full h-auto rounded-3xl"
        />

        {/* Play Button */}
        <CirclePlay
          onClick={() => setIsPlaying(true)}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-blue-500 rounded-full p-3 cursor-pointer hover:scale-110 transition"
          size={70}
        />
      </div>

      {/* Video Modal */}
      {isPlaying && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">

          {/* Close Button */}
          <button
            onClick={() => setIsPlaying(false)}
            className="absolute top-6 right-6 text-white"
          >
            <X size={30} />
          </button>

          {/* Video */}
          <div className="w-full md:w-[70%] aspect-video">
            <iframe
              className="w-full h-full"
              src={`${videoUrl}?autoplay=1`}
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>

        </div>
      )}
    </section>
  )
}