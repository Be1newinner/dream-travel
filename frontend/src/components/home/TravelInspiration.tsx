import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TravelInspirations() {
    const travelData = [
        {
            image: "/blog-image3-650x400.webp",
            date: "12 Sep, 2025",
            title: "Crystal-Clear Waters & White Sands.",
            desc: "Escape to the World’s Most Breathtaking Islands and immerse yourself in paradise.",
            location: "Bali, Indonesia",
            link: "/blog/1",
        },
        {
            image: "/blog-image4-650x400.webp",
            date: "12 Sep, 2025",
            title: "Escape to the World’s Breathtaking Islands.",
            desc: "Escape to the World’s Most Breathtaking Islands and immerse yourself in paradise.",
            location: "Brazil",
            link: "/blog/2",
        },
        {
            image: "/blog-image6-650x400.webp",
            date: "12 Sep, 2025",
            title: "Hiking, Trekking & Thrill-Seeking.",
            desc: "Discover the best mountain getaways for nature lovers, where breathtaking landscapes.",
            location: "",
            link: "/blog/3",
        },
    ];

    return (
        <section className="pt-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-4xl font-bold mb-4">
                    Travel Inspirations
                </h2>
                <p className="text-gray-500 text-lg">
                    A curated list of inspiration the most tour & travel based on different destinations.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
                {travelData.map((item, index) => (
                    <Link
                        href={item.link}
                        key={index}
                        className="group border rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
                    >
                        <div className="p-4">
                            <div className="overflow-hidden rounded-2xl">
                                <Image
                                    src={item.image}
                                    alt="image"
                                    width={650}
                                    height={400}
                                    className="w-full h-[220px] object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>
                        </div>

                        <div className="px-6 pb-6">
                            <span className="text-sm text-gray-700 border rounded-full px-4 py-1">
                                {item.date}
                            </span>

                            <h3 className="text-3xl font-bold my-3 group-hover:text-blue-600 transition">
                                {item.title}
                            </h3>

                            <p className="text-gray-700 mb-4 font-medium">
                                {item.desc}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="flex justify-center mt-12">
                <Link
                    href="/blog"
                    className="bg-black text-white font-medium px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
                >
                    View All Inspirations
                </Link>
            </div>
        </section>
    );
}