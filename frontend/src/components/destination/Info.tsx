import Link from "next/link";

export default function Info({ heading, links, description, timeToVisit }: { heading: string, links: string[], description: string, timeToVisit: string }) {
    return (
        <section className="text-center py-10 max-w-5xl mx-auto">
            <h1 className="text-5xl font-bold">{heading}</h1>
            <div className="flex justify-center gap-4 py-8">
                {links.map((item, index) => (
                    <div key={index} className="">
                        <Link href="#" className="rounded-full border px-3 py-1 font-medium">{item}</Link>
                    </div>
                ))}
            </div>
            <p className="text-lg text-gray-700 font-base">{description}</p>

            <div className="mt-10">
                <Link href="#" className="text-xl font-semibold rounded-full px-6 py-2 text-blue-600 hover:text-white hover:bg-blue-600 transition-all duration-300">{timeToVisit}</Link>
            </div>
        </section>
    )
}