import Resume from "@/data/resume.mdx";
import BaseLayout from "../layouts/base-layout";

type Props = {};

export default function About({}: Props) {
  return (
    <BaseLayout>
      <Resume />
    </BaseLayout>
  );
}
