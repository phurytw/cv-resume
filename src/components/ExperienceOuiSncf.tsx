import { BsHandIndexThumb } from "react-icons/bs";
import Experience from "./Experience";
import HL from "./HL";
import Project from "./Project";

export default function ExperienceOuiSncf() {
  return (
    <Experience
      company="OUI.sncf / VSC Technologies / e.Voyageurs Technologies"
      role="Développeur Fullstack"
      startDate={new Date("2017-09-12")}
      endDate={new Date("2020-03-31")}
    >
      <Project description="Développement du chatbot OUI.sncf">
        <ul className="list-disc">
          <li className="my-1">
            Interface de chat créée from scratch qui dialogue avec le chatbot
            OUI.sncf avec des composants custom in-chat développée avec{" "}
            <HL>React</HL>, JavaScript ES6/<HL>TypeScript</HL>{" "}
            (migration), Recompose, Webpack, Sass, GSAP, API Rest, <HL>Jest</HL>,
            Enzyme
          </li>
          <li className="my-1">
            Chatbot conversationnel disponible sur divers canaux (web, whatsapp, messenger, etc.) qui intègre le machine learning et le NLP
            développé avec <HL>Kotlin</HL>, vert.x, JUnit 5, MockK, MongoDB, KMongo
          </li>
        </ul>
      </Project>
    </Experience>
  );
}
