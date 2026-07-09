import { useTransform, MotionValue, useMotionTemplate } from "framer-motion";

export function useCardProgress(
  scrollYProgress: MotionValue<number>,
  index: number,
  totalCards: number
) {
  // Phase 1: Stacking (0 to 0.85)
  // Phase 2: Spreading (0.85 to 1.0)
  const spreadStart = 0.85;
  
  const startPushing = (index / totalCards) * spreadStart;
  const endPushing = ((index + 1) / totalCards) * spreadStart;

  // At the end of stacking, the card is pushed back
  const stackedScale = 1 - (totalCards - 1 - index) * 0.04; // e.g. 1, 0.96, 0.92, 0.88
  const stackedY = -(totalCards - 1 - index) * 20; // e.g. 0, -20, -40, -60

  const scale = useTransform(
    scrollYProgress, 
    [startPushing, endPushing, spreadStart, 1], 
    [1, 1, stackedScale, 1] // push back, then restore to 1
  );
  
  const y = useTransform(
    scrollYProgress, 
    [startPushing, endPushing, spreadStart, 1], 
    [0, 0, stackedY, 0] // push up, then restore to 0
  );
  
  const opacity = useTransform(
    scrollYProgress, 
    [startPushing, endPushing, spreadStart, 1], 
    [1, 1, 0.5 + index * 0.15, 1]
  );
  
  const blurValue = useTransform(
    scrollYProgress, 
    [startPushing, endPushing, spreadStart, 1], 
    [0, 0, (totalCards - 1 - index) * 1, 0]
  );

  const filter = useMotionTemplate`blur(${blurValue}px)`;

  // Spreading X for desktop (assuming ~280px spacing)
  const targetX = (index - (totalCards - 1) / 2) * 300;
  const targetYMobile = (index - (totalCards - 1) / 2) * 220;

  const spreadXDesktop = useTransform(
    scrollYProgress,
    [spreadStart, 1],
    [0, targetX]
  );

  const spreadYMobile = useTransform(
    scrollYProgress,
    [spreadStart, 1],
    [0, targetYMobile]
  );

  return { scale, y, opacity, filter, spreadXDesktop, spreadYMobile };
}
