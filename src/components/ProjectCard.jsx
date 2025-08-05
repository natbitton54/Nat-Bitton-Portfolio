import React from "react";
import { Link } from "react-router-dom";
import NotFound from "../pages/NotFound";
import { ArrowUpRight } from "lucide-react";

// Expanded techIcons mapping
const techIcons = {
  PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  MySQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  Firebase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Flask:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  Dart: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  Flutter:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  Unity:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  "GitHub Actions":
    "https://avatars.githubusercontent.com/u/44036562?s=200&v=4",
};

export default function ProjectCard({ project }) {
  if (!project) return <NotFound />;

  return (
    <Link
      to={`/project/${project.id}`}
      className="w-[350px] h-[420px] hover:scale-105 transition-all duration-300 ease-in-out rounded-3xl border border-zinc-200 dark:hover:border-orange-500 dark:border-zinc-700 bg-gradient-to-br from-mint-50/50 to-mint-300/10 dark:from-zinc-800 dark:to-mint-800/10"
    >
      <article className="group h-full flex flex-col rounded-3xl overflow-hidden">
        {/* Image */}
        <div className="overflow-hidden rounded-xl">
          <img
            src={project.image}
            alt={`Thumbnail of ${project.title}`}
            className="h-auto w-full rounded-xl transition-all duration-300 ease-in-out group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col p-4 gap-3 flex-grow justify-start">
          {project.type && (
            <h3 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              {project.type}
            </h3>
          )}

          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-black dark:text-white leading-snug">
              {project.title}
            </h2>
            <ArrowUpRight className="w-5 h-5 text-zinc-800 dark:text-white opacity-0 translate-x-0 translate-y-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>

          <p>{project.brief}</p>

          {project.languages && (
            <div className="flex flex-wrap gap-2">
              {project.languages.map((lang) => (
                <span
                  key={lang}
                  className=" flex items-center gap-1 px-2 py-0.5 text-xs font-semibold
                      rounded-full shadow transition-colors duration-200
                      bg-white text-zinc-800 
                      dark:bg-zinc-800 dark:text-white
                      hover:bg-zinc-800 hover:text-white
                      dark:hover:bg-white dark:hover:text-zinc-800
                    "
                >
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-black dark:bg-white">
                    <img
                      src={techIcons[lang]}
                      alt={`${lang} icon`}
                      className="max-w-[70%] max-h-[70%] object-contain"
                    />
                  </div>
                  {lang}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
