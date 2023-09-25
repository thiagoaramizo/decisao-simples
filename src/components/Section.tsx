import { ReactNode } from "react"

interface SectionProps {
  children: ReactNode
  className?: string
}

export function Section ({children, className}: SectionProps) {
  return (
    <section className={"w-full flex flex-col items-center justify-center " + className}>
      <div className="w-full max-w-7xl px-6">
      {children}
      </div>
    </section>
  )
}