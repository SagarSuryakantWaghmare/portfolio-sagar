import { GridWrapper } from "@/app/components/GridWrapper";
import siteMetadata from "@/app/data/siteMetadata";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Sagar Waghmare",
  description: "A collection of my favorite projects showcasing full-stack development, AI integration, and modern web technologies.",
};

interface ProjectImageProps {
  src: string;
  alt: string;
}

function ProjectImage({ src, alt }: ProjectImageProps) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border-primary shadow-lg">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
      />
    </div>
  );
}

export default function ProjectPage() {
  const projects = siteMetadata.projects;

  return (
    <div className="relative space-y-16 pb-16">
      <GridWrapper>
        <h1 className="mx-auto mt-16 max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
          A collection of my favorite works.
        </h1>
      </GridWrapper>

      <GridWrapper className="space-y-12">
        {projects.map((project) => (
          <div key={project.title} className="space-y-12">
            <GridWrapper className="px-10">
              <ProjectImage src={project.image} alt={project.title} />
            </GridWrapper>
            <GridWrapper className="px-10">
              <div className="max-w-2xl text-balance">
                <h2 className="mb-3 text-2xl font-medium leading-6 tracking-tight text-slate-900 md:leading-none">
                  {project.title}
                </h2>
                <p className="mb-3 flex-grow text-base leading-6 text-text-secondary">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-orange-secondary px-3 py-1 text-xs font-medium text-orange-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="mb-4 space-y-1 text-sm text-text-secondary">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg
                        className="mt-1 h-4 w-4 flex-shrink-0 text-orange-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  <a
                    className="inline-flex items-center text-sm font-medium text-orange-primary hover:text-orange-600 transition-colors"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Live Demo
                    <svg
                      className="relative ml-2.5 mt-px overflow-visible"
                      width="3"
                      height="6"
                      viewBox="0 0 3 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M0 0L3 3L0 6"></path>
                    </svg>
                  </a>
                  <a
                    className="inline-flex items-center text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                    <svg
                      className="relative ml-2.5 mt-px overflow-visible"
                      width="3"
                      height="6"
                      viewBox="0 0 3 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M0 0L3 3L0 6"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </GridWrapper>
          </div>
        ))}
      </GridWrapper>
    </div>
  );
}
