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
      className="relative flex flex-1 flex-col space-y-3 w-full"
    >
      <ul className="flex gap-[4px] text-sm text-text-tertiary">
        {months.map((month) => (
          <li
            key={month.firstDay}
            className={clsx(month.totalWeeks < 2 && "invisible")}
            style={{ minWidth: `${month.totalWeeks * 19}px` }}
          >
            {month.name}
          </li>
        ))}
      </ul>

      <div className="flex gap-[4px]">
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
                      className="block h-[15px] w-[15px] rounded-[2px] bg-[#ebedf0]"
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

      <div className="flex flex-wrap items-center justify-start gap-2 mt-2">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-text-tertiary">Less</span>
          <ul className="flex gap-[4px]">
            <motion.li className="h-[12px] w-[12px] rounded-[2px] bg-[#ebedf0]" />
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
                className="h-[12px] w-[12px] rounded-[2px]"
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
