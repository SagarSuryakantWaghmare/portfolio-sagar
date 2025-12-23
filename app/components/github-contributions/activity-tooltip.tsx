"use client";

import { ReactNode, useState } from "react";

interface Props {
  block: ReactNode;
  count: number;
  date: Date;
}

export default function ActivityTooltip({ block, date, count }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {block}
      {isVisible && (
        <div className="absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-3 py-1.5 text-xs text-white shadow-lg">
          {`${count} contributions on ${formattedDate}`}
          <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
        </div>
      )}
    </div>
  );
}
