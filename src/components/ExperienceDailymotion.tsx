import Experience from "./Experience";
import Project from "./Project";

export default function ExperienceDailymotion() {
    return <Experience company="Dailymotion" role="Developpeur Frontend Senior" startDate={new Date('2020-08-03')}>
        <Project description="Développement et maintenance du site B2C Dailymotion.com">
            <ul className="list-disc">
                <li className="my-1">Développement avec <strong>React</strong>, JavaScript ES6/<strong>TypeScript</strong> (migration), <strong>Apollo GraphQL</strong>, React Router, React Intl, PostCSS, <strong>Jest</strong>, Enzyme/<strong>React Testing Library</strong> (migration), <strong>Cypress</strong>, Jenkins, GitHub, Figma, Jira</li>
                <li className="my-1">Intégration des nouvelles publicités basées sur <strong>PrebidJS</strong> qui a augmenté significativement les revenus publicitaires</li>
            </ul>
        </Project>
    </Experience>
}