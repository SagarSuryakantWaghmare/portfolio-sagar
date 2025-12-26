import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function StatItem({ title, children }: Props) {
  return (
    <div className="p-4 bg-bg-secondary rounded-xl border border-border-primary hover:border-orange-primary transition-all duration-300 cursor-default">
      <p className="text-sm font-semibold text-text-primary mb-2">{title}</p>
      <div className="text-2xl font-bold text-text-primary">{children}</div>
    </div>
  );
}
