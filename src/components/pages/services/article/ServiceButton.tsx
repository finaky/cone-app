import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface IServiceButton {
  href: string;
}

export const ServiceButton = ({ href }: IServiceButton) => {
  return (
    <div className="flex items-center text-sm justify-center ml-auto border border-white/5 bg-gray-700/12 rounded-full py-2 pl-5 pr-2 gap-5">
      <p>Book a Call</p>
      <Link href={href} className="rounded-full bg-black py-2 px-5">
        <ArrowRight />
      </Link>
    </div>
  );
};
