import { HorizontalLine } from "../components/HorizontalLine";
import React from "react";
import { ShadowBox } from "../components/ShadowBox";
import { GridWrapper } from "../components/GridWrapper";
import { Photo } from "../components/Photo";
import { AboutTrackPattern } from "../components/AboutTrackPattern";
import { Resume } from "../components/Resume";
import siteMetadata from "../data/siteMetadata";

export const metadata = {
  title: "About | Sagar Waghmare",
  description: "Learn more about Sagar Waghmare, a full-stack developer specializing in MERN stack and Next.js.",
};

export default function AboutPage() {
  return (
    <div className="relative mt-14">
      <div className="relative space-y-10 md:space-y-16">
        {/* Title */}
        <GridWrapper className="space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-around lg:px-24">
            <div className="order-2 mx-auto max-w-lg lg:order-1 lg:m-0 lg:max-w-3xl lg:pr-12">
              <div className="text-center text-sm font-medium text-indigo-600 lg:text-left">
                <span>Hello!</span>
              </div>
              <h1 className="mx-auto max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-5xl lg:text-left lg:text-6xl lg:leading-[64px]">
                I&apos;m Sagar, a full-stack developer building scalable web applications.
              </h1>
            </div>
            <div className="order-1 my-12 flex-shrink-0 lg:order-2 lg:my-0">
              <div className="relative mx-auto w-full max-w-[400px]">
                <div className="relative grid grid-cols-3">
                  <div className="relative z-20 -translate-y-2">
                    <Photo
                      width={140}
                      height={140}
                      src="/images/Sagar/photo2.jpg"
                      alt="Sagar Waghmare"
                      direction="left"
                    />
                  </div>
                  <div className="relative z-30">
                    <Photo
                      width={140}
                      height={140}
                      src="/images/Sagar/photo1.jpg"
                      alt="Sagar Waghmare"
                      direction="right"
                    />
                  </div>
                  <div className="relative z-20 translate-y-4">
                    <Photo
                      width={140}
                      height={140}
                      src="/images/Sagar/photo3.jpg"
                      alt="Sagar Waghmare"
                      direction="left"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GridWrapper>

        <span className="absolute left-1/2 top-40 -translate-y-1/2 translate-x-1/2">
          <HorizontalLine />
        </span>

        {/* About */}
        <div className="relative space-y-8 text-center">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>About</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-xl text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                Here&apos;s my journey into software development
              </h2>
            </GridWrapper>
          </div>
          <div className="relative h-fit w-full overflow-hidden">
            <div className="absolute left-0 top-0 w-full md:left-4 lg:left-[355px] xl:left-[455px]">
              <AboutTrackPattern />
            </div>

            {/* Section 1 */}
            <div className="grid grid-cols-1 gap-8 py-12 pr-12 lg:grid-cols-2 lg:items-center lg:justify-between lg:py-32 lg:pb-20 xl:py-32">
              <div className="flex flex-col items-center text-left lg:order-2 lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <img
                      className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                      src="/images/Sagar/photo4.jpg"
                      alt="Sagar's journey"
                    />
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  The Beginning
                </h2>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  My journey into software development started during my BTech in Computer Science at Deogiri Institute. I was fascinated by how technology could solve real-world problems and create meaningful user experiences. This curiosity led me to dive deep into web development, starting with the fundamentals of HTML, CSS, and JavaScript.
                </p>
              </div>
              <div className="hidden lg:order-1 lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  <img
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                    src="/images/Sagar/photo4.jpg"
                    alt="Sagar's journey"
                  />
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="grid grid-cols-1 gap-8 py-24 lg:grid-cols-2 lg:items-center lg:justify-between lg:pl-12">
              <div className="flex flex-col items-center text-left lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <img
                      className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                      src="/images/Sagar/photo5.jpg"
                      alt="Sagar coding"
                    />
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  Mastering the Stack
                </h2>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  I quickly fell in love with React and the entire MERN stack ecosystem. Building full-stack applications allowed me to understand both client and server perspectives. I earned certifications from Meta for Frontend Development and completed comprehensive full-stack courses, solidifying my expertise in modern web technologies.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  <img
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                    src="/images/Sagar/photo5.jpg"
                    alt="Sagar coding"
                  />
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="grid grid-cols-1 gap-8 pr-12 lg:grid-cols-2 lg:items-center lg:justify-between xl:py-24">
              <div className="flex flex-col items-center text-left lg:order-2 lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <img
                      className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                      src="/images/Sagar/photo2.jpg"
                      alt="Projects showcase"
                    />
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  Building Real Solutions
                </h2>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  My passion for creating practical solutions led me to develop ProCraft AI Resume, an AI-powered resume builder using Next.js 15, Prisma, and modern authentication. I also built The Digital Cart, a full-featured e-commerce platform with Redux state management and secure payment integration.
                </p>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  These projects taught me not just about coding, but about user experience, scalability, and the importance of clean, maintainable code. Each challenge pushed me to learn more and think deeper about software architecture.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  <img
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                    src="/images/Sagar/photo2.jpg"
                    alt="Projects showcase"
                  />
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:justify-between lg:py-32 lg:pl-12 xl:py-24">
              <div className="flex flex-col items-center text-left lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <img
                      className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                      src="/images/Sagar/photo1.jpg"
                      alt="Current work"
                    />
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  Looking Forward
                </h2>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  Currently pursuing my BTech degree while actively building projects and expanding my skill set. I&apos;m particularly interested in modern web technologies like Next.js, TypeScript, and cloud platforms. My goal is to contribute to impactful products that make a difference.
                </p>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  When I&apos;m not coding, you&apos;ll find me solving problems on LeetCode, learning new technologies, or exploring the latest trends in web development. I&apos;m always eager to collaborate on exciting projects and connect with fellow developers.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  <img
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                    src="/images/Sagar/photo1.jpg"
                    alt="Current work"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="relative space-y-8 text-center">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>Experience</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                My work history and achievements timeline.
              </h2>
            </GridWrapper>
          </div>
        </div>
        <div className="space-y-16">
          <GridWrapper>
            <Resume />
          </GridWrapper>
        </div>

        {/* Education & Skills */}
        <div className="relative space-y-8 text-center">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>Education & Skills</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                My academic background and technical expertise
              </h2>
            </GridWrapper>
          </div>
        </div>

        <GridWrapper>
          <div className="space-y-8">
            {/* Education */}
            <div className="rounded-2xl border border-border-primary bg-bg-primary p-8">
              <h3 className="mb-6 text-2xl font-semibold text-text-primary">Education</h3>
              {siteMetadata.education.map((edu, index) => (
                <div key={index} className="mb-6 border-l-4 border-orange-primary pl-6">
                  <h4 className="text-lg font-semibold text-text-primary">{edu.degree}</h4>
                  <p className="text-text-secondary">{edu.institution}</p>
                  <p className="text-sm text-text-tertiary">{edu.period} • GPA: {edu.gpa}</p>
                </div>
              ))}
            </div>

            {/* Technical Skills */}
            <div className="rounded-2xl border border-border-primary bg-bg-primary p-8">
              <h3 className="mb-6 text-2xl font-semibold text-text-primary">Technical Skills</h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {Object.entries(siteMetadata.skills).map(([category, skills]) => (
                  <div key={category}>
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-text-secondary">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(skills as string[]).map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg bg-orange-secondary px-3 py-1.5 text-xs font-medium text-orange-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="rounded-2xl border border-border-primary bg-bg-primary p-8">
              <h3 className="mb-6 text-2xl font-semibold text-text-primary">Certifications</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {siteMetadata.certifications.map((cert, index) => (
                  <div key={index} className="border-l-4 border-orange-primary pl-6">
                    <h4 className="font-semibold text-text-primary">{cert.title}</h4>
                    <p className="text-sm text-text-secondary">{cert.issuer}</p>
                    <p className="text-xs text-text-tertiary">{cert.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GridWrapper>
      </div>
    </div>
  );
}
