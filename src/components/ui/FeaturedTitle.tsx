export const FeaturedTitle = ({
  whiteText,
  yellowText,
  end,
}: {
  whiteText: string;
  yellowText: string;
  end?: string;
}) => {
  return (
    <h2 className="leading-10 text-5xl font-black mt-4">
      {whiteText} <span className="text-(--yellow)">{yellowText}</span>
      {end}
    </h2>
  );
};
