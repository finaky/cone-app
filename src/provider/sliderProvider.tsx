import { useSlider } from "@/hooks/useSlider";
import { SliderContext } from "@/context/SliderContext";

export const SliderProvider = ({ children }: { children: React.ReactNode }) => {
  const slider = useSlider();
  return (
    <SliderContext.Provider value={slider}>{children}</SliderContext.Provider>
  );
};
