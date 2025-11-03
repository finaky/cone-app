import { Companies } from "./companies/Companies";
import { Header } from "./header/Header";
import { WhatWeProvide } from "./what-we-provide/WhatWeProvide";

export const Container = () => {
  return (
    <div className="max-w-[2000px] relative left-1/2 -translate-x-1/2">
      <Header />
      <Companies />
      <WhatWeProvide />
    </div>
  );
};
