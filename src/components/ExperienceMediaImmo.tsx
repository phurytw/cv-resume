import Experience from "./Experience";
import Project from "./Project";

export default function ExperienceMediaImmo() {
    return <Experience company="Media Immo" role="Developpeur Fullstack" startDate={new Date('2013-06-03')} endDate={new Date('2016-09-15')}>
        <Project description="Développement des services liés au site ERE-pro.com">
            <ul className="list-disc">
                <li className="my-1">Service permettant de rapidement générer des documents liés aux diagnostics immobiliers</li>
                <li className="my-1">Développement avec PHP, MySQL, jQuery, OpenStreetMaps, , <strong>AngularJS</strong></li>
                <li className="my-1">Gestion de serveurs de cartographies tels que GeoServer et MapServer</li>
            </ul>
        </Project>
    </Experience>
}