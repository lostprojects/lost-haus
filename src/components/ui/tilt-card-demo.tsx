
"use client"

import { TiltCard } from "@/components/ui/tilt-card"

function Demo() {
  return (
    <div className="flex flex-wrap gap-4">
      <TiltCard href="#">
        <div className="p-4">Default</div>
      </TiltCard>
      <TiltCard href="#" className="hover:bg-primary">
        <div className="p-4">Primary</div>
      </TiltCard>
      <TiltCard href="#" className="hover:bg-secondary">
        <div className="p-4">Secondary</div>
      </TiltCard>
      <TiltCard href="#" className="hover:bg-destructive">
        <div className="p-4">Destructive</div>
      </TiltCard>
    </div>
  )
}

export { Demo }
