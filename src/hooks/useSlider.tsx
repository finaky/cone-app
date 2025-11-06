"use client";
import { recentProjects } from "@/data/recentProjects";
import { useState } from "react";

export const useSlider = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const projectsCount = recentProjects.length;

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projectsCount);
  };

  const setSlide = (index: number) => {
    if (index < 0) {
      setActiveIndex(projectsCount - 1);
      return;
    }

    if (index >= projectsCount) {
      setActiveIndex(0);
      return;
    }

    setActiveIndex(index);
  };

  const project = recentProjects[activeIndex] || recentProjects[0];

  return {
    title: project.title,
    description: project.description,
    image: project.image,
    inverted: project.inverted,
    setSlide,
    activeIndex,
    nextSlide,
  };
};
