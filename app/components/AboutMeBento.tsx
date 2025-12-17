import { BentoCard } from "./BentoCard";

function getTimeOfDayGreeting() {
  const now = new Date();
  const hours = now.getHours();

  if (hours < 12) {
    return "Good morning!";
  } else if (hours < 17) {
    return "Good afternoon!";
  } else {
    return "Good evening!";
  }
}

export function AboutMeBento({ linkTo }: { linkTo?: string }) {
  const timeOfDayGreeting = getTimeOfDayGreeting();

  return (
    <BentoCard height="h-[275px] md:h-[304px] lg:h-[220px]" linkTo={linkTo}>
      <div className="group flex h-full">
        <div className="text-balance">
          <h2 className="mb-4 text-base font-medium">Learn more about me</h2>
          <p className="mb-2 text-balance pr-1 text-text-secondary md:pr-4">
            {timeOfDayGreeting} <br />
            I&apos;m Sagar, a full-stack developer.
          </p>
        </div>
        <div className="relative">
          <div className="group inline-block text-center">
            <div
              className="rounded-[20px] border border-border-primary p-2 transition-all duration-500 ease-out group-hover:border-orange-primary"
              style={{ width: 188, height: 278 }}
            >
              <div
                className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
                style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
              ></div>
            </div>
          </div>
          <img
            className="absolute -top-1 left-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow transition-all duration-500 group-hover:rotate-[4deg] group-hover:scale-105"
            src="/images/Sagar/photo1.jpg"
            alt="Profile photo"
          />
        </div>
      </div>
    </BentoCard>
  );
}
