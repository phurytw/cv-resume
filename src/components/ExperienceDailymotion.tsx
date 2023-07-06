import Experience from "./Experience";
import HL from "./HL";
import Project from "./Project";

export default function ExperienceDailymotion() {
  return (
    <Experience
      company="Dailymotion"
      role="Développeur Frontend Senior"
      startDate={new Date("2020-08-03")}
      endDate={new Date("2023-06-30")}
    >
      <Project description="Développement et maintenance du site B2C Dailymotion.com">
        <ul className="list-disc">
          <li className="my-1">
            Développement avec <HL>React</HL>, JavaScript ES6/
            <HL>TypeScript</HL> (migration),{" "}
            <HL>Apollo GraphQL</HL>, Redux, React Router, React Intl, PostCSS,{" "}
            <HL>Jest</HL>, Enzyme/<HL>React Testing Library</HL>{" "}
            (migration), <HL>Cypress</HL>, Webpack, Storybook, Jenkins, GitHub, Figma, Jira
          </li>
          <li className="my-1">
            Méthodologie Shape Up
          </li>
          <li className="my-1">
            Refonte de la page d'acceuil avec intégration des sondages utilisateurs et de la page vidéo à l'occasion du rebranding Dailymotion
          </li>
          <li className="my-1">
            Mise en conformité RGPD avec <HL>IAB TCF</HL>, et autre lois internationales telles que COPPA
          </li>
          <li className="my-1">
            Développement de l'upload de vidéos utilisateurs
          </li>
          <li className="my-1">
            Développement des commentaires utilisateurs
          </li>
          <li className="my-1">
            Mise en place des tests E2E avec <HL>Cypress</HL> et de son intégration dans la pipeline CI <HL>Jenkins</HL>
          </li>
          <li className="my-1">
            Migration progressive vers <HL>TypeScript</HL>
          </li>
          <li className="my-1">
            Mise en place et execution des A/B tests
          </li>
          <li className="my-1">
            Tracking analytique des actions utilisateurs
          </li>
          <li className="my-1">
            Build avec <HL>Webpack</HL>
          </li>
          <li className="my-1">
            Server Side Rendering et <HL>SEO</HL> avec <HL>NodeJS/ExpressJS</HL>
          </li>
          <li className="my-1">
            Intégration du nouveau design system Dailymotion à l'aide de <HL>Storybook</HL>
          </li>
          <li className="my-1">
            Intégration des nouvelles publicités basées sur{" "}
            <HL>PrebidJS</HL> qui ont augmenté significativement les
            revenus publicitaires
          </li>
          <li className="my-1">
            Contexte international (<HL>anglais</HL> requis)
          </li>
        </ul>
      </Project>
    </Experience>
  );
}
