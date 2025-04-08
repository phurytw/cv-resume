import Experience from "./Experience";
import Project from "./Project";

export default function ExperienceKaizeneko() {
  return (
    <Experience
      company="Kaizeneko (https://kaizeneko.com)"
      role="Projet personnel"
      startDate={new Date("2023-11-01")}
      endDate={new Date("2024-04-01")}
    >
      <Project description="Développement d'un simulateur de trading d'actions (non finalisé)">
        <ul className="list-disc">
          <li className="my-1">
            Développement from scratch avec <strong>React</strong>,{" "}
            <strong>NextJS (App Router)</strong>, <strong>TypeScript</strong>,{" "}
            <strong>React Query</strong>, <strong>TailwindCSS</strong>,{" "}
            <strong>Shadcn/UI</strong>, <strong>tRPC</strong>,{" "}
            <strong>Prisma ORM</strong>, <strong>Lightweight Charts</strong>.
            Déploiement sur <strong>Vercel</strong> avec Vercel Postgres.
          </li>
        </ul>
      </Project>
    </Experience>
  );
}
