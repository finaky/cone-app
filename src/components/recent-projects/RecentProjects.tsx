"use client";

import { SliderProvider } from "@/provider/sliderProvider";
import { ProjectsInner } from "./ProjectsInner";

export const RecentProjects = () => {
  return (
    <SliderProvider>
      <ProjectsInner />
    </SliderProvider>
  );
};
