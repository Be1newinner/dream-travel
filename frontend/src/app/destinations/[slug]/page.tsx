// import { CarouselPlugin } from "@/components/destination/Gallery";
import { DestinationsData } from "@/lib/DestinationsData";
import { Gallery } from "@/components/destination/Gallery";
import Info from "@/components/destination/Info";
import Locations from "@/components/destination/Locations";
import WhyChooseUs from "@/components/destination/WhyChooseUs";
import CustomerExperience from "@/components/destination/CustomerExperience";
import BestTime from "@/components/destination/BestTime";
import TravelVideo from "@/components/destination/TravelVideo";
import FAQ from "@/components/destination/FAQ";
import OneDayTrip from "@/components/home/OneDayTrip";

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
            <WhyChooseUs heading={data?.whyChooseUs?.heading} description={data?.whyChooseUs.description} cards={data?.whyChooseUs.cards} highlights={data?.whyChooseUs.highlights}/>
            <CustomerExperience heading={data?.customerExperience?.heading} image={data?.customerExperience?.images}  />
            <BestTime heading ={data?.bestTime?.heading} cards={data?.bestTime?.cards}/>
            <TravelVideo  image={data?.travelVideo?.image} videoUrl={data?.travelVideo?.videoUrl}/>
            <FAQ faqData={data?.faq} />
            <OneDayTrip />
        </section>
    )
}