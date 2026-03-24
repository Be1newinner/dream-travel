import React from "react";

export default function TravelInspirations() {
    const travelData = [
        {
            date: "12 Sep, 2025",
            title: "Crystal-Clear Waters & White Sands.",
            desc: "Escape to the World’s Most Breathtaking Islands and immerse yourself in paradise.",
            location: "Bali, Indonesia",
        },
        {
            date: "12 Sep, 2025",
            title: "Escape to the World’s Breathtaking Islands.",
            desc: "Escape to the World’s Most Breathtaking Islands and immerse yourself in paradise.",
            location: "Brazil",
        },
        {
            date: "12 Sep, 2025",
            title: "Hiking, Trekking & Thrill-Seeking.",
            desc: "Discover the best mountain getaways for nature lovers, where breathtaking landscapes.",
            location: "",
        },
    ];
    return (
        <section className="py-20">
            {/* Heading */}
            <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-4xl font-bold mb-4">
                    Travel Inspirations
                </h2>
                <p className="text-gray-500 text-lg">
                    A curated list of inspiration the most tour & travel based on different destinations.
                </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
                {travelData.map((item, index) => (
                    <div
                        key={index}
                        className="border rounded-xl p-6 hover:shadow-lg transition"
                    >
                        <p className="text-sm text-gray-400 mb-3">{item.date}</p>

                        <h3 className="text-xl font-bold mb-3">
                            {item.title}
                        </h3>

                        <p className="text-gray-500 mb-4">
                            {item.desc}
                        </p>

                        {item.location && (
                            <p className="font-semibold text-sm">
                                {item.location}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}