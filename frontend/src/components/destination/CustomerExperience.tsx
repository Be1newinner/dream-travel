"use client"

import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "../ui/carousel"

export default function CustomerExperience({
    heading,
    image,
}: {
    heading: string
    image: string[]
}) {
    const plugin = useRef(
        Autoplay({
            delay: 2000,
            stopOnInteraction: false,
        })
    )

    return (
        <section className="py-16">
            <div className="mx-auto px-4">

                <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl py-4 font-bold text-center">
                    {heading}
                </h1>

                <Carousel
                    plugins={[plugin.current]}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {image.map((item, index) => {
                            const isLarge = index % 2 !== 0 // 2nd, 4th, 6th = big

                            return (
                                <CarouselItem key={index} className={`basis-1/2 sm:basis-1/3 lg:basis-1/5 flex items-center justify-center py-20`} >
                                    <div>
                                        <img
                                            src={item}
                                            alt="photos"
                                            className={`w-full object-cover rounded-2xl transition-all duration-300 ${isLarge ? "h-88" : "h-full"}`}
                                        />
                                    </div>
                                </CarouselItem>
                            )
                        })}
                    </CarouselContent>
                </Carousel>

            </div>
        </section>
    )
}