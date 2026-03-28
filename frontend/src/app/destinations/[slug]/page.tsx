// import { CarouselPlugin } from "@/components/destination/Gallery";
import { DestinationsData } from "@/lib/DestinationsData";
import { Gallery } from "@/components/destination/Gallery";
import Info from "@/components/destination/Info";
import Locations from "@/components/destination/Locations";

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
            <Info heading={data?.info?.heading} links={data?.info?.links} description={data?.info?.description} timeToVisit={data?.info?.timeToVisit} />
            <Locations heading={data?.locations?.heading} places={data?.locations?.places} />
        </section>
    )
}