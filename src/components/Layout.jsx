import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import { FaGithub, FaHandshake, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import projects from "../Assets/MyProjects.json";

import { cn } from "../lib/utils";
import { Button } from "./ui/Button.jsx";
import Footer from "./Footer.jsx";
import CallToAction from "./CallToAction.jsx";

export default function Layout({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const shouldUseDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/my-projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href) => location.pathname === href;

  const isProjectRoute = location.pathname.startsWith("/project/");
  let isValidProject = false;

  if (isProjectRoute) {
    const idPart = location.pathname.replace("/project/", "");
    const id = parseInt(idPart, 10);
    isValidProject = !isNaN(id) && projects.some((p) => p.id === id);
  }

  const isKnownRoute =
    navItems.some((item) => item.href === location.pathname) ||
    (isProjectRoute && isValidProject);

  const hideLayout = !isKnownRoute;

  const isContactPage = location.pathname.startsWith("/contact");

  return hideLayout ? (
    <main className="min-h-screen">
      <Outlet />
      {children}
    </main>
  ) : (
    <div className="min-h-screen bg-white text-zinc-900 transition-colors duration-300 dark:bg-zinc-900 dark:text-zinc-100">
      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80"
      >
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Link to="/" className="text-2xl font-bold">
                Nat Bitton
              </Link>
            </motion.div>

            {/* Desktop nav */}
            <motion.div
              className="hidden md:flex items-center space-x-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                },
              }}
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      "text-zinc-700 transition-colors duration-200 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white",
                      isActive(item.href) &&
                        "font-medium text-zinc-900 dark:text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Actions */}
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hidden md:flex"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>

              <a
                href="https://github.com/natbitton54"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 text-white hover:bg-orange-500 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/natbitton18/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 text-white hover:bg-orange-500 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </a>

              {!isContactPage && (
                <Button
                  variant="default"
                  className="hidden md:flex"
                  onClick={() => navigate("/contact")}
                >
                  Hire Me <FaHandshake className="ml-2 h-5 w-5" />
                </Button>
              )}

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileOpen((o) => !o)}
                className="md:hidden"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden mt-4 pb-4 border-t border-zinc-200 dark:border-zinc-800"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mt-4 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={cn(
                      "text-zinc-700 transition-colors duration-200 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white",
                      isActive(item.href) &&
                        "font-medium text-zinc-900 dark:text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                  >
                    {isDark ? (
                      <Sun className="h-5 w-5" />
                    ) : (
                      <Moon className="h-5 w-5" />
                    )}
                  </Button>
                  <Button variant="default">Hire Me 😊</Button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Content offset for fixed nav */}
      <main className="mx-auto max-w-7xl px-6 pt-24 pb-10">
        <Outlet />
        {children}
        <div className="mt-10">
          <CallToAction />
        </div>
        <div className="mt-10">
          <Footer />
        </div>
      </main>
    </div>
  );
}
