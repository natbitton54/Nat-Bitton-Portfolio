import React, { useEffect, useState } from "react";
import contactData from "../Assets/contact-me.json";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import { ImSpinner2 } from "react-icons/im";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function Contact() {
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setContact(contactData);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);

    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setTimeout(() => setSent(false), 2000);
    }, 2000);
  };

  if (!contact) return null;

  return (
    <section className="relative isolate w-full bg-gradient-to-br from-white via-zinc-50 to-zinc-100 dark:from-[#0a0a0a] dark:via-[#0a0a0a] dark:to-[#0a0a0a] transition-colors duration-300 pb-16">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-orange-400 opacity-[0.08] blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-purple-500 opacity-[0.06] blur-3xl" />
      </div>

      {/* Page Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center pt-12"
      >
        <p className="text-xl uppercase text-zinc-500 dark:text-zinc-400">
          Contact
        </p>
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
          Get in Touch with Me!
        </h1>
      </motion.div>

      {/* Cards Grid */}
      <div className="mx-auto max-w-6xl mt-10 grid md:grid-cols-2 gap-8 px-6">
        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/90 shadow-lg backdrop-blur-sm space-y-6"
        >
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-orange-500 mt-1 text-lg" />
            <div>
              <p className="font-semibold">My Location:</p>
              <p className="text-zinc-600 dark:text-zinc-400">
                {contact.location}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaPhone className="text-orange-500 mt-1 text-lg" />
            <div>
              <p className="font-semibold">Contact Number:</p>
              <p className="text-zinc-600 dark:text-zinc-400">
                {contact.phoneNumber}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaEnvelope className="text-orange-500 mt-1 text-lg" />
            <div>
              <p className="font-semibold">Email Me:</p>
              <p className="text-zinc-600 dark:text-zinc-400">
                {contact.email}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/90 shadow-lg backdrop-blur-sm"
        >
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400"
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400"
              />
            </div>

            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400"
            ></motion.textarea>

            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={loading || sent}
                className={`flex items-center justify-center gap-2 px-6 py-2 rounded-md font-medium transition-colors text-white 
                ${sent ? "bg-green-500" : "bg-orange-500 hover:bg-orange-600"}`}
              >
                {loading ? (
                  <>
                    <ImSpinner2 className="animate-spin text-lg" /> Sending...
                  </>
                ) : sent ? (
                  <>
                    <IoIosCheckmarkCircle className="text-lg" /> Sent!
                  </>
                ) : (
                  <>
                    Send Message <FaEnvelope />
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
