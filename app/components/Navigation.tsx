"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "À propos", href: "#a-propos" },
  { label: "Parcours", href: "#parcours" },
  { label: "Compétences", href: "#competences" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{ animation: "fadeDown 0.6s ease-out 0.8s both" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? theme === "dark"
            ? "bg-[#1a1410]/85 backdrop-blur-xl border-b border-[#352e24]"
            : "bg-white/85 backdrop-blur-xl border-b border-gray-200"
          : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24 h-16 flex items-center justify-between">
        <a
          href="#"
          className={`font-[family-name:var(--font-sora)] text-lg font-bold transition-colors ${
            theme === "dark" ? "text-white hover:text-amber-400" : "text-gray-900 hover:text-amber-600"
          }`}
        >
          HN
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-200 ${
                theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
