import Contact from "@/data/contact.mdx";
import BaseLayout from "../layouts/base-layout";

type Props = {};

export default function About({}: Props) {
  return (
    <BaseLayout>
      <Contact />
    </BaseLayout>
  );
}
