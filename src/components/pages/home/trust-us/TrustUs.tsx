import { trustUs } from "@/data/trustUs";
import { BrandCard } from "./BrandCard";
import { Section } from "@/components/Section";
import { FeaturedTag } from "@/components/ui/FeaturedTag";
import { FeaturedTitle } from "@/components/ui/FeaturedTitle";

export const TrustUs = () => {
  return (
    <Section className="max-w-[1400px] mx-auto flex flex-col justify-center text-center mt-16">
      <FeaturedTag text="Award Winning WordPress Agency" />
      <header>
        <FeaturedTitle whiteText="THEY TRUST " yellowText="US" />
      </header>

      <div className="flex justify-center items-center flex-wrap gap-2 mt-12">
        {trustUs.map((item) => (
          <BrandCard key={item.id} {...item} />
        ))}
      </div>
    </Section>
  );
};
