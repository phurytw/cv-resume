import { ReactNode } from "react"

export interface ExperienceProps {
  company: string
  role?: string
  location?: string
  startDate: Date
  endDate?: Date
  children?: ReactNode
}

export default function Experience({ company, role, location, children, startDate, endDate }: ExperienceProps) {
  const currentEndDate = endDate || new Date()
  const gap = (currentEndDate.getFullYear() - startDate.getFullYear()) * 12 + currentEndDate.getMonth() - startDate.getMonth()
  const gapInYears = Math.floor(gap / 12)
  const gapRemaining = gap % 12

  function renderGap() {
    if (gapInYears && gapRemaining) {
      return `${gapInYears} an${gapInYears > 1 ? 's' : ''} et ${gapRemaining} mois`
    }
    if (gapInYears && !gapRemaining) {
      return `${gapInYears} an${gapInYears > 1 ? 's' : ''}`
    }
    return `${gapRemaining} mois`
  }

  return <div className="my-4">
    <h5 className="text-xl font-bold">{company}</h5>
    <h6 className="text-lg font-semibold mb-2">{role && `${role} / `}{startDate.getFullYear()}-{endDate?.getFullYear() || 'Présent'} ({renderGap()})</h6>
    {children}
  </div>
}
