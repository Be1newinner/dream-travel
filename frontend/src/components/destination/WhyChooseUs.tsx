import Link from "next/link"

export default function WhyChooseUs({
    heading,
    description,
    cards,
    highlights,
}: {
    heading: string
    description: string
    cards: {
        icon: React.ReactNode
        heading: string
        description: string
    }[]
    highlights: string[]
}) {
    return (
        <section className="bg-[url('/senegal/destination-dt-why-choose-bg.webp')] bg-cover bg-center bg-[#F2F2FF] py-16">

            <div className="max-w-7xl mx-auto px-4">

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
                    {heading}
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-gray-700 text-center max-w-2xl mx-auto mb-10">
                    {description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
                        >
                            <div className="flex justify-center text-blue-500 text-2xl sm:text-3xl mb-4">
                                {item.icon}
                            </div>

                            <h2 className="text-lg sm:text-xl font-semibold mb-2">
                                {item.heading}
                            </h2>

                            <p className="text-sm sm:text-base text-gray-600">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-10">
                    {highlights.map((item, index) => (
                        <Link
                            key={index}
                            href="#"
                            className="px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full bg-white border hover:bg-blue-600 hover:text-white transition"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    )
}