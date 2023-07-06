
export interface ReferenceProps {
  name: string
  company: string
  role: string
  email: string
}

export default function Reference({ company, role, email, name }: ReferenceProps) {
  return <div className="mx-4">
    <h5 className="text-xl font-bold">{name}</h5>
    <div className="text-xl font-bold">{company}</div>
    <div className="text-lg font-semibold">{role}</div>
    <div className="text-lg mb-2"><a href={`mailto:${email}`}>{email}</a></div>
  </div>
}
