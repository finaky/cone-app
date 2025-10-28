import { companies } from "@/data/config";
import Image from "next/image";

export const Companies = () => {
  return (
    <section className="mt-16 w-full relative overflow-hidden h-[500px]">
      <div className="absolute w-full lg:h-[100px] h-[72px] bg-(--yellow) -rotate-3 mt-20 flex lg:gap-25 gap-5">
        {companies.map((company, index) => (
          <Image
            src={company}
            key={index}
            alt=""
            className="brightness-0 -rotate-3"
          />
        ))}
      </div>

      <div className="absolute w-full lg:h-[100px] h-[72px] backdrop-blur-2xl rotate-3 mt-20 flex lg:gap-25 gap-10">
        {companies.map((company, index) => (
          <Image src={company} key={index} alt="" className="-rotate-3" />
        ))}
      </div>
    </section>
  );
};
