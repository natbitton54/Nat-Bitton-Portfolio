import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-8 px-1"
    >
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
        >
          © Copyright 2025, <span className="text-primary">Nat Bitton</span> All
          Rights Reserved.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 md:mt-0"
        >
          Made by Nathaniel Bitton
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
