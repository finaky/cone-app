"use client";
import { StaticImageData } from "next/image";
import { createContext, useContext } from "react";
interface SliderContextType {
  title: string;
  description: string;
  image: StaticImageData;
  inverted: boolean;
  activeIndex: number;
  setSlide: (index: number) => void;
  nextSlide: () => void;
}

export const SliderContext = createContext<SliderContextType | null>(null);
export const useSliderContext = () => {
  const context = useContext(SliderContext);

  if (!context) {
    throw new Error("useSliderContext must be used inside SliderProvider!");
  }

  return context;
};
