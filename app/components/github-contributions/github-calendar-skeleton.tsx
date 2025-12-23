export default function GithubCalendarSkeleton() {
  return (
    <div className="h-[180px] flex flex-col justify-between flex-1 max-w-4xl">
      <div className="h-4 w-full animate-pulse rounded bg-gray-300" />
      <div className="h-[120px] w-full animate-pulse rounded bg-gray-300" />
      <div className="h-4 w-40 animate-pulse rounded bg-gray-300" />
    </div>
  );
}
