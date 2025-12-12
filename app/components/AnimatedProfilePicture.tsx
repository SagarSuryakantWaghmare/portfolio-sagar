"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AnimatedProfilePictureProps {
  delay?: number;
}

export function AnimatedProfilePicture({
  delay = 0,
}: AnimatedProfilePictureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
        delay,
      }}
      className="relative my-5 md:mt-9"
    >
      <motion.svg
        className="mx-auto"
        width="148"
        height="148"
        viewBox="0 0 148 148"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="74"
          cy="74"
          r="73.5"
          stroke="#D6DADE"
          strokeOpacity="0.5"
        />
        <defs>
          <clipPath id="circleClip">
            <circle cx="74" cy="74" r="64" />
          </clipPath>
        </defs>
        <image
          href="/images/Sagar/photo1.jpg"
          x="10"
          y="10"
          width="128"
          height="128"
          clipPath="url(#circleClip)"
          preserveAspectRatio="xMidYMid slice"
        />
      </motion.svg>
    </motion.div>
  );
}
