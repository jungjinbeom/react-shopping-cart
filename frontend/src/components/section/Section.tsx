import { PropsWithChildren } from "react";

type SectionProps = {
  type: string;
} & PropsWithChildren;

const Section = ({ type, children }: SectionProps) => {
  return <section className={`${type}-sction`}>{children}</section>;
};

export default Section;
