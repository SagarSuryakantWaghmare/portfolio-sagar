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
    <div className="flex flex-col space-y-1 text-xs pt-6">
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
  );
}
