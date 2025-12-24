"use client";

import { Fragment, useState, useEffect } from "react";
import Calendar from "./calendar";
import Days from "./days";
import { getContributions, GITHUB_USERNAME, ContributionCalendar } from "./github";
import GithubCalendarSkeleton from "./github-calendar-skeleton";
import GithubStats from "./github-stats";
import GithubStatsSkeleton from "./github-stats-skeleton";
import YearSelect from "./year-select";

export default function Contributions() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [contributions, setContributions] = useState<ContributionCalendar | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchContributions() {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getContributions(GITHUB_USERNAME, year);
        setContributions(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load contributions");
      } finally {
        setIsLoading(false);
      }
    }

    fetchContributions();
  }, [year]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-text-secondary mb-2">Unable to load GitHub contributions</p>
        <p className="text-sm text-text-tertiary">{error}</p>
      </div>
    );
  }

  if (!contributions || isLoading) {
    return (
      <div className="flex flex-col space-y-4">
        <div className="flex items-start gap-3 overflow-x-auto pb-2">
          <Days />
          <GithubCalendarSkeleton />
          <YearSelect selectedYear={year} onYearChange={setYear} />
        </div>
        <GithubStatsSkeleton />
      </div>
    );
  }

  return (
    <Fragment>
      <div className="flex items-start gap-3 overflow-x-auto pb-2">
        <Days />
        <Calendar contributions={contributions} />
        <YearSelect selectedYear={year} onYearChange={setYear} />
      </div>
      <GithubStats contributions={contributions} />
    </Fragment>
  );
}
