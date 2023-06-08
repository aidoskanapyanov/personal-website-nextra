import Link from "next/link";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import { ReactNode, useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Icons } from "./components/icons";

const SITE_ROOT = "https://personal-website-nextra.vercel.app";

const themeConfig = {
  logo: <span className="tracking-widest font-semibold">Aidos Kanapyanov</span>,
  search: {
    placeholder: "Search in blog…",
  },
  project: {
    link: "https://github.com/aidoskanapyanov",
    icon: <Icons.github dim={false} />,
  },
  chat: {
    link: "https://www.linkedin.com/in/aidos-kanapyanov/",
    icon: <Icons.linkedin dim={false} />,
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath === "/") {
      return {
        titleTemplate: "Aidos Kanapyanov",
      };
    }

    return {
      titleTemplate: "%s | Aidos Kanapyanov",
    };
  },
  gitTimestamp({ timestamp }: { timestamp: Date }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [dateString, setDateString] = useState(timestamp.toISOString());

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      try {
        setDateString(
          timestamp.toLocaleDateString(navigator.language, {
            day: "numeric",
            month: "long",
            year: "numeric",
          })
        );
      } catch (e) {
        // Ignore errors here; they get the ISO string.
        // At least one person out there has manually misconfigured navigator.language.
      }
    }, [timestamp]);

    return <>Last updated on {dateString}</>;
  },
  footer: {
    component: Footer,
  },
  feedback: {
    content: null,
  },
  editLink: {
    text: null,
  },
  components: {
    a: ({ href, children }: { href: string; children: ReactNode }) => (
      <Link
        href={href}
        className="font-semibold decoration-dotted decoration-2 underline underline-offset-4 hover:no-underline"
      >
        {children}
      </Link>
    ),
  },
  head: function Head() {
    const router = useRouter();
    const { frontMatter } = useConfig();
    const fullUrl =
      router.asPath === "/" ? SITE_ROOT : `${SITE_ROOT}${router.asPath}`;

    const ogUrl = `${SITE_ROOT}${frontMatter.ogImage}`;

    return (
      <>
        <meta property="og:type" content="website" />
        <meta property="og:url" content={fullUrl} />
        <link rel="canonical" href={fullUrl} />
        <meta property="og:image" content={ogUrl} />
        <meta property="og:site_name" content="Aidos Kanapyanov" />
      </>
    );
  },
};
export default themeConfig;
