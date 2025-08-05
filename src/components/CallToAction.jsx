import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import contactData from "../Assets/contact-me.json";

export default function CallToAction() {
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);
  const [showOptions, setShowOptions] = useState(false);

  const isContactPage = location.pathname.startsWith("/contact");

  const handleClick = () => {
    if (isContactPage) {
      setShowOptions((prev) => !prev);
    } else {
      navigate("/contact");
    }
  };

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowOptions(false);
      }
    };

    const handleScroll = () => {
      setShowOptions(false);
    };

    const handleMouseLeaveWindow = (e) => {
      // Detect when mouse leaves the entire browser window
      if (
        e.clientY <= 0 ||
        e.clientX <= 0 ||
        e.clientX >= window.innerWidth ||
        e.clientY >= window.innerHeight
      ) {
        setShowOptions(false);
      }
    };

    if (showOptions) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("wheel", handleScroll, { passive: true });
      document.addEventListener("mouseleave", handleMouseLeaveWindow);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("wheel", handleScroll);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
    };
  }, [showOptions]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative p-12 bg-white/80 dark:bg-[#181818]/90 border border-zinc-200 dark:border-zinc-700 text-center rounded-xl shadow-lg backdrop-blur-sm"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        Are You Ready to kickstart your project with
        <br />a touch of magic?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-3xl mx-auto"
      >
        Reach out and let's make it happen ✨. I'm also available for full-time
        or part-time opportunities to push the boundaries of design and deliver
        exceptional work.
      </motion.p>

      <div className="flex justify-center relative" ref={dropdownRef}>
        {/* Main Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleClick}
          className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
        >
          {isContactPage ? "Open Contact Options" : "Contact Me"}
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaPaperPlane />
          </motion.span>
        </motion.button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {showOptions && isContactPage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="absolute top-full mt-2 w-60 bg-white dark:bg-zinc-800 rounded-lg shadow-lg border dark:border-zinc-700 overflow-hidden z-20"
            >
              <a
                href={`mailto:${contactData.email}`}
                className="flex items-center gap-2 px-4 py-3 hover:bg-zinc-100 dark:hover:bg-zinc-700"
              >
                <FaEnvelope className="text-orange-500" /> Email Me
              </a>
              <a
                href={`tel:${contactData.phoneNumber}`}
                className="flex items-center gap-2 px-4 py-3 hover:bg-zinc-100 dark:hover:bg-zinc-700"
              >
                <FaPhone className="text-orange-500" /> Call Me
              </a>
              <a
                href="https://www.linkedin.com/in/natbitton18/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 hover:bg-zinc-100 dark:hover:bg-zinc-700"
              >
                <FaLinkedin className="text-orange-500" /> LinkedIn
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
