import type { Metadata } from "next";
import { HorizontalLine } from "../components/HorizontalLine";
import { GridWrapper } from "../components/GridWrapper";

type Connection = {
  name: string;
  profile_picture: string;
  socialLink: string;
  isConnected: boolean;
  connectedDate?: Date;
};

export const metadata: Metadata = {
  title: "Connections | Sagar Waghmare",
  description: "Professionals and teammates I've collaborated with on projects and initiatives",
};

const connections: Connection[] = [
  {
    name: "Atharva Wandhare",
    profile_picture: "/images/Sagar/photo1.jpg",
    connectedDate: new Date("01/15/2024"),
    socialLink: "https://linkedin.com/in/sagarwaghmare44",
    isConnected: true,
  },
  {
    name: "Shraddha Shingare",
    profile_picture: "/images/Sagar/photo2.jpg",
    connectedDate: new Date("02/20/2024"),
    socialLink: "https://linkedin.com/in/sagarwaghmare44",
    isConnected: true,
  },
  {
    name: "Rajat Ranvir",
    profile_picture: "/images/Sagar/photo3.jpg",
    connectedDate: new Date("03/10/2024"),
    socialLink: "https://linkedin.com/in/sagarwaghmare44",
    isConnected: true,
  },
  {
    name: "Siddhali Kathar",
    profile_picture: "/images/Sagar/photo4.jpg",
    connectedDate: new Date("04/05/2024"),
    socialLink: "https://linkedin.com/in/sagarwaghmare44",
    isConnected: true,
  },
  {
    name: "Omkar Pandhekar",
    profile_picture: "/images/Sagar/photo5.jpg",
    connectedDate: new Date("05/12/2024"),
    socialLink: "https://linkedin.com/in/sagarwaghmare44",
    isConnected: true,
  },
  {
    name: "Isha Deshpandhe",
    profile_picture: "/images/Sagar/photo1.jpg",
    connectedDate: new Date("06/18/2024"),
    socialLink: "https://linkedin.com/in/sagarwaghmare44",
    isConnected: true,
  },
  {
    name: "Sourabh Ugawekar",
    profile_picture: "/images/Sagar/photo2.jpg",
    connectedDate: new Date("07/22/2024"),
    socialLink: "https://linkedin.com/in/sagarwaghmare44",
    isConnected: true,
  },
  {
    name: "Aniket Pawar",
    profile_picture: "/images/Sagar/photo3.jpg",
    connectedDate: new Date("08/15/2024"),
    socialLink: "https://linkedin.com/in/sagarwaghmare44",
    isConnected: true,
  },
  {
    name: "Vikas Shukla",
    profile_picture: "/images/Sagar/photo4.jpg",
    connectedDate: new Date("09/10/2024"),
    socialLink: "https://linkedin.com/in/sagarwaghmare44",
    isConnected: true,
  },
  {
    name: "Raj Deshmukh",
    profile_picture: "/images/Sagar/photo5.jpg",
    connectedDate: new Date("10/05/2024"),
    socialLink: "https://linkedin.com/in/sagarwaghmare44",
    isConnected: true,
  },
  {
    name: "Aditya Raj",
    profile_picture: "/images/Sagar/photo1.jpg",
    connectedDate: new Date("11/12/2024"),
    socialLink: "https://linkedin.com/in/sagarwaghmare44",
    isConnected: true,
  },
  {
    name: "Akshay Jangir",
    profile_picture: "/images/Sagar/photo2.jpg",
    connectedDate: new Date("12/01/2024"),
    socialLink: "https://linkedin.com/in/sagarwaghmare44",
    isConnected: true,
  },
];

export default function ConnectionsPage() {
  const sortedConnections = [...connections].sort((a, b) => {
    if (a.isConnected === b.isConnected) {
      return a.name.localeCompare(b.name);
    }
    return a.isConnected ? -1 : 1;
  });

  return (
    <div className="relative space-y-16">
      <GridWrapper>
        <h1 className="mx-auto mt-16 max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
          Professionals and teammates I&apos;ve collaborated with on projects and initiatives.
        </h1>
      </GridWrapper>

      <div className="relative">
        <div className="relative mb-12 grid auto-rows-auto grid-cols-3 place-items-center justify-center gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          <span className="absolute top-0">
            <HorizontalLine />
          </span>
          {sortedConnections.map((person) => (
            <div
              key={person.name}
              className="group no-underline transition-all duration-500"
            >
              <div className="group inline-block text-center">
                <div
                  className={`relative h-28 w-28 rounded-[20px] border border-border-primary bg-bg-primary p-2 transition-all duration-300 ${
                    person.isConnected
                      ? "group-hover:-translate-y-3 group-hover:border-orange-primary"
                      : ""
                  }`}
                >
                  {person.isConnected && person.connectedDate ? (
                    <div className="absolute -bottom-2 left-1/2 w-full -translate-x-1/2 text-nowrap rounded-full bg-orange-primary px-1.5 py-1 text-center text-xs text-white">
                      <span>
                        Connected on{" "}
                        <time>
                          {person.connectedDate.toLocaleDateString("en-US", {
                            month: "numeric",
                            day: "numeric",
                            year: "2-digit",
                          })}
                        </time>
                      </span>
                    </div>
                  ) : null}
                  <div
                    className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
                    style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
                  >
                    <img
                      className={`h-14 w-14 rounded transition-all duration-300 ${
                        !person.isConnected ? "grayscale" : ""
                      }`}
                      alt={person.name}
                      src={person.profile_picture}
                    />
                  </div>
                </div>
                {person.name && (
                  <div className="mt-3">
                    <p className="text-sm text-gray-500">{person.name}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
          <span className="absolute bottom-0">
            <HorizontalLine />
          </span>
        </div>
      </div>
    </div>
  );
}
