import React from "react";
import { motion } from "framer-motion";
import Nat_Bitton_Picture from "../Assets/nat_bitton_pfp.png";
import Nat_Bitton_Picture_2 from "../Assets/nat_bitton_pfp_2.png";
import TechnologyStack from "../components/TechnologyStack";
import { Button } from "../components/ui/Button";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Download } from "lucide-react";
import Project from "./Project";
import { Link } from "react-router";

const socialIcons = [
  { name: "Github", icon: <FaGithub />, url: "https://github.com/natbitton54" },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/natbitton18/",
  },
  {
    name: "Facebook",
    icon: <FaFacebookF />,
    url: "https://www.facebook.com/nathaniel.bitton.507",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/nat_bitton_19/",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative isolate w-full bg-gradient-to-br from-white via-zinc-50 to-zinc-100 dark:from-[#0a0a0a] dark:via-[#0a0a0a] dark:to-[#0a0a0a] transition-colors duration-300 pb-16">
        {/* background accents */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-orange-400 opacity-[0.08] blur-3xl" />
          <div className="absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-purple-500 opacity-[0.06] blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:grid-cols-12 lg:gap-12">
          {/* profile card */}
          <motion.article
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative col-span-12 flex flex-col items-center rounded-2xl bg-white/80 px-8 py-10 shadow-lg backdrop-blur-sm dark:bg-[#181818]/90 md:col-span-5"
          >
            <div className="relative mb-6 h-44 w-44 overflow-hidden rounded-full ring-4 ring-black dark:ring-orange-500">
              <Link to="/about">
                <img
                  src={Nat_Bitton_Picture}
                  alt="Nathaniel Bitton"
                  className="absolute inset-0 h-full w-full object-cover dark:hidden"
                />
                <img
                  src={Nat_Bitton_Picture_2}
                  alt="Nathaniel Bitton"
                  className="absolute inset-0 hidden h-full w-full object-cover dark:block"
                />
              </Link>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight">
              Nathaniel Bitton
            </h1>
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
              Fullstack Web Developer · Montréal, QC
            </p>

            <ul className="mt-6 flex gap-4">
              {socialIcons.map(({ name, icon, url }) => (
                <li key={name}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="grid h-10 w-10 place-content-center rounded-full bg-zinc-800 text-white transition-colors hover:bg-orange-500"
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </motion.article>

          {/* description card */}
          <motion.article
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="col-span-12 flex flex-col justify-between rounded-2xl bg-white/80 px-10 py-12 shadow-lg backdrop-blur-sm dark:bg-[#181818]/90 md:col-span-7"
          >
            <header>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Hello there!
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold leading-snug">
                I am Nathaniel Bitton, a full stack web developer skilled in{" "}
                <span className="text-orange-500">JavaScript, HTML, CSS,</span>{" "}
                and <span className="text-orange-500">ReactJS</span>. I create
                fast, responsive, and user-friendly websites.
              </h2>
            </header>

            <footer className="mt-10 flex flex-col items-start gap-4">
              <span className="flex items-center text-sm text-zinc-600 dark:text-zinc-400">
                <span className="mr-2 inline-block h-3 w-3 animate-pulse rounded-full bg-green-500" />
                Available for work or freelancing
              </span>

              <Button
                asChild
                className="gap-2 bg-orange-500 hover:bg-orange-600 dark:bg-orange-500"
              >
                <a
                  href="https://www.dropbox.com/scl/fi/yk3iqkkjj1vdt8p1yk3gn/Resume-CV.docx?rlkey=pt6n5ncp31uex3mokjst2a1e1&st=hz7mz03y&dl=1"
                  download
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4" />
                  Download&nbsp;CV
                </a>
              </Button>
            </footer>
          </motion.article>
        </div>

        {/* tech stack with border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-7xl px-6"
        >
          <div className="rounded-xl border-2 border-orange-500 p-4 dark:border-orange-400">
            <TechnologyStack />
          </div>
        </motion.div>
      </section>

      {/* project section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mt-10"
      >
        <Project />
      </motion.div>
    </>
  );
}
