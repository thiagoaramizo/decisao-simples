import { ReactNode } from "react"

interface SectionProps {
  children: ReactNode
  className?: string
}

export function HeroSection ({children, className}: SectionProps) {


  return (
    <section className={"w-full flex flex-col items-center justify-center " + className}>
      <div className="w-full bg-white rounded-b-[2rem] py-16 shadow-2xl flex flex-col items-center justify-center">
        <div className="w-full max-w-7xl px-6" >
        {children}
        </div>
      </div>
      
    </section>
  )
}