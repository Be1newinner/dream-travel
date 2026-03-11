import { Phone } from "lucide-react"
import { PhoneOutgoing } from "lucide-react"
import { Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const quickLinks = [
    "About GoFly",
    "Health & Safety Measure",
    "Visa Processing",
    "Customize Tour",
    "Travel Inspirations",
    "Traveler Reviews",
    "Terms & Condition",
    "Sitemap",
]

const searches = [
    "Maldives Tour",
    "Bali, Indonesia Tour",
    "Thailand Tour",
    "Philippines Tour",
    "Honeymoon Trip",
    "Bali Vacation Package",
    "Hawaii, USA Tour",
    "Switzerland Tour",
    "New Zealand Tour",
    "Costa Rica Tour",
    "Peru (Machu Picchu)",
    "Paris, France Tour",
    "Rome, Italy Tour",
]

export default function Footer() {
    return (
        <footer className="bg-[#0b0b2a] text-white pt-20">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 md:grid-cols-2 gap-10">
                <div className="">
                    <Link href="/" className="text-2xl font-bold">
                        <Image src="/header-logo3.svg" alt="Logo" width={100} height={100} />
                    </Link>
                    <h3 className="text-xl font-bold text-gray-400 pt-8">GoFly Travel Agency</h3>
                    <p className="text-gray-400 text-sm pt-2">
                        Skyline Plaza, 5th Floor, 123 Main Street
                        Los Angeles, CA 90001, USA
                    </p>

                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-300">
                        {quickLinks.map((item, index) => (
                            <li key={index}>
                                <Link href="#" className="hover:text-white">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Top Destination</h3>
                    <ul className="space-y-2 text-gray-300">
                        {searches.map((item, index) => (
                            <li key={index}>
                                <Link href="#" className="hover:text-white">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                    <ul className="space-y-2 text-gray-300">
                        <div className="flex items-center gap-4">
                            <Phone size={30} color="green" className="" />
                            <div>
                                <p className="text-gray-400">WhatsApp</p>
                                <p className="font-semibold">+91 345 533 865</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Mail size={30} color="green"/>
                            <div>
                                <p className="text-gray-400">Mail Us</p>
                                <p className="font-semibold">info@gofly.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <PhoneOutgoing size={30} color="green"/>
                            <div>
                                <p className="text-gray-400">Call Us</p>
                                <p className="font-semibold">+91 456 453 345</p>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-700 mt-16 py-6">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

                    <p className="text-gray-400 text-sm">
                        Copyright 2025 Egens Lab | All Right Reserved.
                    </p>

                    <div className="flex items-center gap-4">
                        <Image src="/master-card-icon.webp" alt="mastercard" width={50} height={30} />
                        <Image src="/visa-icon.webp" alt="visa" width={50} height={30} />
                        <Image src="/paypal-icon.webp" alt="paypal" width={50} height={30} />
                        <Image src="/gpay-icon.webp" alt="gpay" width={50} height={30} />
                    </div>

                </div>
            </div>

        </footer>
    )
}