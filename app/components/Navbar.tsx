"use client";
import React, { useEffect, useState } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = saved || "light";
    setTheme(initialTheme);
    document.documentElement.classList.add(initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <nav className="z-50 sticky top-0 w-full flex justify-center bg-gradient-to-r from-white to-white dark:from-black dark:to-black shadow-sm py-3 px-4">
      <div className="w-full max-w-7xl flex justify-between items-center bg-white dark:bg-neutral-900 rounded-full px-6 py-2 shadow-md">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/assets/experiences/logo_dark.png"
            alt="logo"
            width={30}
            height={30}
          />
          <span className="font-semibold text-lg dark:text-white">
            CharlieDev
          </span>
        </div>

        {/* Center Navigation (Desktop) */}
        <ul className="hidden md:flex gap-6 text-sm font-medium items-center dark:text-white">
          <li className="hover:text-blue-500 dark:hover:text-yellow-500 cursor-pointer">
            Home
          </li>
          <li className="hover:text-blue-500 dark:hover:text-yellow-500 cursor-pointer">
            About
          </li>
          <li className="hover:text-blue-500 dark:hover:text-yellow-500 cursor-pointer">
            Experiences
          </li>
          <li className="hover:text-blue-500 dark:hover:text-yellow-500 cursor-pointer">
            Projects
          </li>
        </ul>

        {/* Right Icons (Always visible: Theme + Mobile Toggle) */}
        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} className="text-xl">
            {theme === "light" ? "🌞" : "🌙"}
          </button>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="https://github.com/adrianuscharlie"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black dark:bg-white rounded-full text-white dark:text-black"
            >
              <Github size={16} />
            </Link>
            <Link
              href="https://linkedin.com/in/adrianuscharlie/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black dark:bg-white rounded-full text-white dark:text-black"
            >
              <Linkedin size={16} />
            </Link>
            <Link
              href="mailto:adrianus.charlie02@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black dark:bg-white rounded-full text-white dark:text-black"
            >
              <Mail size={16} />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="absolute top-20 left-0 w-full flex flex-col items-center gap-4 p-5 bg-white dark:bg-black shadow-md z-40 md:hidden">
          <li className="hover:text-blue-500 dark:text-white cursor-pointer">
            Home
          </li>
          <li className="hover:text-blue-500 dark:text-white cursor-pointer">
            About
          </li>
          <li className="hover:text-blue-500 dark:text-white cursor-pointer">
            Projects
          </li>
          <li className="hover:text-blue-500 dark:text-white cursor-pointer">
            Contact
          </li>
          <div className="flex gap-3 pt-2">
            <Link
              href="https://github.com/adrianuscharlie"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black dark:bg-white rounded-full text-white dark:text-black"
            >
              <Github size={16} />
            </Link>
            <Link
              href="https://linkedin.com/in/adrianuscharlie/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black dark:bg-white rounded-full text-white dark:text-black"
            >
              <Linkedin size={16} />
            </Link>
            <Link
              href="mailto:adrianus.charlie02@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black dark:bg-white rounded-full text-white dark:text-black"
            >
              <Mail size={16} />
            </Link>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
