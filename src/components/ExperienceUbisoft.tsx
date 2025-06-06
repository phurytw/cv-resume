import Experience from "./Experience";
import Project from "./Project";

export default function ExperienceUbisoft() {
  return (
    <Experience
      company="Ubisoft (https://edenonline.ubisoft.com)"
      role="Développeur Frontend Senior"
      startDate={new Date("2023-08-28")}
    >
      <Project description="Développement du site Eden Online pour l'IP Captain Laserhawk">
        <ul className="list-disc">
          <li className="my-1">
            Développement d'expériences web from scratch pour l'IP Captain
            Laserhawk et Champions Tactics avec <strong>React</strong>,{" "}
            <strong>NextJS (App Router)</strong>, <strong>TypeScript</strong>,{" "}
            <strong>React Query</strong>, <strong>TailwindCSS</strong>,{" "}
            <strong>Framer Motion</strong>, Playwright, PhaserJS, GitLab, Figma,
            Jira.
          </li>
          <li className="my-1">
            Développement d'interactions crypto wallet avec la blockchain sur
            des chaines compatible EVM avec 0xSequence, wagmi, viem, ethers.
          </li>
          <li className="my-1">
            Participation au lancements de divers collections NFTs.
          </li>
        </ul>
      </Project>
    </Experience>
  );
}
