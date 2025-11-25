import { recentProjects } from "@/data/recentProjects";
import { RecentProjectCard } from "../RecentProjectCard";

export const DesktopGrid = () => {
  return (
    <div className="2xl:flex hidden flex-wrap justify-center gap-10 ">
      {recentProjects.map((props, index) => (
        <RecentProjectCard key={index} {...props} />
      ))}
    </div>
  );
};
