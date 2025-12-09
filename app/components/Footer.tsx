import Link from "next/link";
import { GridWrapper } from "./GridWrapper";
import siteMetadata from "@/app/data/siteMetadata";

const footerLinks = {
  general: [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
  ],
  social: [
    { href: siteMetadata.github, label: "GitHub", isExternal: true },
    { href: siteMetadata.linkedin, label: "LinkedIn", isExternal: true },
    { href: siteMetadata.leetcode, label: "LeetCode", isExternal: true },
  ],
  contact: [
    { href: `mailto:${siteMetadata.email}`, label: "Email" },
    { href: `tel:${siteMetadata.phone}`, label: "Phone" },
  ],
};

export function Footer() {
  const renderFooterLink = (link: { href: string; label: string; isExternal?: boolean }) => {
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-primary text-white font-bold text-lg">
                      SW
                    </div>
                  </Link>
                  <p className="w-60 leading-5 text-gray-500">
                    {siteMetadata.bio.substring(0, 100)}...
                  </p>
                </div>
                <p className="mt-6 text-gray-500">
                  © {new Date().getFullYear()} {siteMetadata.author}
                </p>
              </div>
              <div className="flex w-full items-end justify-end pr-16">
                <div className="flex gap-3">
                  <a
                    href={siteMetadata.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border-primary text-text-secondary hover:bg-white hover:text-text-primary transition-all"
                    aria-label="GitHub"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href={siteMetadata.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border-primary text-text-secondary hover:bg-white hover:text-text-primary transition-all"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-end py-6 text-xs lg:pl-16">
              <div className="flex w-full justify-between md:justify-start md:space-x-36 lg:justify-between">
                <div>
                  <span className="mb-4 inline-block text-base font-medium text-text-primary">
                    General
                  </span>
                  <ul className="space-y-2 text-sm text-gray-500">
                    {footerLinks.general.map((link) => (
                      <li className="hover:text-text-primary transition-colors" key={link.href}>
                        {renderFooterLink(link)}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="mb-4 inline-block text-base font-medium text-text-primary">
                    Social
                  </span>
                  <ul className="space-y-2 text-sm text-gray-500">
                    {footerLinks.social.map((link) => (
                      <li className="hover:text-text-primary transition-colors" key={link.href}>
                        {renderFooterLink(link)}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="mb-4 inline-block text-base font-medium text-text-primary">
                    Contact
                  </span>
                  <ul className="space-y-2 text-sm text-gray-500">
                    {footerLinks.contact.map((link) => (
                      <li className="hover:text-text-primary transition-colors" key={link.href}>
                        {renderFooterLink(link)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </GridWrapper>
      </div>
    </>
  );
}
