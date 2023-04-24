import Experience from "./Experience";
import Project from "./Project";

export default function ExperienceChocochoBot() {
  return (
    <Experience company="ChocochoBot" startDate={new Date("2022-02-11")}>
      <Project description="Développement d'un chatbot Discord">
        <ul className="list-disc">
          <li className="my-1">
            Développement avec <strong>DiscordJS</strong>,{" "}
            <strong>TypeScript</strong>, <strong>TailwindCSS</strong>,{" "}
            <strong>Prisma</strong>, <strong>Postgres</strong>, GitHub Actions
          </li>
          <li className="my-1">
            Utilisations de diverses APIs tierces (CityMapper API, Google APIs,
            etc.)
          </li>
          <li className="my-1">
            Un site web créé avec <strong>Remix</strong> complète l'expérience
          </li>
        </ul>
      </Project>
    </Experience>
  );
}
