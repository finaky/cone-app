import Image from "next/image";
import Link from "next/link";
import agency from "@/assets/images/agency.png";
import { HeroStats } from "@/data/config";
import { HeaderHeroStat } from "./HeaderHeroStat";
import { Section } from "@/components/Section";

export const HeaderHero = () => {
  return (
    <Section className="mt-[100px] grid lg:grid-cols-[2fr_1fr] grid-cols-1 lg:text-start text-center">
      <h1 className="font-black lg:ml-10 lg:text-[74px] text-[32px] lg:w-[90%] w-full lg:leading-[60px] leading-[30px]">
        WE CREATE BEAUTIFUL <span className="text-(--yellow)">EFFICIENT</span>{" "}
        WORDPRESS WEBSITES.
      </h1>

      <div className="lg:w-[400px] w-full max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center">
        <p className="font-medium w-[80%] lg:mt-0 mt-10">
          You need to get positive results when you spend hard earned marketing
          and promotions need to get positive results when you{" "}
        </p>

        <Link
          href={"/"}
          className="bg-(--yellow) text-(--black) w-[149px] h-14 flex justify-center items-center text-background font-extrabold text-[16px] rounded-lg mt-5"
        >
          Get Started
        </Link>
      </div>

      <Image
        src={agency}
        alt=""
        className="lg:w-[80%] w-full mt-16"
        loading="lazy"
      />

      <div className="lg:flex lg:flex-col lg:justify-center grid grid-cols-3">
        {HeroStats.map((stat, i) => (
          <HeaderHeroStat key={i} {...stat} />
        ))}
      </div>
    </Section>
  );
};
