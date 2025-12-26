import LeetCodeStats from "./leetcode-stats";

export default function LeetCodeStatistics() {
  return (
    <section className="space-y-5">
      <div>
        <p className="text-2xl font-medium leading-9 tracking-tight text-text-primary">
          LeetCode
        </p>
        <p className="text-text-tertiary leading-4">
          Coding Statistics
        </p>
      </div>
      <LeetCodeStats />
    </section>
  );
}
