import { ReactNode } from "react"

export interface ProjectProps {
    description: string
    children?: ReactNode
}

export default function Project({ description, children }: ProjectProps) {
    return <div className="my-2">
        <h6 className="font-bold">{description}</h6>
        <div className="pl-6 pr-2 py-1">{children}</div>
    </div>
}