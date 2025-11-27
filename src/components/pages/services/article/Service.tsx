import Image from "next/image";
import abstracdesign from "@/assets/images/Abstract Design.png";
import { ServicesArticleIcon } from "./ServiceIcon";
import { ServiceButton } from "./ServiceButton";

interface IService {
  title: string;
  description: string;
  price: string;
}

export const Service = ({ title, description, price }: IService) => {
  return (
    <article className="lg:w-[684px] w-[90%] py-10 bg-black/5 relative pt-1 rounded-2xl border border-white/10 grid grid-rows-[2fr_2fr_1fr]">
      <Image
        className="absolute "
        src={abstracdesign}
        width={784}
        height={740}
        alt=""
      />

      <div className="row-1 ">
        <ServicesArticleIcon />
      </div>

      <div className="md:mt-10 row-2 ">
        <h2 className="text-white font-semibold text-[30px] ">{title}</h2>
        <p className="text-xl text-white/50 lg:mx-20 mx-2">{description}</p>
      </div>

      <div className="lg:mx-20 mx-5 text-xl mb-0 row-3 flex items-end">
        <p className="flex lg:flex-row flex-col text-start justify-start gap-2  py-4">
          <span className="text-gray-400/40">Starts at Price: </span> ${price}
        </p>

        <ServiceButton href="/" />
      </div>
    </article>
  );
};
