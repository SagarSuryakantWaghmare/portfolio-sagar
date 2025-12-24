import { AnimatedProfilePicture } from "./components/AnimatedProfilePicture";
import { AnimatedText } from "./components/AnimatedText";
import { GridWrapper } from "./components/GridWrapper";
import { AboutMeBento } from "./components/AboutMeBento";
import { ProjectCard } from "./components/ProjectCard";
import { EducationCard } from "./components/EducationCard";
import { ContactCard } from "./components/ContactCard";
import { PhotoGallery } from "./components/PhotoGallery";
import { AnimatedMobilePhotos } from "./components/AnimatedMobilePhotos";
import { ConnectionsBento } from "./components/ConnectionsBento";
import { ToolboxBento } from "./components/ToolboxBento";
import { CalendarBento } from "./components/CalendarBento";
import { ChangelogBento } from "./components/ChangelogBento";
import { CommunityWallBento } from "./components/CommunityWallBento";
import GithubContributions from "./components/github-contributions";
import siteMetadata from "./data/siteMetadata";

export default function Home() {
  const PROFILE_DELAY = 0;
  const HEADING_DELAY = PROFILE_DELAY + 0.2;
  const PARAGRAPH_DELAY = HEADING_DELAY + 0.1;
  const PHOTOS_DELAY = PARAGRAPH_DELAY + 0.1;

  return (
    <section>
      <AnimatedProfilePicture delay={PROFILE_DELAY} />
      <div className="mt-6 space-y-10 md:mt-0 md:space-y-16">
        {/* Hero Section */}
        <section>
          <div className="relative text-balance">
            <GridWrapper>
              <AnimatedText
                as="h1"
                delay={HEADING_DELAY}
                className="mx-auto max-w-2xl text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]"
              >
                Hey, I&apos;m Sagar! <br /> Welcome to my portfolio!
              </AnimatedText>
            </GridWrapper>
            <GridWrapper>
              <div className="mt-4 text-center md:mt-8">
                <AnimatedText
                  as="p"
                  delay={PARAGRAPH_DELAY}
                  className="leading-8 text-text-secondary"
                >
                  {siteMetadata.bio}
                </AnimatedText>
              </div>
            </GridWrapper>
          </div>
          
          <div>
            {/* Desktop Photos */}
            <div className="relative hidden h-fit w-full items-center justify-center lg:flex">
              <PhotoGallery animationDelay={PHOTOS_DELAY} />
            </div>

            {/* Mobile Photos */}
            <AnimatedMobilePhotos delay={PHOTOS_DELAY} />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative space-y-10 md:space-y-16">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-orange-primary">
                <span>About</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-balance text-center text-3xl font-medium leading-10 tracking-tight text-text-primary md:text-4xl">
                Here&apos;s what sets me apart and makes me unique
              </h2>
            </GridWrapper>
          </div>

          <GridWrapper>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-12 lg:grid-rows-[14]">
              <div className="col-span-1 md:col-span-5 lg:col-span-5 lg:row-span-6">
                <AboutMeBento linkTo="/about" />
              </div>

              <div className="md:col-span-12 lg:col-span-7 lg:row-span-8">
                <ConnectionsBento linkTo="/connections" />
              </div>

              <div className="md:col-span-7 md:row-start-1 lg:col-span-5 lg:row-span-7">
                <ToolboxBento linkTo="/skills" />
              </div>

              <div className="md:col-span-12 lg:col-span-7 lg:row-span-5">
                <CalendarBento />
              </div>
            </div>
          </GridWrapper>
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative space-y-10 md:space-y-16">
          <div className="space-y-4 text-balance">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-orange-primary">
                <span>Projects</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-center text-3xl font-medium leading-10 tracking-tighter text-text-primary md:text-4xl">
                Building scalable web applications with modern technologies
              </h2>
            </GridWrapper>
          </div>

          <div className="z-10">
            <GridWrapper>
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                <ProjectCard projectIndex={0} />
                <ProjectCard projectIndex={1} />
              </div>
            </GridWrapper>
          </div>

          <GridWrapper>
            <div className="flex justify-center">
              <a
                href="/projects"
                className="inline-flex items-center rounded-full border border-border-primary bg-white px-6 py-3 text-sm font-medium text-text-primary hover:bg-bg-primary transition-all"
              >
                View All Projects
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </GridWrapper>
        </section>

        {/* GitHub Contributions Section */}
        <section className="relative space-y-10 md:space-y-16">
          <GridWrapper>
            <div className="rounded-2xl border border-border-primary bg-[#f6f8fa] p-4 md:p-6">
              <GithubContributions />
            </div>
          </GridWrapper>
        </section>

        {/* My Site Section */}
        <section className="relative space-y-10 md:space-y-16">
          <div className="space-y-4 text-balance">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-orange-primary">
                <span>My Site</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="text-center text-3xl font-medium leading-10 tracking-tighter text-text-primary md:mx-auto md:max-w-lg md:text-4xl">
                My site is a playful sandbox. Explore, experiment, && say hello
              </h2>
            </GridWrapper>
          </div>

          <GridWrapper>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
              <span className="col-span-1 h-[276px] sm:block md:hidden lg:block">
                <ChangelogBento />
              </span>
              <CommunityWallBento />
              <div className="rounded-2xl border border-border-primary bg-bg-primary p-6">
                <h3 className="mb-4 text-lg font-semibold text-text-primary">
                  Let&apos;s Connect
                </h3>
                <p className="text-text-secondary mb-6">
                  Interested in collaborating on a project or just want to chat about tech? Feel free to reach out!
                </p>
                <a
                  href="mailto:{siteMetadata.email}"
                  className="inline-flex items-center rounded-full border border-orange-primary bg-orange-primary px-6 py-3 text-sm font-medium text-white hover:bg-orange-600 transition-all"
                >
                  Send Message
                </a>
              </div>
            </div>
          </GridWrapper>
        </section>

        {/* Education & Contact Section */}
        <section id="contact" className="relative space-y-10 md:space-y-16">
          <div className="space-y-4 text-balance">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-orange-primary">
                <span>Background</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="text-center text-3xl font-medium leading-10 tracking-tighter text-text-primary md:mx-auto md:max-w-lg md:text-4xl">
                Education, certifications && let&apos;s connect
              </h2>
            </GridWrapper>
          </div>

          <GridWrapper>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
              <EducationCard />
              <div className="rounded-2xl border border-border-primary bg-bg-primary p-6">
                <h3 className="mb-4 text-lg font-semibold text-text-primary">
                  Certifications
                </h3>
                <div className="space-y-3">
                  {siteMetadata.certifications.map((cert) => (
                    <div key={cert.title} className="border-l-2 border-orange-primary pl-3">
                      <p className="font-medium text-text-primary text-sm">
                        {cert.title}
                      </p>
                      <p className="text-xs text-text-tertiary">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <ContactCard />
            </div>
          </GridWrapper>
        </section>
      </div>
    </section>
  );
}
