import Link from "next/link";

type Props = {};

export default function AboutShort({}: Props) {
  return (
    <section className="flex flex-col gap-8 justify-center items-start pt-10">
      <h1 className="uppercase">About</h1>
      <p className="text-sm">
        I&apos;m Aidos Kanapyanov, a passionate software engineer with
        experience in backend, frontend, and data science. Nazarbayev University
        alum. I thrive on learning and embracing new challenges.
      </p>
      <Link
        href="/blog"
        className="p-4 border border-gray-300 hover:border-gray-400 dark:hover:border-gray-600"
      >
        Read my blog
      </Link>
    </section>
  );
}
