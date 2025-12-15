import React from "react";
import { BentoCard } from "./BentoCard";

const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const CalendarDay: React.FC<{ day: number | string; isHeader?: boolean; shouldHighlight?: boolean }> = ({
  day,
  isHeader,
  shouldHighlight,
}) => {
  const randomBgWhite =
    !isHeader && shouldHighlight
      ? "bg-white/75 text-text-secondary hover:bg-white"
      : "text-text-tertiary";

  return (
    <div
      className={`col-span-1 row-span-1 flex h-8 w-8 items-center justify-center ${
        isHeader ? "" : "rounded"
      } ${randomBgWhite}`}
    >
      <span className={`font-medium ${isHeader ? "text-xs" : "text-sm"}`}>
        {day}
      </span>
    </div>
  );
};

export function CalendarBento() {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentYear = currentDate.getFullYear();
  const firstDayOfMonth = new Date(currentYear, currentDate.getMonth(), 1);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = new Date(
    currentYear,
    currentDate.getMonth() + 1,
    0,
  ).getDate();

  const bookingLink = `mailto:your.email@example.com?subject=Let's connect!`;

  const renderCalendarDays = () => {
    const days: React.ReactNode[] = [
      ...dayNames.map((day) => (
        <CalendarDay key={`header-${day}`} day={day} isHeader />
      )),
      ...Array(firstDayOfWeek).map((_, i) => (
        <div
          key={`empty-start-${i}`}
          className="col-span-1 row-span-1 h-8 w-8"
        />
      )),
      ...Array(daysInMonth)
        .fill(null)
        .map((_, i) => <CalendarDay key={`date-${i + 1}`} day={i + 1} shouldHighlight={(i + 1) % 3 === 0} />),
    ];

    return days;
  };

  return (
    <BentoCard height="h-[220px]" linkTo={bookingLink}>
      <div className="group grid h-full grid-cols-12 gap-5">
        <div className="col-span-5 text-balance md:col-span-5">
          <h2 className="mb-4 text-base font-medium">Let&apos;s connect</h2>
          <p className="mb-2 text-text-secondary">
            I&apos;d love to chat and discuss opportunities!
          </p>
        </div>
        <div className="absolute left-[43%] top-7 transition-all duration-500 ease-out md:-right-14 md:left-auto md:group-hover:-right-12 md:group-hover:top-5">
          <div>
            <div className="h-[278px] w-[550px] rounded-[20px] border border-border-primary p-2 transition-colors duration-100 group-hover:border-orange-primary">
              <div
                className="h-full rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] p-3"
                style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
              >
                <div className="flex items-center space-x-2">
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">
                      {currentMonth}, {currentYear}
                    </span>
                  </p>
                  <span className="h-1 w-1 rounded-full bg-text-tertiary">
                    &nbsp;
                  </span>
                  <p className="text-xs text-text-tertiary">Available</p>
                </div>
                <div className="mt-4 grid grid-cols-7 grid-rows-5 gap-2 px-4">
                  {renderCalendarDays()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BentoCard>
  );
}
