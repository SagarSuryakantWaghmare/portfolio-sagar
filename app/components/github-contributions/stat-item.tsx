import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function StatItem({ title, children }: Props) {
  return (
    <div className="p-4 bg-[#f6f8fa] rounded-lg">
      <p className="text-sm font-semibold text-text-primary mb-1">{title}</p>
      <p className="text-text-secondary">{children}</p>
    </div>
  );
}
