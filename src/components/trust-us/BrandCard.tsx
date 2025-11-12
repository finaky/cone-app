interface IBrandCard {
  name: string;
  betterBg: boolean;
}

export const BrandCard = ({ name, betterBg }: IBrandCard) => {
  const style = betterBg
    ? { backgroundColor: "#FFDF00", color: "#000" }
    : { backgroundColor: "#1B1B1B" };
  return (
    <article
      style={style}
      className="w-[132px] h-[42px] rounded-full flex items-center justify-center text-xl font-bold"
    >
      {name}
    </article>
  );
};
