import {
  BsPhone,
  BsEnvelopeAt,
  BsGithub,
  BsLinkedin,
  BsHouse,
} from "react-icons/bs";

const phone = import.meta.env.VITE_PHONE || "0000000000";
const email = import.meta.env.VITE_EMAIL || "francois.nguyen@email.com";
const github = import.meta.env.VITE_GITHUB || "phurytw";
const linkedin = import.meta.env.VITE_LINKEDIN || "francoisnguyen06";
const location = import.meta.env.VITE_LOCATION || "Paris";

const contactNumbers = [
  [<BsPhone />, <a href={`tel:${phone}`}>{phone}</a>],
  [<BsEnvelopeAt />, <a href={`mailto:${email}`}>{email}</a>],
  [<BsGithub />, <a href={`https://github.com/${github}`}>{github}</a>],
  [
    <BsLinkedin />,
    <a href={`https://www.linkedin.com/in/${linkedin}`}>{linkedin}</a>,
  ],
  [<BsHouse />, <>{location}</>],
];

export default function Contact() {
  return (
    <h3 className="font-semi-bold flex flex-col">
      {contactNumbers.map(([icon, number], i) => (
        <div className="flex items-center">
          <div className="w-4 m-2 inline-block">{icon}</div> {number}
        </div>
      ))}
    </h3>
  );
}
