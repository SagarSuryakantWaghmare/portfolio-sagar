"use client";

import { BentoCard } from "./BentoCard";
import siteMetadata from "@/app/data/siteMetadata";

interface AboutMeBentoProps {
  linkTo?: string;
}

export function AboutMeBento({ linkTo }: AboutMeBentoProps) {
  return (
    <BentoCard linkTo={linkTo} className="h-full">
      <div className="flex h-full flex-col justify-between">
        <div>
          <h3 className="mb-2 text-lg font-semibold text-text-primary">
            About Me
          </h3>
          <p className="text-sm leading-relaxed text-text-secondary">
            {siteMetadata.bio.substring(0, 180)}...
          </p>
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs text-text-tertiary">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>{siteMetadata.location}</span>
        </div>
      </div>
    </BentoCard>
  );
}
