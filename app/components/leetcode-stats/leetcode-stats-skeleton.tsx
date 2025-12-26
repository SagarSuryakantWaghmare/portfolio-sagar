export default function LeetCodeStatsSkeleton() {
  return (
    <div className="space-y-6">
      {/* Stats Grid Skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-[80px] w-full animate-pulse rounded-xl border border-border-primary bg-bg-secondary"
          />
        ))}
      </div>

      {/* Difficulty Breakdown Skeleton */}
      <div className="bg-bg-secondary rounded-xl border border-border-primary p-6 animate-pulse">
        <div className="h-6 w-48 bg-gray-300 rounded mb-4" />
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-gray-300" />
                <div className="h-4 w-16 bg-gray-300 rounded" />
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-32 h-2 rounded-full bg-gray-300 hidden sm:block" />
                <div className="h-4 w-8 bg-gray-300 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
