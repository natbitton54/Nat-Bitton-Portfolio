import React, { useState } from "react";
import { motion } from "framer-motion";
import projects from "../Assets/MyProjects.json";
import { cn } from "../lib/utils";
import ProjectCard from "../components/ProjectCard";

const categories = [
  "All",
  "Responsive Web Apps",
  "Mobile Apps",
  "Desktop Web App",
  "APIs",
  "Games",
];

export default function Project() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.category
            ? project.category.includes(activeCategory)
            : project.category === activeCategory
        );

  return (
    <div
      className="relative isolate w-full bg-gradient-to-br from-orange-100 via-white to-white 
                 dark:from-[#0a0a0a] dark:via-[#0a0a0a] dark:to-[#0a0a0a] 
                 text-zinc-900 dark:text-white transition-colors duration-300"
    >
      {/* glowing orb accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-orange-400 opacity-[0.08] blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-purple-500 opacity-[0.06] blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-2 sm:px-4 py-8">
        {/* Header and description */}
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Work & Projects
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Explore some of my design projects — each crafted with care,
            creativity, and a strong attention to detail. I focus on building
            clean, responsive interfaces that offer both aesthetic appeal and
            smooth user experiences.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 mb-12 mt-6"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-lg font-medium transition-colors duration-200",
                activeCategory === category
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-9"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
