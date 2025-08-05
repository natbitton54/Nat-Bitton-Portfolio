import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const shouldUseDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-gray-50 dark:bg-zinc-900 transition-colors duration-300">
      <img
        src={`${process.env.PUBLIC_URL}/images/robot-404.png`}
        alt="404 - Not Found Robot"
        className="w-72 h-auto mb-6 rounded-full"
      />
      <h1 className="text-4xl font-bold text-blue-700 dark:text-orange-500 mb-2">
        404 - Page Not Found
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Oops! We couldn’t find the page you were looking for.
      </p>
      <Link
        to="/"
        className="bg-blue-600 dark:bg-orange-500 text-white px-5 py-2 rounded hover:bg-blue-700 dark:hover:bg-orange-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
