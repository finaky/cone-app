import { ChevronLeft, ChevronRight } from "lucide-react";

interface ITestimonialFooter {
  author: string;
  prevTestimonial: () => void;
  nextTestimonial: () => void;
}

export const TestimonialFooter = ({
  author,
  prevTestimonial,
  nextTestimonial,
}: ITestimonialFooter) => {
  return (
    <footer className="font-bold text-2xl leading-9 grid grid-cols-2 max-w-[570px] mt-10">
      {author}
      <div className="flex ml-auto">
        <button
          className="p-3 rounded-full cursor-pointer"
          onClick={prevTestimonial}
        >
          <ChevronLeft />
        </button>

        <button
          className="bg-(--yellow) text-black p-3 rounded-full cursor-pointer"
          onClick={nextTestimonial}
        >
          <ChevronRight />
        </button>
      </div>
    </footer>
  );
};
