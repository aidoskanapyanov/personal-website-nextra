import Projects from "@/data/projects.mdx";
import BaseLayout from "../layouts/base-layout";

type Props = {};

export default function About({}: Props) {
  return (
    <BaseLayout>
      <Projects />
    </BaseLayout>
  );
}
