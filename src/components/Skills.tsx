import Skill from "./Skill";
import SkillCategory from "./SkillCategory";

export default function Skills() {
  return <div className="w-full flex flex-wrap">
    <div className="w-1/3 px-4 py-1">
      <SkillCategory name="UI Frameworks">
        <div className="w-1/2"><Skill name="React" level={1} /></div>
        <div className="w-1/2"><Skill name="Redux" level={0.8} /></div>
        <div className="w-1/2"><Skill name="Svelte" level={0.6} /></div>
        <div className="w-1/2"><Skill name="NextJS" level={0.7} /></div>
        <div className="w-1/2"><Skill name="Remix" level={0.8} /></div>
        <div className="w-1/2"><Skill name="SvelteKit" level={0.6} /></div>
      </SkillCategory>
    </div>
    <div className="w-1/3 px-4 py-1">
      <SkillCategory name="JavaScript">
        <div className="w-1/2"><Skill name="TypeScript" level={0.8} /></div>
        <div className="w-1/2"><Skill name="JavaScript" level={1} /></div>
        <div className="w-1/2"><Skill name="GraphQL" level={0.7} /></div>
        <div className="w-1/2"><Skill name="NodeJS" level={0.9} /></div>
        <div className="w-1/2"><Skill name="ExpressJS" level={0.9} /></div>
        <div className="w-1/2"><Skill name="Deno" level={0.8} /></div>
      </SkillCategory>
    </div>
    <div className="w-1/3 px-4 py-1">
      <SkillCategory name="Test">
        <div className="w-1/2"><Skill name="Cypress" level={0.9} /></div>
        <div className="w-1/2"><Skill name="Jest" level={0.9} /></div>
        <div className="w-1/2"><Skill name="Vitest" level={0.6} /></div>
        <div className="w-1/2"><Skill name="Mocha" level={0.7} /></div>
      </SkillCategory>
    </div>
    <div className="w-1/3 px-4 py-1">
      <SkillCategory name="Styling">
        <div className="w-1/2"><Skill name="CSS" level={0.8} /></div>
        <div className="w-1/2"><Skill name="Sass" level={0.8} /></div>
        <div className="w-1/2"><Skill name="PostCSS" level={0.6} /></div>
        <div className="w-1/2"><Skill name="Styled Compon..." level={0.8} /></div>
        <div className="w-1/2"><Skill name="TailwindCSS" level={0.8} /></div>
      </SkillCategory>
    </div>
    <div className="w-1/3 px-4 py-1">
      <SkillCategory name="Base de données">
        <div className="w-1/2"><Skill name="MongoDB" level={0.5} /></div>
        <div className="w-1/2"><Skill name="Postgres" level={0.8} /></div>
        <div className="w-1/2"><Skill name="MySQL" level={0.8} /></div>
        <div className="w-1/2"><Skill name="SQLite" level={0.8} /></div>
      </SkillCategory>
    </div>
    <div className="w-1/3 px-4 py-1">
      <SkillCategory name="Infra">
        <div className="w-1/2"><Skill name="Docker" level={0.7} /></div>
        <div className="w-1/2"><Skill name="Supabase" level={0.9} /></div>
        <div className="w-1/2"><Skill name="Fly.io" level={0.8} /></div>
        <div className="w-1/2"><Skill name="AWS" level={0.6} /></div>
        <div className="w-1/2"><Skill name="Azure" level={0.5} /></div>
      </SkillCategory>
    </div>
    <div className="w-1/3 px-4 py-1">
      <SkillCategory name="Outils">
        <div className="w-1/2"><Skill name="GitHub" level={0.9} /></div>
        <div className="w-1/2"><Skill name="GitLab" level={0.7} /></div>
        <div className="w-1/2"><Skill name="Figma" level={0.7} /></div>
        <div className="w-1/2"><Skill name="Jira" level={0.7} /></div>
      </SkillCategory>
    </div>
    <div className="w-1/3 px-4 py-1">
      <SkillCategory name="Autre langages">
        <div className="w-1/2"><Skill name="C#" level={0.6} /></div>
        <div className="w-1/2"><Skill name="Rust" level={0.6} /></div>
        <div className="w-1/2"><Skill name="Kotlin" level={0.4} /></div>
      </SkillCategory>
    </div>
    <div className="w-1/3 px-4 py-1">
      <SkillCategory name="Build tools">
        <div className="w-1/2"><Skill name="Webpack" level={0.7} /></div>
        <div className="w-1/2"><Skill name="Vite" level={0.5} /></div>
      </SkillCategory>
    </div>
  </div>
}
