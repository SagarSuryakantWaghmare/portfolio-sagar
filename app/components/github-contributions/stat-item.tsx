import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function StatItem({ title, children }: Props) {
  return (
    <div 
      className="p-4 bg-[#EDEEF0] rounded-xl border-2 border-[#A5AEB81F]/10 hover:border-orange-primary transition-all duration-300 cursor-default"
      style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
    >
      <p className="text-sm font-semibold text-text-primary mb-1">{title}</p>
      <p className="text-text-secondary">{children}</p>
    </div>
  );
}
