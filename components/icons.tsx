import cn from "classnames";

const Github = ({
  height = 20,
  dim = true,
}: {
  height?: number;
  dim?: boolean;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn(
      "hover:nx-opacity-75",
      dim ? "text-gray-500 dark:text-[#888888] hover:nx-opacity-75" : ""
    )}
  >
    <title>Github</title>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({
  height = 20,
  dim = true,
}: {
  height?: number;
  dim?: boolean;
}) => (
  <svg
    fill="currentColor"
    stroke="currentColor"
    height={height}
    viewBox="0 0 76 76"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(
      "hover:nx-opacity-75",
      dim ? "text-gray-500 dark:text-[#888888] hover:nx-opacity-75" : ""
    )}
  >
    <title>Linkedin</title>
    <g>
      <path d="M68.3,1H7.7C4,1,1,4,1,7.7v60.6C1,72,4,75,7.7,75h60.6c3.7,0,6.7-3,6.7-6.7V7.7C75,4,72,1,68.3,1z M23.9,64.9   c0,1.1-0.9,1.9-1.9,1.9h-8.3c-1.1,0-1.9-0.9-1.9-1.9V30.1c0-1.1,0.9-1.9,1.9-1.9H22c1.1,0,1.9,0.9,1.9,1.9V64.9z M17.8,24.9   c-4.4,0-7.9-3.5-7.9-7.9s3.5-7.9,7.9-7.9s7.9,3.5,7.9,7.9S22.2,24.9,17.8,24.9z M67.2,65.1c0,1-0.8,1.8-1.8,1.8h-8.9   c-1,0-1.8-0.8-1.8-1.8V48.7c0-2.4,0.7-10.7-6.4-10.7c-5.5,0-6.6,5.6-6.8,8.2v18.8c0,1-0.8,1.8-1.8,1.8h-8.6c-1,0-1.8-0.8-1.8-1.8   V30c0-1,0.8-1.8,1.8-1.8h8.6c1,0,1.8,0.8,1.8,1.8v3c2-3.1,5.1-5.4,11.5-5.4c14.2,0,14.2,13.3,14.2,20.6L67.2,65.1L67.2,65.1z" />
    </g>
  </svg>
);

const Discord = ({ height = 20 }: { height?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    fill="currentColor"
    viewBox="0 0 16 16"
    className="text-gray-500 dark:text-[#888888] hover:nx-opacity-75"
  >
    <title>Discord</title>
    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
  </svg>
);
const Telegram = ({ height = 20 }: { height?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    fill="currentColor"
    viewBox="0 0 16 16"
    className="text-gray-500 dark:text-[#888888] hover:nx-opacity-75"
  >
    <title>Telegram</title>
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />{" "}
  </svg>
);

export const Icons = {
  github: Github,
  linkedin: Linkedin,
  discord: Discord,
  telegram: Telegram,
};
