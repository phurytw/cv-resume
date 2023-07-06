import Experience from "./Experience";
import HL from "./HL";
import Project from "./Project";

export default function ExperienceChocochoBot() {
  return (
    <Experience company="ChocochoBot" startDate={new Date("2022-02-11")}>
      <Project description="Développement d'un chatbot Discord">
        <ul className="list-disc">
          <li className="my-1">
            Développement avec <HL>DiscordJS</HL>,{" "}
            <HL>TypeScript</HL>, <HL>TailwindCSS</HL>,{" "}
            <HL>Prisma</HL>, <HL>Postgres</HL>, GitHub Actions
          </li>
          <li className="my-1">
            Développements de messages et interactions riches sur Discord (avec embeds, components)
          </li>
          <li className="my-1">
            Rercherche d'itinéraire en IDF avec CityMapper API et Google Geocoding API
          </li>
          <li className="my-1">
            Consultation d'information liées aux séries, films, et/ou concerts
          </li>
          <li className="my-1">
            Développement de mini jeux in-chat
          </li>
          <li className="my-1">
            Un site web créé avec <HL>Remix</HL> complète l'expérience
          </li>
        </ul>
      </Project>
    </Experience>
  );
}
