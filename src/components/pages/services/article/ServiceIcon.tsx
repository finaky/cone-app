import { Smartphone } from "lucide-react";

export const ServicesArticleIcon = () => {
  return (
    <div className="w-[172px] h-[172px] border-3 border-white/5 bg-linear-to-b from-black/50 via-transparent to-transparent rounded-full flex items-center justify-center mx-auto mt-20">
      <div className="w-[132px] h-[132px] border-3 border-white/5 rounded-full flex items-center justify-center">
        <div className="w-[84px] h-[84px] border-3 border-white/5 rounded-full flex items-center justify-center">
          <Smartphone size={48} />
        </div>
      </div>
    </div>
  );
};
