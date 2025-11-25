import { Star } from "lucide-react";
import { TestimonialFooter } from "./TestimonialFooter";
import { useCallback, useState } from "react";
import { testimonials } from "@/data/testimonials";

interface ITestimonial {
  star: number;
  review: string;
  author: string;
}

export const TestimonialArticle = () => {
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);
  const { star, review, author }: ITestimonial =
    testimonials[activeTestimonial];

  const prevTestimonial = useCallback(() => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  const nextTestimonial = useCallback(() => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  }, []);

  return (
    <article className="max-w-[600px] max-xl:mx-auto">
      <div className="flex">
        {Array.from({ length: star }).map((_, i) => (
          <Star fill="yellow" strokeWidth={0} key={i} size={32} />
        ))}
      </div>

      <p className="font-medium text-xl leading-9">{review}</p>
      <TestimonialFooter
        author={author}
        prevTestimonial={prevTestimonial}
        nextTestimonial={nextTestimonial}
      />
    </article>
  );
};
