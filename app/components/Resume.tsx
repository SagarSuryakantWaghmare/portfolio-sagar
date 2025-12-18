import { Timeline } from "./Timeline";

type ResumeData = {
  experiences: Array<{
    company: string;
    period: string;
    positions: Array<{
      title: string;
      description: string[];
    }>;
  }>;
  avatarUrl: string;
};

const resumeData: ResumeData = {
  experiences: [
    {
      company: "Coding Jr",
      period: "October 2025 – Present",
      positions: [
        {
          title: "Full Stack / Frontend Developer Intern",
          description: [
            "Coding Jr is an ed-tech platform where I work as a Developer Intern, primarily using Next.js and Tailwind CSS to build modern, responsive web applications.",
            "I have contributed to multiple interactive virtual labs, including Networking Labs, Cyber Security Labs, and an SQL Editor Lab, along with developing and maintaining many production-level web pages for the platform. My work focuses on performance, usability, and real-world learning experiences.",
            "This internship has helped me gain strong exposure to industry-grade development practices, collaborative workflows, and building scalable educational products.",
          ],
        },
      ],
    },
    {
      company: "Celestine",
      period: "September 2024 – January 2025",
      positions: [
        {
          title: "UI/UX Designer",
          description: [
            "Celestine is a college-based startup where I worked as a UI/UX Designer, contributing to multiple real-world product ideas. During this internship, I collaborated on 6–8 UI/UX projects, focusing on user-centric design, clean interfaces, and practical usability.",
            "I worked on user research, wireframing, user flows, and high-fidelity UI designs, while closely collaborating with developers and the founding team to ensure smooth design-to-development handoff.",
            "This experience helped me understand startup workflows, fast iteration cycles, and how design decisions impact real users. It strengthened my ability to think from both design and development perspectives.",
          ],
        },
      ],
    },
  ],
  avatarUrl: "/images/Sagar/photo1.jpg",
};

export function Resume() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative">
          <div className="divide-y divide-gray-100">
            {resumeData.experiences.map((experience) => (
              <div
                key={experience.company}
                className="grid grid-cols-[1fr,5fr] gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-[2fr,1fr,4fr]"
              >
                <div className="hidden md:block">
                  <h3 className="text-xl font-bold">{experience.company}</h3>
                  <p className="text-sm text-gray-600">{experience.period}</p>
                </div>

                <div />

                <div className="space-y-6">
                  {experience.positions.map((position, index) => (
                    <div
                      key={`${experience.company}-${index}`}
                      className="space-y-4"
                    >
                      <h4 className="text-lg font-semibold">
                        {position.title}
                      </h4>
                      <div className="space-y-3">
                        {position.description.map((desc, i) => (
                          <p key={i} className="text-gray-600">
                            {desc}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute top-0 h-full w-8 md:left-[calc(28%_-_1rem)]">
            <Timeline avatarUrl={resumeData.avatarUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}
