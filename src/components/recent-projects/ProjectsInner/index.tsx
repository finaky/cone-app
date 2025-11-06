import { MobileSlider } from "./MobileSlider";
import { DesktopGrid } from "./DesktopGrid";
import { ProjectHeader } from "./ProjectsHeader";
import { Pagination } from "./Pagination";

export const ProjectsInner = () => {
  return (
    <section className="w-max-[1400px] relative mt-32">
      <ProjectHeader />
      <MobileSlider />
      <DesktopGrid />
      <Pagination />
    </section>
  );
};
