import AboutMe from "@/data/about.mdx";
import BaseLayout from "../layouts/base-layout";

type Props = {};

export default function About({}: Props) {
  return (
    <BaseLayout>
      <AboutMe />
    </BaseLayout>
  );
}
