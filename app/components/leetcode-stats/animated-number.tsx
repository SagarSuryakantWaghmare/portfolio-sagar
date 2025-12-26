"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Props {
  number: number;
}

export default function AnimatedNumber({ number }: Props) {
  const [displayNumber, setDisplayNumber] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 1000;
    const steps = 60;
    const increment = number / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= number) {
        setDisplayNumber(number);
        clearInterval(timer);
      } else {
        setDisplayNumber(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, number]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayNumber.toLocaleString()}
    </span>
  );
}
