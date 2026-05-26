"use client";

import { useState } from "react";
import { Palette, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const solidColors = [
  { label: "Blanc", value: "#ffffff" },
  { label: "Neige", value: "#f5f5f7" },
  { label: "Crème", value: "#faf8f5" },
  { label: "Ivoire", value: "#fffff0" },
  { label: "Gris clair", value: "#f3f4f6" },
  { label: "Bleu pâle", value: "#eff6ff" },
  { label: "Vert pâle", value: "#ecfdf5" },
  { label: "Rose pâle", value: "#fdf2f8" },
  { label: "Violet pâle", value: "#faf5ff" },
  { label: "Jaune pâle", value: "#fefce8" },
  { label: "Cyan pâle", value: "#ecfeff" },
  { label: "Orange pâle", value: "#fff7ed" },
  { label: "Lavande", value: "#f5f3ff" },
  { label: "Menthe", value: "#f0fdfa" },
  { label: "Pêche", value: "#fff1f2" },
  { label: "Sable", value: "#fefdf0" },
  { label: "Perle", value: "#f8fafc" },
  { label: "Lin", value: "#faf5ef" },
  { label: "Coquille", value: "#fef9f5" },
  { label: "Nuage", value: "#f0f4f8" },
];

const gradients = [
  { label: "Soleil", value: "linear-gradient(180deg, #fef9c3 0%, #fde68a 100%)" },
  { label: "Menthe", value: "linear-gradient(180deg, #d1fae5 0%, #6ee7b7 100%)" },
  { label: "Rose", value: "linear-gradient(180deg, #fce7f3 0%, #f9a8d4 100%)" },
  { label: "Lavande", value: "linear-gradient(180deg, #ede9fe 0%, #a78bfa 100%)" },
  { label: "Orange", value: "linear-gradient(180deg, #ffedd5 0%, #fb923c 100%)" },
  { label: "Ciel", value: "linear-gradient(180deg, #e0f2fe 0%, #7dd3fc 100%)" },
  { label: "Pêche", value: "linear-gradient(180deg, #fff1f2 0%, #fda4af 100%)" },
  { label: "Lilas", value: "linear-gradient(180deg, #faf5ff 0%, #d8b4fe 100%)" },
  { label: "Citron", value: "linear-gradient(180deg, #fefce8 0%, #bef264 100%)" },
  { label: "Turquoise", value: "linear-gradient(180deg, #ecfeff 0%, #67e8f9 100%)" },
  { label: "Corail", value: "linear-gradient(180deg, #fff7ed 0%, #fdba74 100%)" },
  { label: "Glycine", value: "linear-gradient(180deg, #f5f3ff 0%, #c4b5fd 100%)" },
  { label: "Émeraude", value: "linear-gradient(180deg, #ecfdf5 0%, #34d399 100%)" },
  { label: "Fraise", value: "linear-gradient(180deg, #fdf2f8 0%, #f472b6 100%)" },
  { label: "Sable", value: "linear-gradient(180deg, #fefce8 0%, #fcd34d 100%)" },
  { label: "Azur", value: "linear-gradient(180deg, #eff6ff 0%, #93c5fd 100%)" },
  { label: "Abricot", value: "linear-gradient(180deg, #fffbeb 0%, #fbbf24 100%)" },
  { label: "Mauve", value: "linear-gradient(180deg, #fdf4ff 0%, #e879f9 100%)" },
  { label: "Aigue-marine", value: "linear-gradient(180deg, #f0fdfa 0%, #5eead4 100%)" },
  { label: "Bonbon", value: "linear-gradient(180deg, #fce7f3 0%, #c084fc 100%)" },
];

interface BackgroundPickerProps {
  onBackgroundChange: (bg: string) => void;
  currentBg: string;
}

export default function BackgroundPicker({ onBackgroundChange, currentBg }: BackgroundPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [tab, setTab] = useState<"solid" | "gradient">("solid");
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Choisir couleur d'arrière-plan"
        className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-110"
        style={{
          borderColor: isDark ? "rgba(245,158,11,0.3)" : "rgba(0,0,0,0.15)",
          background: isDark ? "rgba(245,158,11,0.1)" : "rgba(0,0,0,0.05)",
          color: isDark ? "#f59e0b" : "#1a1410",
        }}
      >
        <Palette className="w-4 h-4" />
      </button>

      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "3rem",
            right: 0,
            width: "320px",
            padding: "1.25rem",
            borderRadius: "1rem",
            background: isDark ? "#1e1912" : "#ffffff",
            border: isDark ? "1px solid #3d3429" : "1px solid #e5e7eb",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            zIndex: 100,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
            <span style={{ fontWeight: 600, fontSize: "0.9rem", color: isDark ? "#fff" : "#1a1410" }}>
              Arrière-plan
            </span>
            <button onClick={() => setIsOpen(false)} style={{ color: isDark ? "#9ca3af" : "#6b7280" }}>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
            <button
              onClick={() => setTab("solid")}
              style={{
                flex: 1,
                padding: "0.5rem",
                borderRadius: "0.5rem",
                fontSize: "0.8rem",
                fontWeight: 500,
                border: "none",
                cursor: "pointer",
                background: tab === "solid" ? (isDark ? "#f59e0b" : "#d97706") : (isDark ? "#2d261e" : "#f3f4f6"),
                color: tab === "solid" ? (isDark ? "#000" : "#fff") : (isDark ? "#9ca3af" : "#6b7280"),
              }}
            >
              Couleur unie
            </button>
            <button
              onClick={() => setTab("gradient")}
              style={{
                flex: 1,
                padding: "0.5rem",
                borderRadius: "0.5rem",
                fontSize: "0.8rem",
                fontWeight: 500,
                border: "none",
                cursor: "pointer",
                background: tab === "gradient" ? (isDark ? "#f59e0b" : "#d97706") : (isDark ? "#2d261e" : "#f3f4f6"),
                color: tab === "gradient" ? (isDark ? "#000" : "#fff") : (isDark ? "#9ca3af" : "#6b7280"),
              }}
            >
              Dégradé
            </button>
          </div>

          {/* Color grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0.5rem" }}>
            {(tab === "solid" ? solidColors : gradients).map((item) => (
              <button
                key={item.value}
                onClick={() => onBackgroundChange(item.value)}
                title={item.label}
                style={{
                  width: "100%",
                  aspectRatio: "1",
                  borderRadius: "0.5rem",
                  background: item.value,
                  border: currentBg === item.value
                    ? "2px solid #f59e0b"
                    : isDark ? "1px solid #3d3429" : "1px solid #d1d5db",
                  cursor: "pointer",
                  transition: "transform 0.15s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            ))}
          </div>

          {/* Custom color input */}
          <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <input
              type="color"
              defaultValue="#0d0a07"
              onChange={(e) => onBackgroundChange(e.target.value)}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "0.5rem",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            />
            <span style={{ fontSize: "0.75rem", color: isDark ? "#9ca3af" : "#6b7280" }}>
              Couleur personnalisée
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
