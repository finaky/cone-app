import { Companies } from "./pages/home/companies/Companies";
import { Header } from "./layout/header/Header";
import { WhatWeProvide } from "./pages/home/what-we-provide/WhatWeProvide";
import { RecentProjects } from "./pages/home/recent-projects/RecentProjects";
import { TrustUs } from "./pages/home/trust-us/TrustUs";
import { CreativeProcess } from "./pages/home/creative-process/CreativeProcess";
import { WordpressResources } from "./pages/home/wordpress-resources/WordpressResources";
import { Testimonials } from "./pages/home/testimonials/Testimonials";

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
