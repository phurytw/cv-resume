import { PropsWithChildren } from "react";

export default function PageContainer(props: PropsWithChildren) {
  return (
    <div className="w-[816px] h-[1056px] overflow-hidden">
      {props.children}
    </div>
  );
}
