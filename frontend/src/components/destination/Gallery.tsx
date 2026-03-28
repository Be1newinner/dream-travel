"use client"

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

export function Gallery({ images }: { images: string[] }) {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })

    )

    return (
        <Carousel
            opts={{
                align: "start",
                // loop: true, // IMPORTANT for smooth infinite
            }}
            plugins={[plugin.current]}
            className="w-full mx-auto relative"
        >
            <CarouselContent className="p-0">
                {images.map((img, index) => (
                    <CarouselItem key={index} className="basis-1/3 p-2">
                        <Card className="p-0 rounded-none">
                            <CardContent className="p-0">
                                <img
                                    src={img}
                                    alt="gallery"
                                    className="w-full  object-cover"
                                />
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious className="absolute left-2" />
            <CarouselNext className="absolute right-2" />
        </Carousel>
    )
}