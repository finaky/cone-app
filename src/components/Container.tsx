import { Companies } from "./companies/Companies";
import { CreativeProcess } from "./creative-process/CreativeProcess";
import { Header } from "./header/Header";
import { RecentProjects } from "./recent-projects/RecentProjects";
import { TrustUs } from "./trust-us/TrustUs";
import { WhatWeProvide } from "./what-we-provide/WhatWeProvide";

export const Container = () => {
  return (
    <div className="max-w-[2000px] relative left-1/2 -translate-x-1/2">
      <Header />
      <Companies />
      <WhatWeProvide />
      <RecentProjects />
      <TrustUs />
      <CreativeProcess />
    </div>
  );
};
