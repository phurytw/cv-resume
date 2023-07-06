export interface SkillProps {
  name: string
  level: number
}

export default function Skill({ name, level }: SkillProps) {
  return <div className="flex flex-col p-2">
    <div>{name}</div>
    <div className="relative w-full h-[8-px] rounded bg-white border" >
      <div className="relative h-2 rounded bg-sky-900" style={{ width: `${level * 100}%` }} />
    </div>
  </div>
}
