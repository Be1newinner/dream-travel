import { Percent } from "lucide-react";
import { Award } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { MousePointer2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Offer() {
    const services = [
        {
            icon: MousePointer2,
            title: "One Click Booking",
            desc: "You can hassle-free and fast tour & travel package booking by GoFly.",
            bg: "bg-orange-200",
            color: "text-orange-600"
        },
        {
            icon: Percent,
            title: "Deals & Discounts",
            desc: "Agencies have special discounts on flights, hotels, & packages.",
            bg: "bg-blue-200",
            color: "text-blue-600"
        },
        {
            icon: Award,
            title: "Local Guidance",
            desc: "Travel agencies have experienced professionals guidance.",
            bg: "bg-orange-200",
            color: "text-orange-600"
        }
    ]
    return (
        <div className="w-[90%] max-w-7xl mx-auto">
            <div className="bg-white grid grid-cols-2 gap-6">
                <div>
                    <Image src="/home3-offer-img1.webp" alt="offer" height={400} width={600} className="w-full h-full object-cover rounded-2xl" />
                </div>
                <div>
                    <Image src="/home3-offer-img2.webp" alt="offer" height={400} width={600} className="w-full h-full object-cover rounded-2xl" />
                </div>
            </div>
            <div className="bg-[url('/home3-service-bg.webp')] my-16 bg-cover bg-center bg-[#fff2e2] p-10 rounded-2xl">

                {/* Top */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
                    <h1 className="text-4xl md:w-1/3 font-bold leading-tight">
                        To Go Your Desire Place Through our GoFly
                    </h1>
                    <Link href="#" className="flex items-center gap-1 font-bold group hover:text-blue-700">
                        View All Package
                        <ArrowUpRight className="transition duration-500 group-hover:rotate-45" />
                    </Link>
                </div>

                {/* Services */}
                <div className="grid md:grid-cols-3 gap-10 pt-10">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <div key={index} className="flex gap-5 items-start">
                                <div className={`flex items-center justify-center w-12 h-12 rounded-full ${service.bg} shrink-0`}>
                                    <Icon size={28} className={service.color} />
                                </div>
                                <div>
                                    <h6 className="text-2xl font-bold mb-1">
                                        {service.title}
                                    </h6>
                                    <p className="text-[#555555] font-medium text-sm leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}