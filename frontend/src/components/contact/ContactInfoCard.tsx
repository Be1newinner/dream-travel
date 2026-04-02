import Link from "next/link";
import { ReactNode } from "react";

// type Props = {
//   icon: ReactNode;
//   title: string;
//   value: string;
// };

export default function ContactInfoCard({ icon, title, value, description, bgColor }: { icon: ReactNode, title: string, value: string, description?: string, bgColor?: string }) {
  return (
    <div className={`border rounded-xl px-8 text-center shadow-sm hover:shadow-md transition py-14 ${bgColor}`}>
      <div className=" flex justify-center">{icon}</div>
      <h3 className="font-semibold text-2xl py-4">{title}</h3>
      <Link href={`tel:${value}`} className=" font-medium text-xl mt-2">{value}</Link>
      {description && <p className="text-base mt-4">{description}</p>}
    </div>
  );
}