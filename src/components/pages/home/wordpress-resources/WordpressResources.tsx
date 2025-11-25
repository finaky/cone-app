"use client";
import { wordpressTabList } from "@/data/wordpressResources";
import { useState } from "react";
import { ResourceArticle } from "./ResourcesArticle";
import { ResourcesTablist } from "./ResourcesTablist";
import { Section } from "@/components/Section";
import { FeaturedTitle } from "../ui/FeaturedTitle";

export const WordpressResources = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <Section className="mt-12 xl:mx-20">
      <header className="max-lg:text-center">
        <FeaturedTitle whiteText="WORDPRESS" yellowText="RESOURCES" />
      </header>

      <ul
        className="flex max-lg:justify-center font-bold text-[20px] lg:gap-10 gap-5 my-6"
        role="tablist"
        aria-label="WordPress resources categories"
      >
        {wordpressTabList.map(({ id, title }) => (
          <ResourcesTablist
            key={id}
            activeTab={activeTab}
            tabListId={id}
            tabListTitle={title}
            setActiveTab={setActiveTab}
          />
        ))}
      </ul>

      <div className="flex flex-wrap max-lg:justify-center gap-5 text-black">
        {wordpressTabList[activeTab].resource.map((props, index) => (
          <ResourceArticle key={index} {...props} />
        ))}
      </div>
    </Section>
  );
};
