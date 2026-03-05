import { Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative">
      <Image
        src="/banner-img2-1.webp"
        alt="banner-img2-1"
        width={1920}
        height={1080}
        className="w-full h-screen object-cover"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white px-6">
        
        <div className="max-w-5xl text-center space-y-6">

          {/* award */}
          <div className="flex flex-col items-center space-y-3">
            <Image
              src="/travel-award-1.png"
              alt="travel-award-1"
              width={60}
              height={60}
            />

            <h3 className="text-lg font-medium">
              The World Travel Award
            </h3>

            <ul className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <li key={i}>
                  <Star size={18} fill="white" />
                </li>
              ))}
            </ul>
          </div>

          {/* main text */}
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            My First Class, Land Refreshed
          </h2>
          <p className="text-lg md:text-xl font-medium text-gray-200">
            Every destination is backed by care, culture, and confidence.
          </p>
        </div>
      </div>
    </div>
  );
}