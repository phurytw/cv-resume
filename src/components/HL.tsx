import { PropsWithChildren } from "react";

export default function HL(props: PropsWithChildren) {
  return <span className="font-bold text-sky-700">{props.children}</span>
}
