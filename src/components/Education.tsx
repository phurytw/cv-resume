import { ReactNode } from "react"

export interface EducationProps {
    school: string
    course: string
    location?: string
    startDate: Date
    endDate: Date
    children?: ReactNode
}

export default function Education({ school, course, children, startDate, endDate }: EducationProps) {
    return <div className="my-4">
        <h5 className="text-xl font-bold">{school}</h5>
        <h6 className="text-lg font-semibold mb-2">{course && `${course} / `}{startDate.getFullYear()}-{endDate?.getFullYear()}</h6>
        {children}
    </div>
}
