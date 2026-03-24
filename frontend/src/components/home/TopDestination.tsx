import { Headset, User, ShieldCheck, NotebookPen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const features = [
  {
    icon: NotebookPen,
    title: "Customizable Package"
  },
  {
    icon: Headset,
    title: "24/7 Support"
  },
  {
    icon: ShieldCheck,
    title: "Trusted by Thousands"
  },
  {
    icon: User,
    title: "Local Expertise"
  }
]

const sliderData = [
    {
        name:"Jordan",
        image:"/Image-51.webp",
        Tour:"Tours (01)",
    },
    {
        name:"United States",
        image:"/Image-66.webp",
        Tour:"Tours (01)",
    },
    {
        name:"Qatar",
        image:"/Image-53.webp",
        Tour:"Tours (02)",
    },
    {
        name:"Saudi Arabia",
        image:"/Image-56-1.webp",
        Tour:"Tours (02)",
    },
    {
        name:"Jamaica",
        image:"/Image-61.webp",
        Tour:"Tours (02)",
    },
    {
        name:"Oman",
        image:"/Image-54.webp",
        Tour:"Tours (00)",
    },
]

export default function TopDestination() {
  return (
    <section className="bg-[url('/home3-destination-bg.png')] bg-[#F2F2FF] bg-cover bg-center py-24 text-center">
      <div className="space-y-6 max-w-3xl mx-auto px-6">
        <span className="bg-white rounded-full px-4 py-2 font-semibold text-lg inline-block">
          Best Agency Ever!
        </span>
        <h2 className="text-5xl font-semibold">
          We’re Locked Top Destination
        </h2>
        <p className="text-lg text-gray-500 font-medium">
          A curated list of the most popular travel packages based on different destinations.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-16 px-6">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div key={index} className="flex items-center gap-2 justify-center lg:justify-start bg-white px-8 py-6 rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow shrink-0">
                <Icon className="text-blue-600" size={24} />
              </div>
              <p className="text-xl font-bold">
                {feature.title}
              </p>
            </div>
          )
        })}
      </div>
      <div className="flex items-center justify-center my-10 gap-2">
        <Image src="/trustpilot-star.svg" alt="trustpilot-star" height={100} width={100} />
        <p className="font-medium text-gray-500">5.0 Rating out of 5.0 based on 24,000 reviews</p>
        <Link href="/" className="hover:text-blue-500 duration-300 font-bold">Trustpilot</Link>
      </div>
      <Carousel className="w-full max-w-[12rem] mx-auto sm:max-w-xs md:max-w-7xl">
      <CarouselContent className="-ml-1">
        {sliderData.map((item, index) => (
          <CarouselItem key={index} className="basis-1/2 pl-1 lg:basis-1/4 ">
            <div className="p-1">
              <div className="mt-10">
                <div className="">
                <Image src={item.image} alt="Image" height={200} width={200} className="w-[280px] h-[280px] mx-auto object-cover rounded-full shrink-0" />
                <h2 className="text-xl font-bold py-2">{item.name}</h2>
                <p className="text-gray-500 font-medium">{item.Tour}</p>
              </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </section>
  )
}