import { ReactNode } from "react"

export interface ExperienceProps {
  company: string
  role?: string
  startDate?: Date
  endDate?: Date
  children?: ReactNode
}

export default function Experience({ company, role, children, startDate, endDate }: ExperienceProps) {

  function renderGap() {
    if (startDate) {
      const currentEndDate = endDate || new Date()
      const gap = (currentEndDate.getFullYear() - startDate.getFullYear()) * 12 + currentEndDate.getMonth() - startDate.getMonth()
      const gapInYears = Math.floor(gap / 12)
      const gapRemaining = gap % 12
      if (gapInYears && gapRemaining) {
        return `${gapInYears} an${gapInYears > 1 ? 's' : ''} et ${gapRemaining} mois`
      }
      if (gapInYears && !gapRemaining) {
        return `${gapInYears} an${gapInYears > 1 ? 's' : ''}`
      }
      return `${gapRemaining} mois`
    }
  }

  return <div className="my-4">
    <h5 className="text-2xl border-b-4 inline-block border-b-sky-700 my-2 font-bold">{company}</h5>
    {startDate && <h6 className="text-xl font-semibold mx-2 mb-2">{role && `${role} / `}{startDate.getFullYear()}-{endDate?.getFullYear() || 'Présent'} ({renderGap()})</h6>}
    {children}
  </div>
}
