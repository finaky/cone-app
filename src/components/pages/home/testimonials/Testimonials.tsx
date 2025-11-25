"use client";
import Image from "next/image";
import { FeaturedTag } from "../ui/FeaturedTag";
import { FeaturedTitle } from "../ui/FeaturedTitle";
import testimonials_img from "@/assets/images/testimonials.png";
import { TestimonialArticle } from "./TestimonialArticle";
import { Section } from "@/components/Section";

export const Testimonials = () => {
  return (
    <Section className="mx-auto mt-12">
      <header className="flex flex-col justify-center text-center">
        <FeaturedTag text="Testimonials" />
        <FeaturedTitle whiteText="WHAT OUR CLIENTS " yellowText="SAY" end="?" />
      </header>

      <div className="grid xl:grid-cols-2 grid-cols-1 items-center justify-center">
        <div className="mx-auto">
          <Image src={testimonials_img} alt="testimonials illustration" />
        </div>

        <TestimonialArticle />
      </div>
    </Section>
  );
};
