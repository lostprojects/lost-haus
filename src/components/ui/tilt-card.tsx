import * as React from "react"
import { cn } from "@/lib/utils"

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: string;
  children: React.ReactNode;
}

export function TiltCard({ className, href, children, ...props }: TiltCardProps) {
  return (
    <a href={href}>
      <div
        className={cn(
          "group transform transition-all duration-500 ease-out hover:-rotate-2 hover:scale-110",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </a>
  );
}