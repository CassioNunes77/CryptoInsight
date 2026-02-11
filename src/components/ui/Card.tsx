import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-lg bg-[#F0F2F5] p-6 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}
