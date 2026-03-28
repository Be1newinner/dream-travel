export default function WhyChooseUs({heading, description, cards, highlights}: {heading: string, description: string, cards:{icon: React.ReactNode, heading: string, description: string}[], highlights: string[]}) {
    return (
        <section className="bg-[url('/senegal/destination-dt-why-choose-bg.webp')] bg-cover bg-center bg-gray-300 h-screen">
            <h1 className="text-4xl font-bold py-6 text-center">{heading}</h1>
            <p className="text-lg text-gray-700 font-base text-center">{description}</p>
            <div className="flex">
            {cards.map((item, index)=>(
                <div key={index} className="border">
                    {item.icon}
                    <h2 className="text-2xl font-bold">{item.heading}</h2>
                    <p className="text-lg text-gray-700 font-base">{item.description}</p>
                </div>
            ))}
            </div>
        </section>
    )
}