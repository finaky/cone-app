import { FeaturedTitle } from "../ui/FeaturedTitle";
import Image from "next/image";
import headerBg from "@/assets/images/headerBg.png";
// import { desc } } from "framer-motion/client"; // To jest niepotrzebne i zostało usunięte.

interface ISectionHeader {
  whiteText: string;
  yellowText: string;
  description: string;
  end?: string;
}

export const SectionHeader = ({
  whiteText,
  yellowText,
  description,
  end,
}: ISectionHeader) => {
  return (
    <header className="relative w-full min-h-[600px] h-auto">
      <Image
        src={headerBg}
        alt=""
        className="w-full min-h-[600px] h-full object-cover brightness-30 hue-rotate-320"
        sizes="100vw"
      />

      <div className="absolute inset-0 lg:mx-[10%] mx-6 flex items-center ">
        <div className="max-w-[800px] **px-6 py-10**">
          <FeaturedTitle
            whiteText={whiteText}
            yellowText={yellowText}
            end={end}
          ></FeaturedTitle>
          <p className="text-white/50 mt-4">{description}</p>
        </div>
      </div>
    </header>
  );
};
