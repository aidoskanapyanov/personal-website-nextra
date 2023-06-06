import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const themeConfig = {
  logo: <span>Aidos Kanapyanov</span>,
  search: {
    placeholder: "Search in blog…",
  },
  project: {
    link: "https://github.com/aidoskanapyanov",
  },
  chat: {
    link: "https://www.linkedin.com/in/aidos-kanapyanov/",
    icon: (
      <svg width="24" height="24">
        <path
          fill="currentColor"
          d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
        />
      </svg>
    ),
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
};
export default themeConfig;
