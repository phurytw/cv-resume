import { BsHandIndexThumb } from "react-icons/bs";
import HL from "./HL";
import Project from "./Project";

export default function ExperienceOuiSncfCont() {
  return (
    <div className="my-4">
      <Project description="Développement du chatbot OUI.sncf (suite)">
        <ul className="list-disc">
          <li className="my-1">
            Méthodologie Scrum (~2 ans) et Kanban (~1 an)
          </li>
          <li className="my-1">
            Développement de la connexion compte client (achats liés au compte,
            consultation des billets, etc.)
          </li>
          <li className="my-1">
            Développement de la recherche de train et des composants liés
            (carrousels, cartes itinéraires, conditions de vente)
          </li>
          <li className="my-1">
            Développement du paiement de train intégrant les paiements par carte{" "}
            <HL>3D Secure</HL>
          </li>
          <li className="my-1">Rendu statique pour SEO</li>
          <li className="my-1">
            Optimisation du speed index et du page load performance
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
            Développement avec <HL>React</HL>, Rollup,{" "}
            <HL>Emotion JS (styled components)</HL>
          </li>
          <li className="my-1">
            Repository <BsHandIndexThumb className="inline-block" />:{" "}
            <a href="https://github.com/theopenconversationkit/tock-react-kit">
              https://github.com/theopenconversationkit/tock-react-kit
            </a>
          </li>
        </ul>
      </Project>
    </div>
  );
}
