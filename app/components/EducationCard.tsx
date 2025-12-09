"use client";

import { BentoCard } from "./BentoCard";
import siteMetadata from "@/app/data/siteMetadata";

interface EducationCardProps {
  linkTo?: string;
}

export function EducationCard({ linkTo }: EducationCardProps) {
  const edu = siteMetadata.education[0];

  return (
    <BentoCard linkTo={linkTo} className="h-full">
      <div className="flex h-full flex-col">
        <div className="mb-1 flex items-center gap-2">
          <svg
            className="h-5 w-5 text-indigo-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          <h3 className="text-lg font-semibold text-text-primary">Education</h3>
        </div>
        <div className="mt-2">
          <p className="font-medium text-text-primary">{edu.degree}</p>
          <p className="mt-1 text-sm text-text-secondary">
            {edu.institution}
          </p>
          <p className="mt-1 text-xs text-text-tertiary">
            {edu.period} • GPA: {edu.gpa}
          </p>
        </div>
      </div>
    </BentoCard>
  );
}
