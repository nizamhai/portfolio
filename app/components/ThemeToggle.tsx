"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-110"
      style={{
        borderColor: theme === "dark" ? "rgba(245,158,11,0.3)" : "rgba(0,0,0,0.15)",
        background: theme === "dark" ? "rgba(245,158,11,0.1)" : "rgba(0,0,0,0.05)",
        color: theme === "dark" ? "#f59e0b" : "#1a1410",
      }}
    >
      {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}
