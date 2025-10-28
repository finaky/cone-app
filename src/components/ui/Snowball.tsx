interface Snowball {
  className: string;
}

export const Snowball = ({ className }: Snowball) => {
  return (
    <div className={`absolute ${className} z-0`}>
      <div className={`w-4 h-[200px] bg-white absolute`}></div>
      <div className={`w-4 h-[200px] bg-white absolute rotate-45`}></div>
      <div className={`w-4 h-[200px] bg-white absolute -rotate-45`}></div>
      <div className={`w-4 h-[200px] bg-white absolute rotate-90`}></div>
    </div>
  );
};
