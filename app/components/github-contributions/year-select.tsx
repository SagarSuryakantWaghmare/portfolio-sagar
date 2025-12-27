"use client";

import clsx from "clsx";

interface Props {
  selectedYear: number;
  onYearChange: (year: number) => void;
}

export default function YearSelect({ selectedYear, onYearChange }: Props) {
  const thisYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 5 }, (_, i) => thisYear - i);

  return (
    <div className="pt-3">
      {/* Mobile: horizontal year buttons */}
      <div className="md:hidden px-2">
        <div className="flex gap-2 overflow-x-auto py-2">
          {yearOptions.map((y) => (
            <button
              key={y}
              onClick={() => onYearChange(y)}
              className={clsx(
                "shrink-0 rounded-full px-3 py-1 text-sm transition-colors border",
                {
                  "bg-white text-green-600 border-green-600 font-semibold": selectedYear === y,
                  "bg-bg-primary text-text-tertiary border-border-primary": selectedYear !== y,
                }
              )}
            >
              {y}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop: vertical year list */}
      <div className="hidden md:flex flex-col space-y-1 text-xs pt-6">
        {yearOptions.map((year) => (
          <button
            onClick={() => {
              onYearChange(year);
            }}
            key={year}
            className={clsx("cursor-pointer text-right pr-2 py-1 transition-colors", {
              "text-text-tertiary hover:text-text-primary": selectedYear !== year,
              "text-green-600 font-semibold border-r-2 border-green-600": selectedYear === year,
            })}
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  );
}
