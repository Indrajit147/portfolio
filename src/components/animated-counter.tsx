"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedCounter({
  value,
  suffix = ""
}: {
  value: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}
