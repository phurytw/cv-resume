import Skill from "./Skill";


export function Languages() {
    return <div className="w-full flex flex-wrap">
        <div className="w-1/6"><Skill name="Anglais" level={1} /></div>
        <div className="w-1/6"><Skill name="Espagnol" level={0.5} /></div>
        <div className="w-1/6"><Skill name="Vietnamien" level={0.5} /></div>
    </div>
}