import { Companies } from "./pages/home/Companies/Companies";
import { WhatWeProvide } from "./pages/home/WhatWeProvide/WhatWeProvide";
import { RecentProjects } from "./pages/home/RecentProjects/RecentProjects";
import { TrustUs } from "./pages/home/TrustUs/TrustUs";
import { CreativeProcess } from "./pages/home/CreativeProcess/CreativeProcess";
import { WordpressResources } from "./pages/home/WordpressResources/WordpressResources";
import { Testimonials } from "./pages/home/Testimonials/Testimonials";
import { Header } from "./pages/home/Header/Header";

export const Container = () => {
  return (
    <main className="max-w-[2000px] relative left-1/2 -translate-x-1/2">
      <Header />
      <Companies />
      <WhatWeProvide />
      <RecentProjects />
      <TrustUs />
      <CreativeProcess />
      <WordpressResources />
      <Testimonials />
    </main>
  );
};
