import { whatWeProvideCards } from "@/data/whatWeProvide";
import { WhatWeProvideCard } from "./WhatWeProvideCard";
import { FeaturedTag } from "../ui/FeaturedTag";
import { FeaturedTitle } from "../ui/FeaturedTitle";

export const WhatWeProvide = () => {
  return (
    <section className="max-w-[1400px] mx-auto  text-center">
      <header className="flex flex-col justify-center">
        <FeaturedTag text="Our Services" />
        <FeaturedTitle whiteText="WHAT DO WE" yellowText="PROVIDE" end="?" />
      </header>

      <div className="flex flex-wrap justify-center gap-5 mt-10">
        {whatWeProvideCards.map((card, i) => (
          <WhatWeProvideCard key={i} {...card} />
        ))}
      </div>
    </section>
  );
};
