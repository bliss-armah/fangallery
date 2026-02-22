import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold tracking-tighter text-white"
        >
          FAN <span className="font-light text-gray-400">GALLERY</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link
            href="#services"
            className="hover:text-white transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            href="#portfolio"
            className="hover:text-white transition-colors duration-200"
          >
            Portfolio
          </Link>
          <Link
            href="#about"
            className="hover:text-white transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="hover:text-white transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>

        <button className="md:hidden text-white" aria-label="Menu">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
