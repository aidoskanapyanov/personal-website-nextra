import Link from "next/link";

type Props = {};

export default function AboutShort({}: Props) {
  return (
    <section className="flex flex-col gap-4 justify-center items-start py-10">
      <h1 className="uppercase">About</h1>
      <p className="text-sm">
        I&apos;m Aidos Kanapyanov, a passionate software engineer with
        experience in backend, frontend, and data science. Nazarbayev University
        alum. I thrive on learning and embracing new challenges.
      </p>
      <Link
        href="/"
        className="text-xs p-4 uppercase border border-gray-300 hover:border-gray-400 dark:hover:border-gray-600"
      >
        Learn more
      </Link>
    </section>
  );
}
