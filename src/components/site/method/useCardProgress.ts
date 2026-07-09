import { useTransform, MotionValue, useMotionTemplate } from "framer-motion";

export function useCardProgress(
  scrollYProgress: MotionValue<number>,
  index: number,
  totalCards: number
) {
  const isLast = index === totalCards - 1;
  const startPushing = index / totalCards;
  const endPushing = (index + 1) / totalCards;

  const scale = useTransform(
    scrollYProgress, 
    [startPushing, endPushing], 
    isLast ? [1, 1] : [1, 0.92]
  );
  
  const y = useTransform(
    scrollYProgress, 
    [startPushing, endPushing], 
    isLast ? [0, 0] : [0, -40]
  );
  
  const opacity = useTransform(
    scrollYProgress, 
    [startPushing, endPushing, 1], 
    isLast ? [1, 1, 1] : [1, 1, 0.8]
  );
  
  const blurValue = useTransform(
    scrollYProgress, 
    [startPushing, endPushing], 
    isLast ? [0, 0] : [0, 2]
  );

  const filter = useMotionTemplate`blur(${blurValue}px)`;

  return { scale, y, opacity, filter };
}
