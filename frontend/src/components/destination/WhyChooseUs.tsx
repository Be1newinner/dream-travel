import Link from "next/link"

export default function WhyChooseUs({ heading, description, cards, highlights }: { heading: string, description: string, cards: { icon: React.ReactNode, heading: string, description: string }[], highlights: string[] }) {
    return (
        <section className="bg-[url('/senegal/destination-dt-why-choose-bg.webp')] bg-cover bg-center bg-[#F2F2FF] h-screen">
            <div className="max-w-7xl mx-auto py-10">
                <h1 className="text-4xl font-bold py-6 text-center">{heading}</h1>
                <p className="text-lg text-gray-700 font-base text-center pb-4">{description}</p>
                <div className="flex gap-6 text-center py-10">
                    {cards.map((item, index) => (
                        <div key={index} className="border bg-white rounded-xl space-y-4 p-10">
                            <div className="flex justify-center text-blue-500">{item.icon}</div>
                            <h2 className="text-2xl font-bold">{item.heading}</h2>
                            <p className="text-lg text-gray-700 font-base">{item.description}</p>
                        </div>
                    ))}
                </div>
                <div className="flex gap-10 text-center py-10 w-4xl mx-auto">
                    {highlights.map((item, index) => (
                        <div key={index} className="border bg-white rounded-full mx-auto">
                            <Link href="#" className="flex justify-center hover:text-white hover:bg-blue-600 transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-medium text-lg">{item}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}