import { whatWeProvideCards } from "@/data/whatWeProvide";
import { WhatWeProvideCard } from "./WhatWeProvideCard";
import { FeaturedTag } from "../ui/FeaturedTag";
import { FeaturedTitle } from "../ui/FeaturedTitle";

export const WhatWeProvide = () => {
  return (
    <section className="max-w-[1400px] mx-auto flex flex-col justify-center text-center">
      <FeaturedTag text="Our Services" />
      <header>
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
