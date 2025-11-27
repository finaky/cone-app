import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface IResourceArticle {
  image: StaticImageData;
  title: string;
  website: string;
}

export const ResourceArticle = ({
  image,
  title,
  website,
}: IResourceArticle) => {
  return (
    <article className="w-[295px] h-[318px] bg-white rounded-3xl mt-6">
      <Image loading="lazy" src={image} alt={`${title} image`} />

      <div className="grid grid-cols-[3fr_1fr] items-center h-19">
        <div className="mx-5">
          <h2 className="text-[16px]">{title}</h2>
          <p className="text-black/60">{website}</p>
        </div>

        <Link
          className="w-16 h-[30px] flex items-center justify-center rounded-full"
          style={{ backgroundColor: "var(--primary)" }}
          href="/"
        >
          View
        </Link>
      </div>
    </article>
  );
};
