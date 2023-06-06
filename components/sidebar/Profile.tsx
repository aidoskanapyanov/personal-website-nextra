import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Profile({}: Props) {
  return (
    <section className="pb-10 flex flex-col gap-y-6 items-center">
      <Link href="/">
        <Image
          className="rounded-full w-40"
          src="/avatar.jfif"
          width={400}
          height={400}
          alt="profile"
        />
      </Link>
      <h1 className="text-lg md:text-2xl uppercase tracking-widest font-bold">
        Aidos Kanapyanov
      </h1>
      <p className="text-xs lg:text-sm font-thin tracking-widest uppercase decoration-dotted decoration-1 underline underline-offset-4 hover:no-underline">
        <a href="mailto:aidos.kanapyanov@alumni.nu.edu.kz">
          aidos.kanapyanov@alumni.nu.edu.kz
        </a>
      </p>
    </section>
  );
}
