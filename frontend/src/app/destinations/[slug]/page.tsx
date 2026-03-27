import { DestinationsData } from "@/lib/DestinationsData";
import Image from "next/image";

export default function ServicePage({ params }: any) {
    const { slug } = params;
    const data = DestinationsData[slug];

    if (!data) {
        return <h1 className="text-center py-20">Page Not Found</h1>
    }

    const { gallery, info, locations, whyChooseUs, customerExperience, bestTime, travelVideo } = data;

    return (
        <section>
            {gallery.map((item: any, index: number) => (
                <div key={index}>
                    <Image src={item.image} alt="" width={100} height={100} />
                </div>
            ))}
        </section>
    )
}