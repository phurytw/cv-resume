import { ReactNode } from "react"

export interface MainSectionProps {
  title: string
  children?: ReactNode
}

export default function SideSection({ title, children }: MainSectionProps) {
  return <div className="text-left my-6 w-full">
    <h4 className="text-xl">{title}</h4>
    <section className="py-2">{children}</section>
  </div>
}
