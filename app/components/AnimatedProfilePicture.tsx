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
      className="flex justify-center pt-12"
    >
      <div className="relative h-20 w-20 overflow-hidden rounded-full ring-2 ring-border-primary ring-offset-4 ring-offset-bg-primary">
        <Image
          src="/images/profile.svg"
          alt="Sagar Waghmare"
          fill
          className="object-cover"
          priority
        />
      </div>
    </motion.div>
  );
}
