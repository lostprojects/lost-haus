import * as React from "react"
import { cn } from "@/lib/utils"

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  hoverColor?: string;
}

export function TiltCard({ title, className, hoverColor = "hover:bg-primary", ...props }: TiltCardProps) {
  return (
    <div
      className={cn(
        "max-h-fit transform rounded-full bg-black p-2 px-6 transition-all duration-500 ease-out hover:-rotate-2 hover:scale-110 hover:text-white shadow-[0_20px_50px_rgba(0,0,0,0.8)]",
        hoverColor,
        className
      )}
      {...props}
    >
      <a className="text-xl text-white font-mono">{title}</a>
    </div>
  );
}