import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const reviews = [
  {
    rating: "4.5",
    logo: "/tripadvisor-logo.svg",
    star: "/tripadvisor-start.svg",
  },
  {
    rating: "4.5",
    logo: "/trustpilot-logo.svg",
    star: "/trustpilot-star (1).svg",
  },
]

export default function BestAgency() {
  return (
    <section className="bg-[url('/home3-about-bg.webp')] bg-cover bg-center py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-6">
          <h2 className="text-5xl font-semibold">
            Why We’re Best Agency
          </h2>
          <p className="text-2xl font-medium">
            Welcome to GoFly Travel Agency – Your Gateway to Unforgettable Journeys!
          </p>
          <p className="text-lg text-gray-600 pt-4">
            At GoFly Travel Agency, we are passionate about creating exceptional
            travel experiences. Whether you're looking for a relaxing beach
            vacation, an adventurous trek, a luxurious getaway, or a cultural
            expedition.
          </p>
          <Link
            href="#"
            className="flex items-center gap-1 font-bold group hover:text-blue-700 w-fit"
          >
            About More GoFly
            <ArrowUpRight className="transition duration-500 group-hover:rotate-45" />
          </Link>
          <div className="border rounded-xl grid grid-cols-1 md:grid-cols-2 mt-6">
            {reviews.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-3 ${
                  index === 0 ? "border-b md:border-b-0 md:border-r" : ""
                }`}
              >
                <span className="border rounded-full text-4xl font-bold w-20 h-20 flex items-center justify-center">
                  {item.rating}
                </span>
                <div>
                  <Image
                    src={item.logo}
                    alt="logo"
                    width={140}
                    height={40}
                    className="pb-2"
                  />
                  <div className="flex items-center gap-3">
                    <p className="font-medium">Reviews</p>
                    <Image
                      src={item.star}
                      alt="stars"
                      width={60}
                      height={20}
                    />
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/about-img-1.webp"
            alt="about"
            width={600}
            height={600}
            className="object-cover"
          />
        </div>

      </div>
    </section>
  )
}