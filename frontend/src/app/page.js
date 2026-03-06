import Image from "next/image";
import Hero from "@/components/home/Hero";
import HeroSearch from "@/components/home/HeroSearch";
import Offer from "@/components/home/Offers";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroSearch />
      <Offer />
    </>
  );
}
