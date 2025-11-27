interface HeaderHeroStat {
  count: number;
  description: string;
}

export const HeaderHeroStat = ({ count, description }: HeaderHeroStat) => {
  return (
    <div>
      <p className="font-black text-[44px] leading-10 mt-10 ">
        {count}
        <span className="text-(--primary)">+</span>
      </p>

      <p className="font-medium text-[20px]">{description}</p>

      <div className="w-[60%] lg:h-0.5 bg-white mt-5"></div>
    </div>
  );
};
