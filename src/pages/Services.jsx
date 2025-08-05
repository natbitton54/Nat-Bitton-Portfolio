import React from "react";
import { FaCode, FaLaptopCode, FaServer } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: <FaCode className="text-5xl text-orange-500 mb-4" />,
      title: "Frontend Development",
      description:
        "I create modern, responsive, and visually appealing user interfaces using technologies like React, HTML, CSS, and JavaScript.",
    },
    {
      icon: <FaLaptopCode className="text-5xl text-orange-500 mb-4" />,
      title: "Website Design",
      description:
        "I design clean, functional layouts that provide an excellent user experience and align with your project goals.",
    },
    {
      icon: <FaServer className="text-5xl text-orange-500 mb-4" />,
      title: "Backend Development",
      description:
        "I build secure, scalable server-side solutions with efficient databases and API integrations.",
    },
  ];

  return (
    <section className="py-10 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white transition-colors duration-300">
      <div className="text-center mb-12">
        <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-4">
          Services
        </p>
        <h2 className="text-6xl font-bold">Quality Services</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-9">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.2,
            }}
            className="p-8 bg-zinc-100 dark:bg-zinc-800 rounded-lg border border-transparent hover:border-orange-500 transition-colors"
          >
            <div className="flex items-center justify-center">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-zinc-700 dark:text-zinc-400">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
