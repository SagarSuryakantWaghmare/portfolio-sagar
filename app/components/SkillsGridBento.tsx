"use client";

import { BentoCard } from "./BentoCard";
import siteMetadata from "@/app/data/siteMetadata";

interface SkillsBentoProps {
  linkTo?: string;
}

export function SkillsBento({ linkTo }: SkillsBentoProps) {
  const { skills } = siteMetadata;
  const allSkills = [
    ...skills.languages.slice(0, 3),
    ...skills.frontend.slice(0, 3),
    ...skills.backend.slice(0, 2),
  ];

  return (
    <BentoCard linkTo={linkTo} className="h-full">
      <div className="flex h-full flex-col">
        <h3 className="mb-4 text-lg font-semibold text-text-primary">
          Tech Stack
        </h3>
        <div className="flex flex-wrap gap-2">
          {allSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg bg-orange-secondary px-3 py-1.5 text-xs font-medium text-orange-primary"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-4">
          <p className="text-xs text-text-tertiary">
            {skills.languages.length + skills.frontend.length + skills.backend.length}+ technologies
          </p>
        </div>
      </div>
    </BentoCard>
  );
}
