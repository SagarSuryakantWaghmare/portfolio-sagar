"use client";

import { BentoCard } from "./BentoCard";
import siteMetadata from "@/app/data/siteMetadata";

interface ProjectCardProps {
  projectIndex?: number;
}

export function ProjectCard({ projectIndex = 0 }: ProjectCardProps) {
  const project = siteMetadata.projects[projectIndex];

  if (!project) return null;

  return (
    <BentoCard linkTo={project.liveUrl} className="h-full">
      <div className="flex h-full flex-col">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="text-lg font-semibold text-text-primary">
            {project.title.split("—")[0].trim()}
          </h3>
        </div>
        <p className="mb-4 text-sm text-text-secondary line-clamp-2">
          {project.description}
        </p>
        <div className="mt-auto">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </BentoCard>
  );
}
