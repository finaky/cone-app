interface IWhatWeProvideCard {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const WhatWeProvideCard = ({
  title,
  description,
  icon,
  color,
}: IWhatWeProvideCard) => {
  const textColor = color == "FFDF00" ? "black" : "white";
  const opposedTextColor = color == "FFDF00" ? "white" : "black";

  return (
    <div
      className="w-[400px] h-[300px] text-start rounded-3xl"
      style={{ backgroundColor: "#" + color, color: textColor }}
    >
      <div
        className="w-[72px] h-[72px] rounded-full mx-10 mt-10 flex items-center justify-center"
        style={{ backgroundColor: textColor }}
      >
        <div className="z-10" style={{ color: opposedTextColor }}>
          {icon}
        </div>
      </div>
      <p className="font-extrabold text-2xl mx-10 mt-5 font-cabinet-grotesk">
        {title}
      </p>
      <p className="font-medium text-[18px] mx-10">{description}</p>
    </div>
  );
};
