"use client";

import AnimatedNumber from "./animated-number";
import StatItem from "./stat-item";
import {
  ContributionCalendar,
  getBestDay,
  getContributionStreak,
  getDaysFromContribution,
} from "./github";

interface Props {
  contributions: ContributionCalendar;
}

export default function GithubStats({ contributions }: Props) {
  const { weeks, totalContributions } = contributions;

  const bestDay = getBestDay(weeks);
  const daysFromContribution = getDaysFromContribution(weeks);
  const streak = getContributionStreak(
    contributions.weeks.flatMap((week) => week.contributionDays)
  );
  const averageContribution = totalContributions / daysFromContribution;

  const bestDayDate = bestDay.day ? new Date(bestDay.day) : null;
  const hasValidBestDayDate =
    bestDayDate instanceof Date && !Number.isNaN(bestDayDate.getTime());

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      <StatItem title="This year">
        <AnimatedNumber number={totalContributions} />
        <span className="text-text-secondary"> contributions</span>
      </StatItem>
      <StatItem title="Longest Streak">
        <AnimatedNumber number={streak.longestStreak} />
        <span className="text-text-secondary"> days</span>
      </StatItem>
      <StatItem title="Best day">
        <span className="text-text-secondary">
          {hasValidBestDayDate ? formatDate(bestDayDate as Date) : "N/A"} —
        </span>
        <AnimatedNumber number={bestDay.count} />
        <span className="text-text-secondary"> contributions</span>
      </StatItem>
      <StatItem title="Average">
        <AnimatedNumber number={Math.round(averageContribution * 100) / 100} />
        <span className="text-text-secondary"> contributions / day</span>
      </StatItem>
    </div>
  );
}
