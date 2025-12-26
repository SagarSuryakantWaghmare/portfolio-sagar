"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LeetCodeStatsSkeleton from "./leetcode-stats-skeleton";
import StatItem from "./stat-item";
import AnimatedNumber from "./animated-number";

interface LeetCodeStats {
  totalSolved: number;
  easy: number;
  medium: number;
  hard: number;
  ranking: number;
  acceptanceRate: number;
}

interface SubmissionStats {
  difficulty: string;
  count: number;
  submissions: number;
}

// Replace with user's LeetCode username
const LEETCODE_USERNAME = "SagarSuryakantWaghmare";

export default function LeetCodeStats() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `/api/leetcode?username=${LEETCODE_USERNAME}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch LeetCode data");
        }

        const data = await response.json();

        if (data.error) {
          throw new Error(data.error);
        }

        const userData = data.data.matchedUser;
        const submitStats = userData.submitStats.acSubmissionNum;

        const processedStats: LeetCodeStats = {
          totalSolved:
            submitStats.find((s: SubmissionStats) => s.difficulty === "All")
              ?.count || 0,
          easy:
            submitStats.find((s: SubmissionStats) => s.difficulty === "Easy")
              ?.count || 0,
          medium:
            submitStats.find((s: SubmissionStats) => s.difficulty === "Medium")
              ?.count || 0,
          hard:
            submitStats.find((s: SubmissionStats) => s.difficulty === "Hard")
              ?.count || 0,
          ranking: userData.profile.ranking || 0,
          acceptanceRate: (() => {
            const allSubmissions = submitStats.find(
              (s: SubmissionStats) => s.difficulty === "All"
            );
            if (allSubmissions && allSubmissions.submissions > 0) {
              return Math.round(
                (allSubmissions.count / allSubmissions.submissions) * 100
              );
            }
            return 0;
          })(),
        };

        setStats(processedStats);
      } catch (error) {
        console.error("LeetCode API error:", error);
        // Fallback to zero data
        setStats({
          totalSolved: 0,
          easy: 0,
          medium: 0,
          hard: 0,
          ranking: 0,
          acceptanceRate: 0,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeStats();
  }, []);

  if (loading) {
    return <LeetCodeStatsSkeleton />;
  }

  if (!stats) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-text-secondary mb-2">Unable to load LeetCode statistics</p>
        <p className="text-sm text-text-tertiary">Please try again later</p>
      </div>
    );
  }

  const difficultyIcons = {
    easy: "🟢",
    medium: "🟡",
    hard: "🔴",
  };

  return (
    <div className="space-y-6">
      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <StatItem title="Problems Solved">
          <div className="flex items-center gap-2">
            <AnimatedNumber number={stats.totalSolved} />
            <span className="text-2xl">🏆</span>
          </div>
        </StatItem>

        <StatItem title="Ranking">
          <div className="flex items-center gap-2">
            <span className="text-sm text-text-secondary">#</span>
            <AnimatedNumber number={stats.ranking} />
            <span className="text-2xl">📈</span>
          </div>
        </StatItem>

        <StatItem title="Acceptance Rate">
          <div className="flex items-center gap-2">
            <AnimatedNumber number={stats.acceptanceRate} />
            <span className="text-text-secondary text-sm">%</span>
            <span className="text-2xl">🎯</span>
          </div>
        </StatItem>
      </div>

      {/* Difficulty Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-bg-secondary rounded-xl border border-border-primary p-6"
      >
        <h3 className="text-lg font-semibold mb-4 text-text-primary">
          Difficulty Distribution
        </h3>
        <div className="space-y-4">
          {[
            { difficulty: "easy", count: stats.easy, color: "bg-green-500" },
            {
              difficulty: "medium",
              count: stats.medium,
              color: "bg-yellow-500",
            },
            { difficulty: "hard", count: stats.hard, color: "bg-red-500" },
          ].map((item) => (
            <div
              key={item.difficulty}
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">
                  {
                    difficultyIcons[
                      item.difficulty as keyof typeof difficultyIcons
                    ]
                  }
                </span>
                <span className="capitalize font-medium text-text-primary">
                  {item.difficulty}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-24 md:w-32 bg-gray-300 rounded-full h-2 hidden sm:block">
                  <div
                    className={`h-2 rounded-full ${item.color}`}
                    style={{
                      width: `${
                        stats.totalSolved > 0
                          ? (item.count / stats.totalSolved) * 100
                          : 0
                      }%`,
                    }}
                  />
                </div>
                <span className="font-semibold min-w-[3rem] text-right text-text-primary">
                  {item.count}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
