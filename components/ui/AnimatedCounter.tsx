"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
  duration?: number;
};

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  className,
  duration = 1.4,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    stiffness: 70,
    damping: 22,
    mass: 0.8,
    duration: duration * 1000,
  });
  const display = useTransform(spring, (latest) => {
    const fixed = latest.toFixed(decimals);
    return `${prefix}${Number(fixed).toLocaleString()}${suffix}`;
  });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  return <motion.span ref={ref} className={className}>{display}</motion.span>;
}
