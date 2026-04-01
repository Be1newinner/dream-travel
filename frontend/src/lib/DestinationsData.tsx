import { PhoneForwarded, Radar, Tags } from "lucide-react";

export const DestinationsData: any = {
    senegal: {
        gallery: {
            images: [
                "/senegal/Image-50-1.webp",
                "/senegal/Image-31.webp",
                "/senegal/Image-32.webp",
                "/senegal/Image-33.webp",
                "/senegal/Image-34.webp",
            ],
        },

        info: {
            heading: "Senegal",
            links: [
                "Capital - Paris",
                "Currency - Euro",
                "Language - française",
            ],
            description: <>Paris, known as the <span className="font-medium">“City of Light”</span> (La Ville Lumière), is the capital of France and one of the most romantic and iconic cities in the world. Known for its timeless architecture, world-class museums, charming streets, rich history, and exquisite cuisine, Paris is a must-visit destination for travelers from around the globe. Globally recognized as a fashion capital, Paris is the birthplace of haute couture and luxury brands like Chanel, Louis Vuitton, and Dior.</>,
            timeToVisit: "Best Time to Visit",
        },

        locations: {
            heading: "Popular Tourist Place",
            places: [
                {
                    image: "/senegal/destination-dt-location-img1.webp",
                    name: "Eiffel Tower",
                },
                {
                    image: "/senegal/destination-dt-location-img2.webp",
                    name: "Loire Valley",
                },
                {
                    image: "/senegal/destination-dt-location-img3.webp",
                    name: "Southern France",
                },
                {
                    image: "/senegal/destination-dt-location-img4.webp",
                    name: "Louvre Museum",
                },
                {
                    image: "/senegal/destination-dt-location-img5.webp",
                    name: "Notre-Dame Cathedral",
                },
                {
                    image: "/senegal/destination-dt-location-img6.webp",
                    name: "Palace of Versailles",
                },
                {
                    image: "/senegal/destination-dt-location-img7.webp",
                    name: "Carcassonne",
                },
            ],
        },

        whyChooseUs: {
            heading: "Why Choose Only Us?",
            description:
                "Because we don’t just plan your trip — we craft unforgettable experiences.",
            cards: [
                {
                    icon: <Radar size={40} />,
                    heading: "Local Expertise",
                    description:
                        "From secret spots in Montmartre to skip-the-line Eiffel Tower access — we curate every journey with insider knowledge.",
                },
                {
                    icon: <Tags size={40} />,
                    heading: "Transparent Pricing",
                    description:
                        "From secret spots in Montmartre to skip-the-line Eiffel Tower access — we curate every journey with insider knowledge.",
                },
                {
                    icon: <PhoneForwarded size={40} />,
                    heading: "24/7 Support",
                    description:
                        "From secret spots in Montmartre to skip-the-line Eiffel Tower access — we curate every journey with insider knowledge.",
                },
            ],
            highlights: [
                "Personalized Itineraries",
                "Trusted Guides & Partners",
                "Curated Experiences",
            ],
        },
        customerExperience: {
            heading: "Recent Customer Experience",
            images: [
                "/senegal/customer-gallery-img1.webp",
                "/senegal/customer-gallery-img2.webp",
                "/senegal/customer-gallery-img3.webp",
                "/senegal/customer-gallery-img4.webp",
                // "/senegal/destination-details-video.mp4",
                "/senegal/customer-gallery-img6.webp",
                "/senegal/customer-gallery-img7.webp",
            ]
        },
        bestTime: {
            heading: "Best Time to Visit",
            cards: [
                {
                    image: "/senegal/travel-season-img1.webp",
                    season: "Spring",
                    month: "March - May",
                    highlights: [
                        "Cherry blossoms, café culture.",
                        "Moderate crowds.",
                        "Ideal for outdoor walks & photo spots.",
                    ],
                    perfectFor: "Perfect For: First-time travelers, couples, light packers"
                },
                {
                    image: "/senegal/travel-season-img2.webp",
                    season: "Summer",
                    month: "June - August",
                    highlights: [
                        "Long daylight hours.",
                        "Open-air cinema, festivals.",
                        "High tourist volume & prices.",
                    ],
                    perfectFor: "Perfect For: Festival lovers, families, nightlife explorers"
                },
                {
                    image: "/senegal/travel-season-img3.webp",
                    season: "Autumn",
                    month: "September - November",
                    highlights: [
                        "Golden parks, wine season.",
                        "Fewer tourists, great photos.",
                        "Fashion Week buzz.",
                    ],
                    perfectFor: "Photographers, solo travelers, wine lovers"
                },
                {
                    image: "/senegal/travel-season-img4.webp",
                    season: "Winter",
                    month: "December - February",
                    highlights: [
                        "Christmas markets, cozy cafés.",
                        "Fewer crowds, better deals.",
                        "Occasional snow = pure magic.",
                    ],
                    perfectFor: "Budget travelers, romantics, festive moods"
                }
            ]
        },
        travelVideo: {
            image: "/senegal/destination-dt-faq-video-img.webp",
            videoUrl: "https://www.youtube-nocookie.com/embed/u31qwQUeGuM"
        },
        faq: [
            {
                question: "What Services Does Your Travel Agency Provide?",
                answer: <p>A travel agency typically provides a wide range of services to ensure a smooth and enjoyable travel experience. As like-<span className="font-medium text-black">Hotel booking, Flight Booking, Visa & Customized Travel Pakcge etc.</span></p>            },
            {
                question: "Do You Offer Customized Travel Packages?",
                answer: <p>Absolutely! We offer fully customized travel packages based on your interests, budget, and schedule. Whether you're planning <span className="font-medium text-black">a solo adventure, a family vacation, a romantic getaway, or a group tour</span>, our team will tailor every detail to create a personalized travel experience just for you.</p>,
            },
            {
                question: "Can I Book Flights, Hotels, and Tours Separately?",
                answer: <p>Yes, you can! We provide the flexibility to book <span className="font-medium text-black">flights, hotels, and tours separately</span> based on your specific needs. Whether you need just a flight, only accommodation, or want to add a tour later — we’re here to help you plan each part of your trip your way.</p>,
            },
            {
                question: "Do You Provide Visa Assistance?",
                answer: <p>Yes, we do! Our team offers complete <span className="font-medium text-black">visa assistance services</span> to help you navigate the application process smoothly. From providing guidance on required documents to scheduling appointments and submitting applications, we're here to support you every step of the way.</p>,
            },
            {
                question: "What Payment Methods Do You Accept?",
                answer: <p>We accept a variety of <span className="font-medium text-black">payment methods</span> to make your booking process easy and convenient. These include <span className="font-medium text-black">cash, bank transfers, mobile payments (such as bKash, Nagad), and major debit/credit cards.</span> If you have a preferred payment option, feel free to let us know!</p>,
            },
        ]
    },
};