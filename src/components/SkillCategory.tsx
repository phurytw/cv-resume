import { PropsWithChildren } from "react";

export interface SkillCategoryProps extends PropsWithChildren {
  name: string
}

export default function SkillCategory({ children, name }: SkillCategoryProps) {
  return <div className="w-full">
    <div>{name}</div>
    <div className="flex flex-wrap">{children}</div>
  </div>
}
