import Image from "next/image";
import Hero from "@/components/home/Hero";
import HeroSearch from "@/components/home/HeroSearch";
import Offer from "@/components/home/Offers";
import PopularPackages from "@/components/home/PopularPackage";
import TopDestination from "@/components/home/TopDestination";
import BestAgency from "@/components/home/BestAgency";
// import Counter from "@/components/home/Counter";
import OneDayTrip from "@/components/home/OneDayTrip";
import TourGuided from "@/components/home/TourGuided";
import HearFromTraveler from "@/components/home/HearFromTraveler";
import InfinityScroll from "@/components/home/Marquee";
import TravelInspiration from "@/components/home/TravelInspiration";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroSearch />
      <Offer />
      <PopularPackages />
      <TopDestination />
      <BestAgency />
      {/* <Counter /> */}
      <OneDayTrip />
      <TourGuided />
      <HearFromTraveler />
      <InfinityScroll />
      <TravelInspiration />
      <Newsletter />
    </>
  );
}
