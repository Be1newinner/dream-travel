// import { CarouselPlugin } from "@/components/destination/Gallery";
import { DestinationsData } from "@/lib/DestinationsData";
import { Gallery } from "@/components/destination/Gallery";

export default async function ServicePage({ params }: PageProps<"/destinations/[slug]">) {
    const { slug } = await params;
    const data = DestinationsData[slug];

    // if (!data) {
    //     return <h1 className="text-center py-20">Page Not Found</h1>
    // }

    // const { Gallery, info, locations, whyChooseUs, customerExperience, bestTime, travelVideo } = data;

    return (
        <section>
            <Gallery images={data?.gallery?.images} />
        </section>
    )
}