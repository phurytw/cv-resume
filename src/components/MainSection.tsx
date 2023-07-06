import { ReactNode } from "react"

export interface MainSectionProps {
  title: string
  children?: ReactNode
}

export default function MainSection({ title, children }: MainSectionProps) {
  return <div className="text-left mx-4 my-4">
    <h4 className="text-3xl font-semibold">{title}</h4>
    <hr />
    <section className="py-2">{children}</section>
  </div>
}
