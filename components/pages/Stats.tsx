import Stats from "@/data/stats.mdx";
import BaseLayout from "../layouts/base-layout";

type Props = {};

export default function About({}: Props) {
  return (
    <BaseLayout>
      <Stats />
    </BaseLayout>
  );
}
