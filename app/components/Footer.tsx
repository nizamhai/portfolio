"use client";

import { useTheme } from "./ThemeProvider";

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer className={`py-12 px-8 md:px-16 lg:px-24 border-t ${isDark ? "border-[#2d261e]" : "border-gray-200"}`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Hai Nizam. Tous droits réservés.
        </p>
        <p className="text-sm text-gray-600">
          Responsable des Opérations SAV Ascenseurs
        </p>
      </div>
    </footer>
  );
}
