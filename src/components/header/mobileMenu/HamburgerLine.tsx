interface Line {
  className: string;
}

export const HamburgerLine = ({ className }: Line) => {
  return (
    <span
      className={`absolute h-1 w-12 bg-white rounded-full transition-all duration-300 ${className}`}
    ></span>
  );
};
