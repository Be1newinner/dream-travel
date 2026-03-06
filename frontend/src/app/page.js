import Image from "next/image";
import Hero from "@/components/home/Hero";
import HeroSearch from "@/components/home/HeroSearch";
import Offer from "@/components/home/Offers";
import PopularPackages from "@/components/home/PopularPackage";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroSearch />
      <Offer />
      <PopularPackages />
    </>
  );
}
