"use client";
import React, { useEffect, useState } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Force dark theme on mount
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <nav className="z-50 sticky top-0 w-full flex justify-center bg-black shadow-sm py-3 px-4">
      <div className="w-full max-w-7xl flex justify-between items-center bg-neutral-900 rounded-full px-6 py-2 shadow-md">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/assets/experiences/logo_dark.png"
            alt="logo"
            width={30}
            height={30}
          />
          <span className="font-semibold text-lg text-white">CharlieDev</span>
        </div>

        {/* Center Navigation (Desktop) */}
        <ul className="hidden md:flex gap-6 text-sm font-medium items-center text-white">
          <li className="hover:text-yellow-500 cursor-pointer">
            <Link href={"#home"}>Home</Link>
          </li>
          <li className="hover:text-yellow-500 cursor-pointer">
            <Link href={"#about"}>About</Link>
          </li>
          <li className="hover:text-yellow-500 cursor-pointer">
            <Link href={"#experiences"}>Experience</Link>
          </li>
          <li className="hover:text-yellow-500 cursor-pointer">
            <Link href={"#projects"}>Projects</Link>
          </li>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-3">
          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="https://github.com/adrianuscharlie"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full text-black"
            >
              <Github size={16} />
            </Link>
            <Link
              href="https://linkedin.com/in/adrianuscharlie/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full text-black"
            >
              <Linkedin size={16} />
            </Link>
            <Link
              href="mailto:adrianus.charlie02@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full text-black"
            >
              <Mail size={16} />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden text-white">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="absolute top-17 left-0 w-full flex flex-col items-center gap-4 p-5 bg-black shadow-md z-40 md:hidden text-white">
          <li className="hover:text-yellow-500 cursor-pointer">
            <Link href={"/#"}>Home</Link>
          </li>
          <li className="hover:text-yellow-500 cursor-pointer">
            <Link href={"/#about"}>About</Link>
          </li>
          <li className="hover:text-yellow-500 cursor-pointer">
            <Link href={"/#experiences"}>Experiences</Link>
          </li>
          <li className="hover:text-yellow-500 cursor-pointer">
            <Link href={"/#projects"}>Projects</Link>
          </li>

          <div className="flex gap-3 pt-2">
            <Link
              href="https://github.com/adrianuscharlie"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full text-black"
            >
              <Github size={16} />
            </Link>
            <Link
              href="https://linkedin.com/in/adrianuscharlie/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full text-black"
            >
              <Linkedin size={16} />
            </Link>
            <Link
              href="mailto:adrianus.charlie02@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full text-black"
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
