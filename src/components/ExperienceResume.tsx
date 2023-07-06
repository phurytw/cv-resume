import { BsHandIndexThumb } from "react-icons/bs";
import Experience from "./Experience";
import HL from "./HL";
import Project from "./Project";

export default function ExperienceResume() {
  return (
    <Experience company="Ce CV !">
      <Project description="Développement d'un CV en PDF généré à partir d'une page HTML">
        <ul className="list-disc">
          <li className="my-1">
            Développement avec <HL>ReactJS</HL>,{" "}
            <HL>TypeScript</HL>, <HL>TailwindCSS</HL>,{" "}
            CodeSandbox
          </li>
          <li className="my-1">
            Rendu PDF avec <HL>puppeteer</HL>
          </li>
          <li className="my-1">
            Repository <BsHandIndexThumb className="inline-block" />: <a href="https://github.com/phurytw/cv-resume">https://github.com/phurytw/cv-resume</a>
          </li>
        </ul>
      </Project>
    </Experience>
  );
}
