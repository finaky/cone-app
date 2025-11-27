import { MoveUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface IRecentProjectCard {
  title: string;
  description: string;
  image: StaticImageData;
  inverted: boolean;
}

export const RecentProjectCard = ({
  title,
  description,
  image,
  inverted,
}: IRecentProjectCard) => {
  return (
    <div className="w-[400px] h-[300px] relative -top-50 bg-background rounded-3xl text-white">
      {inverted && (
        <Image loading="lazy" src={image} className="rounded-t-3xl" alt="" />
      )}

      <div
        className={`h-[200px] bg-[#1D1D1D] ${
          +inverted ? "rounded-b-3xl" : "rounded-t-3xl"
        }`}
      >
        <div className="flex items-center relative top-10 ml-5">
          <div className="w-28 h-0.5 bg-white"></div>
          <p className="text-2xl font-extrabold leading-[30px] ml-6">{title}</p>
        </div>

        <div className="flex items-center mt-10 relative top-10 ml-5">
          <p className="text-xl font-medium leading-[30px] max-w-[158px]">
            {description}
          </p>

          <Link
            href={"/"}
            className="w-16 h-16 bg-(--primary) rounded-full absolute right-10 text-black flex items-center justify-center"
          >
            <MoveUpRight size={30} />
          </Link>
        </div>
      </div>

      {!inverted && <Image src={image} className="rounded-b-3xl" alt="" />}
    </div>
  );
};
