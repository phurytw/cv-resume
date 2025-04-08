import { ReactNode } from "react"

export interface MainSectionProps {
  title: string
  children?: ReactNode
}

export default function MainSection({ title, children }: MainSectionProps) {
  return <div className="text-left mx-4">
    <section className="py-2">{children}</section>
  </div>
}
