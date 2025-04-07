import Experience from "./Experience";
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
            <strong>React</strong>, JavaScript ES6/<strong>TypeScript</strong>{" "}
            (migration), Recompose, Webpack, Sass, GSAP, <strong>Jest</strong>,
            Enzyme.
          </li>
          <li className="my-1">
            Chatbot conversationnel qui intègre le machine learning et le NLP
            développé avec Kotlin, vert.x, JUnit 5, MockK, MongoDB, KMongo
          </li>
          <li className="my-1">Prix du Best Robot Experience 2018 et 2019</li>
        </ul>
      </Project>
      <Project description="Développement de tock-react-kit, une librairie open source permettant de créer des interfaces pour chatbots">
        <ul className="list-disc">
          <li className="my-1">
            Librairie utilisée dans multiples projets tel que Mon Assistant TVG
            INOUI
          </li>
          <li className="my-1">
            Développement avec <strong>React</strong>, Rollup,{" "}
            <strong>Emotion JS (styled components)</strong>
          </li>
        </ul>
      </Project>
    </Experience>
  );
}
