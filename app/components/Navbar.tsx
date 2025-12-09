"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

type NavigationLink = {
  name: string;
  link: string;
};

const navigationLinks: readonly NavigationLink[] = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "/projects" },
  { name: "Contact", link: "#contact" },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  const determineActiveClass = (link: string): string => {
    return path === link ? "text-text-primary" : "text-gray-500";
  };

  return (
    <header role="banner">
      {/* Desktop Nav */}
      <nav
        aria-label="Desktop navigation"
        className="hidden h-16 w-full items-center justify-between border-b border-border-primary/50 px-4 md:flex"
      >
        <div className="w-[104px]">
          <Link href="/" aria-label="Home" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-primary text-white font-bold text-sm">
              SW
            </div>
          </Link>
        </div>
        <ul className="flex place-items-center space-x-4 rounded-full border border-border-primary px-5 py-2 text-sm text-gray-500">
          {navigationLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.link}
                className={`${determineActiveClass(
                  link.link,
                )} font-medium hover:text-text-primary transition-colors`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex w-[104px] justify-end">
          <a
            href="mailto:sagarwaghmare1384@gmail.com"
            className="rounded-full border border-border-primary px-4 py-1.5 text-sm font-medium text-text-secondary hover:bg-white hover:text-text-primary transition-all"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav
        aria-label="Mobile navigation"
        className="flex h-16 items-center justify-between gap-2.5 border-b border-border-primary/50 px-3 md:hidden"
      >
        <Link href="/" aria-label="Home" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-primary text-white font-bold text-sm">
            SW
          </div>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border-primary hover:bg-white transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="h-5 w-5 text-text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 top-16 z-50 bg-bg-primary">
            <ul className="flex flex-col space-y-4 p-6 text-lg">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.link}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 font-medium text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="mailto:sagarwaghmare1384@gmail.com"
                  className="block rounded-full border border-border-primary px-6 py-3 text-center font-medium text-text-secondary hover:bg-white hover:text-text-primary transition-all"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
