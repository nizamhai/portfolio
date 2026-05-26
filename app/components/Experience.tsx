"use client";

import { Briefcase } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const experiences = [
  {
    period: "Jan. 2025 — Présent",
    role: "Responsable des Opérations SAV Ascenseurs",
    company: "Mistral Ascenseurs - Automatismes",
    location: "Marcoussis, Île-de-France · Hybride",
    description:
      "Pilotage stratégique des opérations du service après-vente ascenseurs. Management d'équipes techniques, optimisation des processus de maintenance et gestion de la satisfaction client.",
    achievements: [
      "Gestion de maintenance assistée par ordinateur (GMAO)",
      "Analyse des données et optimisation des performances",
      "Coordination des équipes terrain",
    ],
  },
  {
    period: "Fév. 2023 — Jan. 2025",
    role: "Expert Métiers",
    company: "MANEI LIFT",
    location: "Île-de-France, France",
    description:
      "Création de modèles de données complexes et de tableaux de bord interactifs. Gestion des services informatiques et mise en place de solutions technologiques. Analyse de pannes répétitives avec méthodes statistiques avancées.",
    achievements: [
      "Transformation des données en informations pour la prise de décision",
      "Mise en place de solutions technologiques améliorant l'efficacité globale",
      "Identification et résolution des schémas de pannes récurrentes",
      "Réduction des temps d'arrêt et amélioration de la fiabilité des systèmes",
    ],
  },
  {
    period: "Fév. 2022 — Fév. 2023",
    role: "Technicien Référent",
    company: "MANEI LIFT",
    location: "Île-de-France, France",
    description:
      "Inspections régulières, diagnostics de pannes complexes, réparations et ajustements pour garantir le bon fonctionnement des ascenseurs.",
    achievements: [
      "Diagnostic de pannes complexes et identification des pièces défectueuses",
      "Collaboration avec l'équipe pour résoudre les problèmes techniques complexes",
      "Respect des normes de sécurité et des réglementations",
      "Assistance technique et anglais bilingue",
    ],
  },
  {
    period: "Sept. 2021 — Jan. 2022",
    role: "Technicien Maintenance",
    company: "MANEI LIFT",
    location: "Île-de-France, France",
    description:
      "Diagnostic et réparation de pannes, entretien préventif et planifié des équipements ascenseurs.",
    achievements: [
      "Connaissances en électricité et mécanique",
      "Gestion des pièces de rechange",
      "Respect des normes de sécurité",
    ],
  },
  {
    period: "Sept. 2010 — Sept. 2021",
    role: "Technicien Maintenance Très Qualifié",
    company: "KONE",
    location: "Île-de-France, France",
    description:
      "Plus de 11 ans d'expertise en maintenance d'ascenseurs au sein d'un leader mondial. Interventions techniques de haut niveau, maintenance préventive et corrective.",
    achievements: [
      "11 ans d'expertise technique sur équipements KONE",
      "Maintenance préventive et corrective avancée",
      "Évolution du poste de Technicien qualifier à Très Qualifié",
    ],
  },
  {
    period: "Nov. 2007 — Sept. 2010",
    role: "Technicien Maintenance Qualifier",
    company: "KONE",
    location: "Ville de Paris, Île-de-France",
    description:
      "Début de carrière chez KONE en maintenance d'ascenseurs. Acquisition des compétences fondamentales en électricité, mécanique et hydraulique.",
    achievements: [
      "Formation aux normes de sécurité ascenseurs",
      "Maintenance préventive et dépannage",
      "Relation client et reporting",
    ],
  },
];

export default function Experience() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="parcours" className="relative py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-6 mb-20">
          <h2 className={`font-[family-name:var(--font-sora)] text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
            Parcours
          </h2>
          <div className="w-16 h-1 bg-amber-500" />
        </div>
        <div className="relative">
          <div className={`absolute left-0 md:left-8 top-0 bottom-0 w-px ${isDark ? "bg-[#3d3429]" : "bg-gray-200"}`} />
          <div className="space-y-16">
            {experiences.map((exp) => (
              <div key={exp.period} className="relative pl-8 md:pl-20">
                <div className={`absolute left-0 md:left-8 top-2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-amber-500 ${isDark ? "bg-[#1a1410]" : "bg-white"}`} />
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-sm font-mono text-amber-400">
                      {exp.period}
                    </span>
                    <Briefcase className="w-4 h-4 text-gray-500" />
                  </div>
                  <div>
                    <h3 className={`font-[family-name:var(--font-sora)] text-2xl font-semibold ${isDark ? "text-gray-100" : "text-gray-900"}`}>
                      {exp.role}
                    </h3>
                    <p className="text-gray-500 mt-1">{exp.company}</p>
                    <p className="text-gray-600 text-sm mt-0.5">{exp.location}</p>
                  </div>
                  <p className={`leading-relaxed max-w-2xl ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    {exp.description}
                  </p>
                  <ul className="space-y-2 pt-2">
                    {exp.achievements.map((a) => (
                      <li key={a} className={`flex items-start gap-3 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
