import { GridWrapper } from "../components/GridWrapper";
import siteMetadata from "../data/siteMetadata";

export default function SkillsPage() {
  const allSkills = [
    // Languages
    {
      title: "JavaScript",
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      category: "Languages",
    },
    {
      title: "TypeScript",
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      category: "Languages",
    },
    {
      title: "Java",
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      category: "Languages",
    },
    {
      title: "SQL",
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      category: "Languages",
    },
    // Frontend
    {
      title: "React",
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      category: "Frontend",
    },
    {
      title: "Next.js",
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      category: "Frontend",
    },
    {
      title: "Tailwind CSS",
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      category: "Frontend",
    },
    {
      title: "Bootstrap",
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      category: "Frontend",
    },
    {
      title: "HTML5",
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      category: "Frontend",
    },
    {
      title: "CSS3",
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      category: "Frontend",
    },
    // Backend
    {
      title: "Node.js",
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      category: "Backend",
    },
    {
      title: "Express.js",
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      category: "Backend",
    },
    // Databases
    {
      title: "MongoDB",
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      category: "Databases",
    },
    {
      title: "MySQL",
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      category: "Databases",
    },
    {
      title: "PostgreSQL",
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      category: "Databases",
    },
    // Tools
    {
      title: "Git",
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      category: "Tools",
    },
    {
      title: "GitHub",
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      category: "Tools",
    },
    {
      title: "Docker",
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      category: "Tools",
    },
    {
      title: "VS Code",
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      category: "Tools",
    },
    {
      title: "Figma",
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      category: "Tools",
    },
  ];

  const categories = ["Languages", "Frontend", "Backend", "Databases", "Tools"];

  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="space-y-4">
        <GridWrapper>
          <div className="text-center text-sm font-medium text-orange-primary">
            <span>Skills</span>
          </div>
        </GridWrapper>
        <GridWrapper>
          <h1 className="mx-auto max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl">
            Technical Skills && Technologies
          </h1>
        </GridWrapper>
        <GridWrapper>
          <p className="mx-auto max-w-xl text-center text-text-secondary">
            A comprehensive overview of the technologies and tools I use to
            build modern web applications.
          </p>
        </GridWrapper>
      </div>

      {/* Skills Grid by Category */}
      {categories.map((category) => {
        const categorySkills = allSkills.filter(
          (skill) => skill.category === category
        );
        return (
          <section key={category} className="space-y-8">
            <GridWrapper>
              <h2 className="text-2xl font-medium text-text-primary">
                {category}
              </h2>
            </GridWrapper>
            <GridWrapper>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
                {categorySkills.map((skill, index) => (
                  <div
                    key={skill.title}
                    className="group relative"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    <div className="rounded-[20px] border border-border-primary bg-bg-primary p-3 transition-all duration-500 hover:border-orange-primary hover:-translate-y-2 hover:shadow-lg">
                      <div
                        className="grid h-32 place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
                        style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
                      >
                        <img
                          className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
                          alt={skill.title}
                          src={skill.imgSrc}
                        />
                      </div>
                      <p className="mt-3 text-center text-sm font-medium text-text-primary">
                        {skill.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </GridWrapper>
          </section>
        );
      })}

      {/* Additional Info */}
      <section className="space-y-8">
        <GridWrapper>
          <div className="rounded-2xl border border-border-primary bg-bg-primary p-8">
            <h2 className="mb-4 text-2xl font-medium text-text-primary">
              Methodologies
            </h2>
            <div className="flex flex-wrap gap-3">
              {siteMetadata.skills.methodologies.map((method) => (
                <span
                  key={method}
                  className="rounded-full border border-orange-primary bg-orange-secondary px-4 py-2 text-sm font-medium text-text-primary"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </GridWrapper>

        <GridWrapper>
          <div className="rounded-2xl border border-border-primary bg-bg-primary p-8">
            <h2 className="mb-4 text-2xl font-medium text-text-primary">
              Deployment Platforms
            </h2>
            <div className="flex flex-wrap gap-3">
              {siteMetadata.skills.deployment.map((platform) => (
                <span
                  key={platform}
                  className="rounded-full border border-orange-primary bg-orange-secondary px-4 py-2 text-sm font-medium text-text-primary"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </GridWrapper>
      </section>
    </div>
  );
}
