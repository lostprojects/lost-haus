"use client"

import { TiltCard } from "@/components/ui/tilt-card"

function Demo() {
  return (
    <div className="flex flex-wrap gap-4">
      <TiltCard title="Default" />
      <TiltCard title="Primary" hoverColor="hover:bg-primary" />
      <TiltCard title="Secondary" hoverColor="hover:bg-secondary" />
      <TiltCard title="Destructive" hoverColor="hover:bg-destructive" />
    </div>
  )
}

export { Demo }