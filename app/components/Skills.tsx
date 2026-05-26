"use client";

import {
  BarChart3,
  HeartHandshake,
  Cog,
  MessageSquare,
  Brain,
  Workflow,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";

const skills = [
  {
    category: "Maintenance Ascenseurs",
    icon: Cog,
    items: [
      "Maintenance préventive et corrective",
      "Diagnostic de pannes complexes",
      "Électricité et mécanique",
      "Normes de sécurité ascenseurs",
    ],
  },
  {
    category: "Management & Leadership",
    icon: Brain,
    items: [
      "Management d'équipes techniques",
      "Coordination terrain",
      "Formation et mentorat",
      "Conduite du changement",
    ],
  },
  {
    category: "GMAO & Outils",
    icon: Workflow,
    items: [
      "GMAO (gestion de maintenance)",
      "Tableaux de bord interactifs",
      "Systèmes informatiques SAV",
      "Reporting et KPIs",
    ],
  },
  {
    category: "Analyse de données",
    icon: BarChart3,
    items: [
      "Analyse de pannes répétitives",
      "Méthodes statistiques avancées",
      "Modèles de données complexes",
      "Optimisation des processus",
    ],
  },
  {
    category: "Relation client",
    icon: HeartHandshake,
    items: [
      "Satisfaction client",
      "Assistance technique bilingue",
      "Gestion des interventions",
      "Communication client",
    ],
  },
  {
    category: "Compétences transverses",
    icon: MessageSquare,
    items: [
      "Français & Anglais (bilingue)",
      "Tamoul, Hindi, Ourdou (courant)",
      "Arabe (notions)",
      "Gestion de projets & prise de décision",
    ],
  },
];

export default function Skills() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={`relative py-32 px-8 md:px-16 lg:px-24 ${isDark ? "bg-[#14110d]" : "bg-gray-50"}`}>
      <div className="max-w-6xl mx-auto">
        <div className="space-y-6 mb-20">
          <h2 className={`font-[family-name:var(--font-sora)] text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
            Compétences
          </h2>
          <div className="w-16 h-1 bg-amber-500" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className={`group p-8 rounded-2xl border transition-all duration-300 ${isDark ? "bg-[#1e1912] border-[#352e24] hover:border-amber-500/30" : "bg-white border-gray-200 hover:border-amber-500/40 shadow-sm"}`}
            >
              <skill.icon className="w-7 h-7 text-amber-500 mb-5 group-hover:scale-110 transition-transform duration-300" />
              <h3 className={`font-[family-name:var(--font-sora)] text-lg font-semibold mb-4 ${isDark ? "text-gray-100" : "text-gray-900"}`}>
                {skill.category}
              </h3>
              <ul className="space-y-2.5">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className={`text-sm flex items-center gap-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}
                  >
                    <span className="w-1 h-1 rounded-full bg-amber-500/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
