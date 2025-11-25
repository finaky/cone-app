"use client";

import { useSliderContext } from "@/context/SliderContext";

export const RecentProjectSliderPagination = ({ index }: { index: number }) => {
  const { setSlide, activeIndex } = useSliderContext();

  const baseClassName =
    "h-1 rounded-full cursor-pointer transition-colors duration-300 w-16";

  const activeClassName =
    activeIndex === index ? "bg-(--yellow)" : "bg-(--yellow)/50";

  const combinedClassName = `${baseClassName} ${activeClassName}`;

  return (
    <div onClick={() => setSlide(index)} className={combinedClassName}></div>
  );
};
