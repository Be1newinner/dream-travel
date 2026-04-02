import ContactHero from "@/components/contact/ContactHero";
import ContactInfoCard from "@/components/contact/ContactInfoCard";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ConctactMap";

import { MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div>
      <ContactHero />

      {/* INFO CARDS */}
      <div className="max-w-7xl mx-auto py-28 px-4 grid md:grid-cols-3 gap-6">
        <ContactInfoCard
          icon={<MapPin size={40}  className="border rounded-full"/>}
          title="United State"
          value="Contact: +1 (212) 555-7890"
          bgColor="bg-[#E6F5A9] hover:bg-[#D4E890]"
          description="Skyline Plaza, 5th Floor, 123 Main Street Los Angeles, CA 90001, USA"
        />
        <ContactInfoCard
          icon={<MapPin size={40} className="border rounded-full" />}
          title="Dubai Office"
          value="Contact: +971 4 123 4567"
          bgColor="bg-[#F0F0F0] hover:bg-[#E0E0E0]"
          description="Office No. 1203, 12th Floor, Bay Tower, Al Abraj Street, Business Bay, Dubai, UAE"
        />
        <ContactInfoCard
          icon={<MapPin size={40} className="border rounded-full" />}
          title="United Kingdom"
          value="Contact: +44 20 7946 1234"
          bgColor="bg-[#BDEBCE] hover:bg-[#A8D9C0]"
          description="3rd Floor, 15 Bedford Street Covent Garden, London, WC2E 9HE, UK"
        />
      </div>

      {/* FORM + MAP */}
      <div className="max-w-4xl mx-auto px-4 pb-16 gap-10">
        <ContactForm />
      </div>
      <ContactMap />
    </div>
  );
}