import { motion } from "framer-motion";
import { RecentProjectCard } from "../RecentProjectCard";
import { useSliderContext } from "@/context/SliderContext";
import { useSwipe } from "@/hooks/useSwipe";
import { useSwipeDrag } from "@/hooks/useSwipeDrag";

export const MobileSlider = () => {
  const { title, description, image, inverted, activeIndex, setSlide } =
    useSliderContext();

  const { onTouchStart, onTouchEnd } = useSwipe({
    onSwipeLeft: () => setSlide(activeIndex + 1),
    onSwipeRight: () => setSlide(activeIndex - 1),
  });

  const { onPointerDown, onPointerMove, onPointerUp } = useSwipeDrag({
    onSwipeLeft: () => setSlide(activeIndex + 1),
    onSwipeRight: () => setSlide(activeIndex - 1),
  });

  return (
    <motion.div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="flex flex-wrap justify-center gap-10 2xl:hidden"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      animate={{ x: 0 }}
      initial={{ x: 0 }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(e, info) => {
        if (info.offset.x < -100) setSlide(activeIndex + 1);
        if (info.offset.x > 100) setSlide(activeIndex - 1);
      }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
    >
      <RecentProjectCard
        title={title}
        description={description}
        image={image}
        inverted={inverted}
      />
    </motion.div>
  );
};
