import Link from "next/link";
import { SocialPill } from "./SocialPill";
import { GridWrapper } from "./GridWrapper";
import { siteMetadata } from "../data/siteMetadata";

interface FooterLink {
  href: string;
  label: string;
  isExternal?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "General",
    links: [
      { href: "/", label: "Home" },
      { href: "/#about", label: "About" },
      { href: "/projects", label: "Projects" },
      { href: "/#contact", label: "Contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      {
        href: siteMetadata.github,
        label: "GitHub",
        isExternal: true,
      },
      {
        href: siteMetadata.linkedin,
        label: "LinkedIn",
        isExternal: true,
      },
      {
        href: siteMetadata.leetcode,
        label: "LeetCode",
        isExternal: true,
      },
      {
        href: `mailto:${siteMetadata.email}`,
        label: "Email",
        isExternal: true,
      },
    ],
  },
  {
    title: "Education",
    links: [
      { href: "/#education", label: "Certifications" },
      { href: "/#education", label: "Achievements" },
    ],
  },
];

export function Footer() {
  const renderFooterLink = (link: FooterLink) => {
    if (link.isExternal) {
      return (
        <a href={link.href} target="_blank" rel="noopener noreferrer">
          {link.label}
        </a>
      );
    }
    return <Link href={link.href}>{link.label}</Link>;
  };

  return (
    <>
      <div className="relative max-w-7xl border-border-primary/50">
        <GridWrapper>
          <div className="max-w-6xl divide-y px-4 lg:mx-auto lg:flex lg:divide-x lg:px-4 xl:px-0">
            <div className="flex w-full py-6 text-sm">
              <div>
                <div className="flex-grow space-y-6">
                  <Link className="inline-block" href="/">
                    <span className="text-3xl font-bold text-text-primary">SW</span>
                  </Link>
                  <p className="w-60 leading-5 text-gray-500">
                    I&apos;m Sagar Waghmare - a full-stack developer specializing in MERN stack,
                    Next.js, and TypeScript. Thanks for checking out my portfolio!
                  </p>
                </div>
                <p className="mt-6 text-gray-500">
                  © {new Date().getFullYear()} Sagar Waghmare
                </p>
              </div>
              <div className="flex w-full items-end justify-end pr-16">
                <SocialPill />
              </div>
            </div>
            <div className="flex w-full flex-col items-end py-6 text-xs lg:pl-16">
              <div className="ld:space-x-0 flex w-full justify-between md:justify-start md:space-x-36 lg:justify-between">
                {footerSections.map((section) => (
                  <div key={section.title}>
                    <span className="mb-4 inline-block text-base font-medium text-text-primary">
                      {section.title}
                    </span>
                    <ul className="space-y-2 text-sm text-gray-500">
                      {section.links.map((link) => (
                        <li className="hover:text-text-primary" key={link.href}>
                          {renderFooterLink(link)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GridWrapper>
      </div>
      <div className="relative h-8 w-full [background-image:linear-gradient(45deg,theme(colors.border-primary)_12.50%,transparent_12.50%,transparent_50%,theme(colors.border-primary)_50%,theme(colors.border-primary)_62.50%,transparent_62.50%,transparent_100%)] [background-size:5px_5px]"></div>
    </>
  );
}
