"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ActivityTooltip from "./activity-tooltip";
import { ContributionCalendar } from "./github";
import clsx from "clsx";

interface Props {
  contributions: ContributionCalendar;
}

export default function Calendar({ contributions }: Props) {
  const { weeks, months, colors } = contributions;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="relative flex flex-1 flex-col mx-5 space-y-4 max-w-[250px] md:max-w-lg xl:max-w-7xl transition-all"
    >
      <ul className="flex justify-end gap-[3px] overflow-hidden text-xs text-text-tertiary md:justify-center">
        {months.map((month) => (
          <li
            key={month.firstDay}
            className={clsx(month.totalWeeks < 2 && "invisible")}
            style={{ minWidth: 18.3 * month.totalWeeks }}
          >
            {month.name}
          </li>
        ))}
      </ul>

      <div className="w-full flex justify-center gap-[6px] overflow-hidden">
        {weeks?.map((week) => (
          <div key={week.firstDay} className="flex flex-col gap-[4px]">
            {week.contributionDays.map((contribution) => {
              const backgroundColor =
                contribution.contributionCount > 0 && contribution.color;

              const randomizedDelay =
                Math.random() * week.contributionDays.length * 0.2;

              return (
                <ActivityTooltip
                  block={
                    <motion.span
                      key={contribution.date}
                      initial="initial"
                      animate={isInView ? "animate" : "initial"}
                      variants={{
                        initial: { opacity: 0, translateY: -20 },
                        animate: {
                          opacity: 1,
                          translateY: 0,
                          transition: { delay: randomizedDelay },
                        },
                      }}
                      className="block h-[12px] w-[12px] rounded-[2px] bg-[#ebedf0]"
                      style={
                        backgroundColor ? { backgroundColor } : undefined
                      }
                    />
                  }
                  count={contribution.contributionCount}
                  date={new Date(contribution.date)}
                  key={contribution.date}
                />
              );
            })}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-start gap-2 mt-1">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-text-tertiary">Less</span>
          <ul className="flex gap-[3px]">
            <motion.li className="h-[10px] w-[10px] rounded-[2px] bg-[#ebedf0]" />
            {colors.map((item, index) => (
              <motion.li
                key={item}
                initial="initial"
                animate="animate"
                variants={{
                  initial: { opacity: 0 },
                  animate: {
                    opacity: 1,
                    transition: { delay: index * 0.5 },
                  },
                }}
                className="h-[10px] w-[10px] rounded-[2px]"
                style={{ backgroundColor: item }}
              />
            ))}
          </ul>
          <span className="text-text-tertiary">More</span>
        </div>
      </div>
    </div>
  );
}
