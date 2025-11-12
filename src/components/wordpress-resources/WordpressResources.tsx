"use client";
import { wordpressTabList } from "@/data/wordpressResources";
import { FeaturedTitle } from "../ui/FeaturedTitle";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const WordpressResources = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section className="mt-12 xl:mx-20">
      <header className="max-lg:text-center">
        <FeaturedTitle whiteText="WORDPRESS" yellowText="RESOURCES" />
      </header>

      <ul
        className="flex max-lg:justify-center font-bold text-[20px] lg:gap-10 gap-5 my-6"
        role="tablist"
        aria-label="WordPress resources categories"
      >
        {wordpressTabList.map((tabList, index) => (
          <li key={index} role="presentation">
            <button
              role="tab"
              className={`relative pb-2 cursor-pointer transition-colors  duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-yellow-400 after:origin-center after:scale-x-0 after:transition-transform after:duration-300 ${
                activeTab === tabList.id
                  ? "text-yellow-400 after:scale-x-100"
                  : "text-white hover:text-(--yellow) hover:after:scale-x-100"
              }`}
              aria-selected={activeTab === tabList.id}
              aria-controls={`tabpanel-${tabList.id}`}
              onClick={() => setActiveTab(tabList.id)}
            >
              {tabList.title}
            </button>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap max-lg:justify-center gap-5 text-black">
        {wordpressTabList[activeTab].resource.map(
          ({ title, image, website }, index) => (
            <article
              className="w-[295px] h-[318px] bg-white rounded-3xl mt-6"
              key={index}
            >
              <Image src={image} alt="" />

              <div className="grid grid-cols-[3fr_1fr] items-center h-19">
                <div className="mx-5">
                  <h2 className="text-[16px]">{title}</h2>
                  <p className="text-black/60">{website}</p>
                </div>

                <Link
                  className="w-16 h-[30px] flex items-center justify-center rounded-full"
                  style={{ backgroundColor: "var(--yellow)" }}
                  href="/"
                >
                  View
                </Link>
              </div>
            </article>
          )
        )}
      </div>
    </section>
  );
};
