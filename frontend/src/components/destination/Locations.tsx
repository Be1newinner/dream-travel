"use client"
import Image from "next/image";
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
export default function Locations({ heading, places }: { heading: string, places: { image: string, name: string }[] }) {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    )
    return (
        <section className=" max-w-7xl mx-auto mt-10 mb-20">
            <h1 className="text-3xl font-bold py-6">{heading}</h1>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[plugin.current]}
                className="w-full max-w-7xl mx-auto relative"
            >
                <CarouselContent>
                    {places.map((item, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-1/2 md:basis-1/3 lg:basis-1/6"
                        >
                            <div>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full rounded-xl"
                                />
                                <p className="text-center mt-2 font-medium">
                                    {item.name}
                                </p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="absolute left-0" />
                <CarouselNext className="absolute right-0" />
            </Carousel>
        </section>
    )
}
