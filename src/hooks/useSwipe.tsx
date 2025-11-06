import { useRef } from "react";

interface SwipeOptions {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  threshold?: number;
}

export const useSwipe = ({
  onSwipeLeft,
  onSwipeRight,
  threshold = 50,
}: SwipeOptions) => {
  const startX = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;

    const deltaX = e.changedTouches[0].clientX - startX.current;

    if (Math.abs(deltaX) > threshold) {
      if (deltaX < 0) onSwipeLeft();
      else onSwipeRight();
    }

    startX.current = null;
  };

  return { onTouchStart, onTouchEnd };
};
