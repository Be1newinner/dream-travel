import Image from "next/image";
import Marquee from "react-fast-marquee";

const logos = [
  "/logo/partner-01.png",
  "/logo/partner-02.png",
  "/logo/partner-03.png",
  "/logo/partner-04.png",
  "/logo/partner-05.png",
  "/logo/partner-06.png",
];

export default function InfinityScroll() {
  return (
    <div className="max-w-7xl mx-auto py-10">
        <h1 className="text-2xl font-bold text-center mb-10">Those Company You Can Easily Trust!</h1>
      <Marquee
        pauseOnHover
        speed={50}
        gradient={false}
      >
        <div className="flex items-center gap-12">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`partner-${index}`}
              width={160}
              height={80}
              className="object-contain"
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
}