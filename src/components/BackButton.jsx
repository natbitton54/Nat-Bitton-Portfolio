import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <motion.button
      onClick={() => navigate("/my-projects")}
      className="group fixed top-6 left-6 z-50 flex items-center gap-0 overflow-hidden rounded-lg bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 transition-all duration-300"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <ArrowLeft className="w-5 h-5 m-2 transition-transform duration-300 group-hover:translate-x-0" />
      <span className="max-w-0 opacity-0 group-hover:max-w-[100px] group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pr-3">
        Back
      </span>
    </motion.button>
  );
}
