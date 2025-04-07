import { Skill } from "./Skill";


export function Skills() {
    return <div className="w-full flex flex-wrap">
        <Skill name="React" level={1} />
        <Skill name="TypeScript" level={0.8} />
        <Skill name="NextJS" level={0.8} />
        <Skill name="Framer Motion" level={0.7} />
        <Skill name="Svelte" level={0.5} />
        <Skill name="GraphQL" level={0.7} />
        <Skill name="Cypress" level={0.9} />
        <Skill name="Playwright" level={0.8} />
        <Skill name="NodeJS" level={0.9} />
        <Skill name="Deno" level={0.8} />
        <Skill name="Rust" level={0.5} />
        <Skill name="Kotlin" level={0.4} />
        <Skill name="MongoDB" level={0.6} />
        <Skill name="Postgres" level={0.8} />
        <Skill name="AWS" level={0.5} />
        <Skill name="Docker" level={0.6} />
    </div>
}