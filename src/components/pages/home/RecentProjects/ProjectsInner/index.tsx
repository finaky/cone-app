import { MobileSlider } from "./MobileSlider";
import { DesktopGrid } from "./DesktopGrid";
import { ProjectHeader } from "./ProjectsHeader";
import { Pagination } from "./Pagination";
import { Section } from "@/components/Section";

export const ProjectsInner = () => {
  return (
    <Section className="w-max-[1400px] relative mt-32">
      <ProjectHeader />
      <MobileSlider />
      <DesktopGrid />
      <Pagination />
    </Section>
  );
};
