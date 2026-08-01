"use client";

import { useTransform, MotionValue, useMotionTemplate } from "framer-motion";

export function useCardProgress(
  scrollYProgress: MotionValue<number>,
  index: number,
  totalCards: number,
) {
  const isLast = index === totalCards - 1;
  const startPushing = index / totalCards;
  const endPushing = (index + 1) / totalCards;

  // Slightly overlapping ranges for smoother handoff between stacked cards
  const softStart = Math.max(0, startPushing - 0.02);
  const softEnd = Math.min(1, endPushing + 0.02);

  const scale = useTransform(
    scrollYProgress,
    [softStart, startPushing, endPushing, softEnd],
    isLast ? [1, 1, 1, 1] : [1, 1, 0.94, 0.92],
  );

  const y = useTransform(
    scrollYProgress,
    [softStart, startPushing, endPushing, softEnd],
    isLast ? [0, 0, 0, 0] : [0, 0, -28, -48],
  );

  const opacity = useTransform(
    scrollYProgress,
    [startPushing, endPushing, Math.min(1, endPushing + 0.15)],
    isLast ? [1, 1, 1] : [1, 0.95, 0.75],
  );

  const blurValue = useTransform(
    scrollYProgress,
    [startPushing, endPushing],
    isLast ? [0, 0] : [0, 1.5],
  );

  const filter = useMotionTemplate`blur(${blurValue}px)`;

  return { scale, y, opacity, filter };
}
