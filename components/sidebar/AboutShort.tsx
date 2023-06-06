import Link from "next/link";

type Props = {};

export default function AboutShort({}: Props) {
  return (
    <section className="py-10">
      <h1 className="mb-6 uppercase font-medium tracking-widest">About</h1>
      <p className="mb-6 text-sm tracking-wide font-light">
        I&apos;m Aidos Kanapyanov, a passionate software engineer with
        experience in backend, frontend, and data science. Nazarbayev University
        alum. I thrive on learning and embracing new challenges.
      </p>
      <Link
        href="/"
        className="p-4 text-xs font-medium uppercase border tracking-widest hover:border-slate-400 dark:hover:border-slate-600"
      >
        Learn more
      </Link>
    </section>
  );
}
