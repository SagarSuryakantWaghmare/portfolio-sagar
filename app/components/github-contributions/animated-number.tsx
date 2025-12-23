"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

interface Props {
  number: number;
}

export default function AnimatedNumber({ number }: Props) {
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    spring.set(number);
  }, [spring, number]);

  return <motion.span>{display}</motion.span>;
}
