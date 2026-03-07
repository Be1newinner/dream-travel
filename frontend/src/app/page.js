import Image from "next/image";
import Hero from "@/components/home/Hero";
import HeroSearch from "@/components/home/HeroSearch";
import Offer from "@/components/home/Offers";
import PopularPackages from "@/components/home/PopularPackage";
import TopDestination from "@/components/home/TopDestination";
import BestAgency from "@/components/home/BestAgency";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroSearch />
      <Offer />
      <PopularPackages />
      <TopDestination />
      <BestAgency />
    </>
  );
}
