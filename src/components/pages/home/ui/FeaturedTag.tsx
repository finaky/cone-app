import { Sparkle } from "lucide-react";

export const FeaturedTag = ({ text }: { text: string }) => {
  return (
    <span className="py-2 px-2 flex items-center h-[38px] rounded-full bg-(--yellow)/10 text-(--yellow) text-[18px] leading-4 mx-auto">
      <Sparkle className="mr-2" />
      {text}
    </span>
  );
};
