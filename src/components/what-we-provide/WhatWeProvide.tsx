import { whatWeProvideCards } from "@/data/whatWeProvide";
import { Sparkle } from "lucide-react";
import { WhatWeProvideCard } from "./WhatWeProvideCard";

export const WhatWeProvide = () => {
  return (
    <section className="max-w-[1240px] mx-auto flex flex-col justify-center text-center">
      <p className="flex justify-center items-center w-[159px] h-[38px] rounded-full bg-(--yellow)/10 text-(--yellow) text-[18px] leading-4 mx-auto">
        <Sparkle />
        Our Services
      </p>

      <h2 className="leading-10 text-5xl font-black mt-4">
        WHAT DO WE <span className="text-(--yellow)">PROVIDE</span>?
      </h2>

      <div className="flex flex-wrap justify-center gap-5 mt-10">
        {whatWeProvideCards.map((card, i) => (
          <WhatWeProvideCard key={i} {...card} />
        ))}
      </div>
    </section>
  );
};
