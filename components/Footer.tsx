import { siteConfig } from "@/config/site";
import cn from "classnames";
import Link from "next/link";
import { ThemeSwitch } from "nextra-theme-docs";
import { ReactElement } from "react";
import { Icons } from "./icons";

export function FooterContent() {
  return (
    <>
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="w-full flex flex-col gap-4 md:flex-row md:justify-between justify-center items-center">
        <div className="flex justify-center items-center gap-4">
          <Link
            target="_blank"
            href={siteConfig.links.github}
            className="items-center space-x-2 md:flex"
          >
            <Icons.github />
          </Link>
          <Link
            target="_blank"
            href={siteConfig.links.linkedin}
            className="items-center space-x-2 md:flex"
          >
            <Icons.linkedin />
          </Link>
          <Link
            target="_blank"
            href={siteConfig.links.discord}
            className="items-center space-x-2 md:flex"
          >
            <Icons.discord />
          </Link>
          <Link
            target="_blank"
            href={siteConfig.links.telegram}
            className="items-center space-x-2 md:flex"
          >
            <Icons.telegram />
          </Link>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <p className="text-xs md:text-base text-gray-500 dark:text-[#888888]">
            &copy; {new Date().getFullYear()} Aidos Kanapyanov
          </p>
          <p className="text-xs text-gray-500 dark:text-[#888888]">
            to my wife: I love you ♥
          </p>
        </div>
      </div>
    </>
  );
}

export function Footer({ menu }: { menu?: boolean }): ReactElement {
  return (
    <footer className="bg-[#FAFAFA] pb-[env(safe-area-inset-bottom)] relative dark:bg-[#111111]">
      <div className="absolute top-0 h-12 w-full -translate-y-full bg-gradient-to-t from-[#FAFAFA] to-transparent dark:from-black pointer-events-none" />
      <div
        className={cn(
          "mx-auto max-w-[90rem] py-2 px-4 flex gap-2",
          menu ? "flex" : "hidden"
        )}
      >
        <ThemeSwitch />
      </div>
      <hr className="dark:border-neutral-800" />
      <div
        className={cn(
          "mx-auto max-w-[90rem] py-12 flex justify-center md:justify-center text-black dark:text-white",
          "pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]"
        )}
      >
        <FooterContent />
      </div>
    </footer>
  );
}
