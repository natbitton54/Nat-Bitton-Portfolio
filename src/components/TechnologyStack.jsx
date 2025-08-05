import React from "react";

/* ---------- 1.  ICON LIST ---------- */
const SLUGS = [
  "firebase",
  "react",
  "tailwindcss",
  "html5",
  "css",
  "javascript",
  "php",
  "nodedotjs",
  "flutter",
  "mongodb",
  "mysql",
  "dart",
  "python",
  "csharp",
  "githubactions", // fixed slug
];

const CDN_MAP = {
  csharp:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
  githubactions:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg", // official icon
};

const MONOCHROME_HEX = null;

/* ---------- 2.  COMPONENT ---------- */
export default function TechnologyStack() {
  const logos = SLUGS.map((slug) => (
    <img
      key={slug}
      src={
        CDN_MAP[slug] ??
        `https://cdn.simpleicons.org/${slug}${
          MONOCHROME_HEX ? `?color=${MONOCHROME_HEX}` : ""
        }`
      }
      alt={slug}
      width={32}
      height={32}
      loading="lazy"
      decoding="async"
      className="block h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10"
    />
  ));

  return (
    <div className="bento-card overflow-hidden">
      <h3 className="mb-6 text-xl font-semibold text-foreground">
        Technology Stack
      </h3>

      <div className="relative w-full overflow-hidden group" tabIndex={0}>
        <div
          className="flex animate-marquee gap-6 sm:gap-7 md:gap-8
                        [animation-play-state:running]
                        group-hover:[animation-play-state:paused]
                        group-focus:[animation-play-state:paused]"
        >
          {logos}
          {logos}
        </div>

        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-20 bg-gradient-to-r from-white dark:from-[#181818] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-20 bg-gradient-to-l from-white dark:from-[#181818] to-transparent" />
      </div>
    </div>
  );
}
