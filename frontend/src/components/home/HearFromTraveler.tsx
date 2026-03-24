import Image from "next/image";

export default function HearFromTraveler() {
    return (
        <div className="grid grid-cols-2 max-w-7xl mx-auto my-16">
            <div>
                {/* <Image src="/testimonial-grp-img1.png" alt="" width={200} height={200} className="rounded-full"/>
                <Image src="/testimonial-grp-img2.png" alt="" width={60} height={60} className="rounded-full"/> */}
                <Image src="/ss.png" alt="" width={600} height={200} className="rounded-full"/>
            </div>
            <div className="px-10">
                <h2 className="text-4xl font-bold">Hear It from Travelers</h2>
                <p className="text-gray-600 text-lg pt-8">We go beyond just booking trips—we create unforgettable travel experiences that match your dreams!</p>
                <div className="mt-10">
                    <ul className="flex items-center gap-1">
                        <li className="w-4 h-4 bg-green-500 rounded-full"></li>
                        <li className="w-4 h-4 bg-green-500 rounded-full"></li>
                        <li className="w-4 h-4 bg-green-500 rounded-full"></li>
                        <li className="w-4 h-4 bg-green-500 rounded-full"></li>
                        <li className="w-4 h-4 bg-green-500 rounded-full"></li>
                    </ul>
                    <h5 className="text-xl font-bold pt-2 pb-4">Excellent Tourist Place!</h5>
                    <p className="text-gray-600 text-2xl font-medium">I had the most amazing trip of my life! Everything, including the guided excursions and the airport pickup, was meticulously organized. The itinerary was well-balanced, and the accommodations were excellent.</p>
                </div>
            </div>
        </div>
    )
}