import { useRef } from "react";

export const useSwipeDrag = ({
  onSwipeLeft,
  onSwipeRight,
  threshold = 80,
}: {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  threshold?: number;
}) => {
  const startX = useRef(0);
  const lastX = useRef(0);

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    lastX.current = e.clientX;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    lastX.current = e.clientX;
  };

  const onPointerUp = () => {
    const delta = lastX.current - startX.current;

    if (delta < -threshold) onSwipeLeft();
    else if (delta > threshold) onSwipeRight();

    startX.current = 0;
    lastX.current = 0;
  };

  return { onPointerDown, onPointerMove, onPointerUp };
};
