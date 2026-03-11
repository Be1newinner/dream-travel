import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"
import { ArrowUpRight } from "lucide-react"

const sliderData = [
    {
        name: "David Reynolds",
        image: "/tour-guide-img4-2.webp",
        role: "GoFly Guider",
    },
    {
        name: "Oliver Liam",
        image: "/tour-guide-img1-1.webp",
        role: "GoFly Guider",
    },
    {
        name: "Noah James",
        image: "/tour-guide-img6-1-1.webp",
        role: "GoFly Guider",
    },
    {
        name: "William Ethan",
        image: "/tour-guide-img7-1.webp",
        role: "GoFly Guider",
    },
    {
        name: "James Alexander",
        image: "/tour-guide-img5-1.webp",
        role: "GoFly Guider",
    },
    {
        name: "Michael Benjamin",
        image: "/tour-guide-img3-1.webp",
        role: "GoFly Guider",
    },
]

export default function TourGuided() {
    return (
        <section className="py-20 bg-[url('/home3-tour-guide-bg.png')] bg-[#FFF2E2]">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-3">Tour Guided</h2>
                <p className="text-gray-500 text-lg mx-auto font-medium max-w-xl">
                    A curated list of the most popular travel packages based on different destinations.
                </p>
            </div>
            <Carousel className="max-w-7xl mx-auto px-6 mt-14">
                <CarouselContent>
                    {sliderData.map((item, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-1/2 md:basis-1/3 lg:basis-1/4"
                        >
                            <div className="text-center group">
                                <div className="relative w-[260px] h-[260px] mx-auto">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="rounded-full object-cover transition duration-500 group-hover:scale-105"/>
                                    <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3 opacity-0 translate-y-6 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <Link href="#" className="bg-white p-2 rounded-full hover:bg-blue-600 hover:text-white transition">
                                            <Instagram size={18} />
                                        </Link>

                                        <Link href="#" className="bg-white p-2 rounded-full hover:bg-blue-600 hover:text-white transition">
                                            <Facebook size={18} />
                                        </Link>

                                        <Link href="#" className="bg-white p-2 rounded-full hover:bg-blue-600 hover:text-white transition">
                                            <Twitter size={18} />
                                        </Link>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mt-6">
                                    {item.name}
                                </h3>
                                <p className="text-gray-500 font-medium">
                                    {item.role}
                                </p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <div className="flex mt-8 justify-center gap-4"><p className="bg-white rounded-full px-8 py-1 font-medium text-lg gap-4 ">Need to Help? Don’t Hesitate Friendly Collaboarte with Experties</p>
                <Link href="#" className="flex items-center bg-white rounded-full text-lg gap-1 px-8 py-1 font-medium group hover:text-blue-700">
                    Meet Our Team
                    <ArrowUpRight className="transition duration-500 group-hover:rotate-45" />
                </Link>
            </div>
        </section>
    )
}