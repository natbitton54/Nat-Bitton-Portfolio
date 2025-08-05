import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

export default function ProjectDetails({ project }) {
  return (
    <div className="space-y-8">
      {/* Project Image */}
      <motion.div
        className="relative w-full overflow-hidden rounded-2xl shadow-lg group"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {project.liveDemoLink ? (
          <a
            href={project.liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            {/* Arrow Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowUpRight className="w-12 h-12 text-orange-500 transform translate-y-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100" />
            </div>
          </a>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover"
          />
        )}
      </motion.div>

      {/* Info & Description */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Info Card */}
        <motion.div
          className="rounded-2xl p-6 space-y-6 border border-transparent 
          bg-gradient-to-br from-white via-zinc-100 to-zinc-200 
          dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900
          dark:border-zinc-800"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Year</p>
            <p className="text-lg font-semibold">{project.year}</p>
          </div>
          <div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Client</p>
            <p className="text-lg font-semibold">{project.client}</p>
          </div>
          <div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Services</p>
            <p className="text-lg font-semibold">
              {Array.isArray(project.Service)
                ? project.Service.join(", ")
                : project.Service}
            </p>
          </div>
          <div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Project</p>
            <p className="text-lg font-semibold">{project.project}</p>
          </div>
          {project.technologies && (
            <div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Technologies Used
              </p>
              <p className="text-lg font-semibold">
                {project.technologies.join(", ")}
              </p>
            </div>
          )}
        </motion.div>

        {/* Right Description Card */}
        <motion.div
          className="rounded-2xl p-6 border border-transparent 
          bg-gradient-to-br from-white via-zinc-100 to-zinc-200 
          dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900
          dark:border-zinc-800"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <h2 className="text-xl font-semibold mb-4">Description</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-line">
            {project.description}
          </p>
        </motion.div>
      </div>

      {/* Extra Info Cards Below */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {project.features && (
          <motion.div
            className="rounded-2xl p-6 border border-transparent 
            bg-gradient-to-br from-white via-zinc-100 to-zinc-200 
            dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900
            dark:border-zinc-800"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-2">Features</h3>
            <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-1">
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </motion.div>
        )}

        {project.security && (
          <motion.div
            className="rounded-2xl p-6 border border-transparent 
            bg-gradient-to-br from-white via-zinc-100 to-zinc-200 
            dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900
            dark:border-zinc-800"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-2">Security</h3>
            <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-1">
              {project.security.map((sec, idx) => (
                <li key={idx}>{sec}</li>
              ))}
            </ul>
          </motion.div>
        )}

        {project.objective && (
          <motion.div
            className="rounded-2xl p-6 border border-transparent 
            bg-gradient-to-br from-white via-zinc-100 to-zinc-200 
            dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900
            dark:border-zinc-800"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-2">Objective</h3>
            <p className="text-zinc-700 dark:text-zinc-300">
              {project.objective}
            </p>
          </motion.div>
        )}
      </div>

      {project.languages && Array.isArray(project.languages) && (
        <motion.div
          className="rounded-2xl p-6 border border-transparent 
    bg-gradient-to-br from-white via-zinc-100 to-zinc-200 
    dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900
    dark:border-zinc-800"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
          <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-1">
            {project.languages.map((lang, idx) => (
              <li key={idx}>{lang}</li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* GitHub Links */}
      {project.id === 4 && Array.isArray(project.githubLink) && (
        <motion.div
          className="rounded-2xl p-6 border border-transparent 
          bg-gradient-to-br from-white via-zinc-100 to-zinc-200 
          dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900
          dark:border-zinc-800"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-lg font-semibold mb-4">GitHub Links</h3>
          {project.githubLink.map((link, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-blue-600 dark:text-orange-500 hover:underline group mb-2"
            >
              <span>{index === 0 ? "Server" : "Client"}</span>
              <ArrowUpRight className="w-5 h-5 transform transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          ))}
        </motion.div>
      )}

      {project.id !== 4 &&
        typeof project.githubLink === "string" &&
        project.githubLink.trim() !== "" && (
          <motion.div
            className="rounded-2xl p-6 border border-transparent 
            bg-gradient-to-br from-white via-zinc-100 to-zinc-200 
            dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900
            dark:border-zinc-800"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-4">GitHub Link</h3>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-blue-600 dark:text-orange-500 hover:underline group"
            >
              <span>{project.title}</span>
              <ArrowUpRight className="w-5 h-5 transform transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </motion.div>
        )}

      {/* Live Demo */}
      {project.liveDemoLink && (
        <motion.div
          className="rounded-2xl p-6 border border-transparent 
          bg-gradient-to-br from-white via-zinc-100 to-zinc-200 
          dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900
          dark:border-zinc-800"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className="text-lg font-semibold mb-4">Live Demo</h3>
          <a
            href={project.liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between text-blue-600 dark:text-orange-500 hover:underline group"
          >
            <span>{project.title}</span>
            <ArrowUpRight className="w-5 h-5 transform transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </motion.div>
      )}
    </div>
  );
}
