import { Snowflake } from "lucide-react";

interface ICreativeProcessArticle {
  title: string;
  description: string;
}

export const CreativeProcessArticle = ({
  title,
  description,
}: ICreativeProcessArticle) => {
  return (
    <article className="flex gap-5 mt-5 text-start">
      <div className="bg-(--primary) w-16 h-16 rounded-full text-black flex items-center justify-center">
        <Snowflake size={24} />
      </div>
      <div className="max-xl:w-[80%]">
        <h2 className="font-extrabold text-2xl">{title}</h2>
        <p className="font-medium text-xl">{description}</p>
      </div>
    </article>
  );
};
