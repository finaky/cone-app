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
    <h2 className="leading-12 text-5xl font-black mt-4">
      {whiteText} <span className="text-(--primary)">{yellowText}</span>
      {end}
    </h2>
  );
};
