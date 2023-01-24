import { Skill } from "./Skill";


export function Languages() {
    return <div className="w-full flex flex-wrap">
        <Skill name="Anglais" level={1} />
        <Skill name="Espagnol" level={0.5} />
        <Skill name="Vietnamien" level={0.5} />
    </div>
}