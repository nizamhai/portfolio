"use client";

import { Target, Users, TrendingUp, Building2 } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const stats = [
  { value: "19+", label: "Années d'expérience", icon: Target },
  { value: "3", label: "Entreprises", icon: Building2 },
  { value: "6", label: "Postes occupés", icon: TrendingUp },
  { value: "6", label: "Langues parlées", icon: Users },
];

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="a-propos" className="relative py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
          <div className="space-y-6">
            <h2 className={`font-[family-name:var(--font-sora)] text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
              À propos
            </h2>
            <div className="w-16 h-1 bg-amber-500" />
          </div>
          <div className="space-y-8">
            <p className={`text-lg leading-[1.8] ${isDark ? "text-gray-300" : "text-gray-800"}`}>
              Fort de plus de 19 ans d&apos;expérience dans le secteur des ascenseurs,
              j&apos;ai évolué du terrain jusqu&apos;à la direction des opérations SAV.
              Mon parcours chez KONE (14 ans), MANEI LIFT (3 ans) et aujourd&apos;hui
              Mistral Ascenseurs m&apos;a permis de développer une expertise complète :
              maintenance technique, gestion d&apos;équipes, analyse de données et
              optimisation des processus.
            </p>
            <p className={`text-lg leading-[1.8] ${isDark ? "text-gray-300" : "text-gray-800"}`}>
              Compétent dans la gestion des services informatiques (GMAO), la création
              de tableaux de bord interactifs et l&apos;analyse de pannes répétitives
              avec des méthodes statistiques avancées.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`p-6 rounded-2xl border transition-colors duration-300 ${isDark ? "bg-[#211c16] border-[#3d3429] hover:border-amber-500/30" : "bg-gray-50 border-gray-200 hover:border-amber-500/40"}`}
            >
              <stat.icon className="w-6 h-6 text-amber-500 mb-4" />
              <p className={`font-[family-name:var(--font-sora)] text-3xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                {stat.value}
              </p>
              <p className={`text-sm mt-1 ${isDark ? "text-gray-500" : "text-gray-500"}`}>{stat.label}</p>
              {stat.label === "Langues parlées" && (
                <p className={`mt-2 text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                  Français & Anglais
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
