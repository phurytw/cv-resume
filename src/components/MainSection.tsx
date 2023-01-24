import { ReactNode } from "react"

export interface MainSectionProps {
  title: string
  children?: ReactNode
}

export default function MainSection({ title, children }: MainSectionProps) {
  return <div className="text-left mx-4 my-10">
    <h4 className="text-2xl">{title}</h4>
    <hr />
    <section className="py-2">{children}</section>
  </div>
}
