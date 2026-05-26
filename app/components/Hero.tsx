"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { SplineScene } from "./SplineScene";
import { useTheme } from "./ThemeProvider";
import BackgroundPicker from "./BackgroundPicker";

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [heroBg, setHeroBg] = useState(isDark ? "#0d0a07" : "#f5f5f7");

  useEffect(() => {
    const saved = localStorage.getItem(`heroBg-${theme}`);
    if (saved) {
      setHeroBg(saved);
    } else {
      setHeroBg(isDark ? "#0d0a07" : "#f5f5f7");
    }
  }, [theme, isDark]);

  const handleBgChange = (bg: string) => {
    setHeroBg(bg);
    localStorage.setItem(`heroBg-${theme}`, bg);
  };

  return (
    <section
      style={{
        background: heroBg,
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        transition: "background 0.5s ease",
      }}
    >
      {/* Background Picker Button */}
      <div style={{ position: "absolute", top: "5rem", right: "2rem", zIndex: 50 }}>
        <BackgroundPicker onBackgroundChange={handleBgChange} currentBg={heroBg} />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          minHeight: "100vh",
          alignItems: "center",
          padding: "0 2rem",
        }}
      >
        {/* Left side - Profile info */}
        <div
          style={{
            flex: 1,
            padding: "2rem",
            animation: "fadeUp 0.8s ease-out 0.3s both",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div style={{ marginBottom: "2rem" }}>
            <img
              src="/portfolio/profile.jpg"
              alt="Hai Nizam"
              style={{
                width: "140px",
                height: "140px",
                borderRadius: "50%",
                objectFit: "cover",
                border: isDark ? "3px solid rgba(245, 158, 11, 0.5)" : "3px solid rgba(180, 83, 9, 0.4)",
              }}
            />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1rem",
                borderRadius: "9999px",
                border: isDark ? "1px solid rgba(245, 158, 11, 0.3)" : "1px solid rgba(180, 83, 9, 0.3)",
                background: isDark ? "rgba(245, 158, 11, 0.1)" : "rgba(180, 83, 9, 0.08)",
                backdropFilter: "blur(8px)",
                fontSize: "0.875rem",
                color: isDark ? "#fde68a" : "#92400e",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#f59e0b",
                }}
              />
              Disponible pour de nouveaux défis
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 800,
              color: isDark ? "#ffffff" : "#1a1410",
              lineHeight: 1.1,
              margin: "0 0 1rem 0",
              fontFamily: "var(--font-sora), system-ui, sans-serif",
              transition: "color 0.5s ease",
            }}
          >
            Hai Nizam
          </h1>

          <p
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.6rem)",
              fontWeight: 300,
              color: isDark ? "#f59e0b" : "#b45309",
              margin: "0 0 1.5rem 0",
              fontFamily: "var(--font-sora), system-ui, sans-serif",
              transition: "color 0.5s ease",
            }}
          >
            Responsable des Opérations SAV Ascenseurs
          </p>

          <p
            style={{
              fontSize: "1rem",
              color: isDark ? "#d1d5db" : "#4b5563",
              maxWidth: "500px",
              lineHeight: 1.7,
              margin: "0 0 2rem 0",
              transition: "color 0.5s ease",
            }}
          >
            +19 ans d&apos;expérience dans la maintenance et les opérations SAV.
            Expert en gestion d&apos;équipes, optimisation des processus et
            excellence opérationnelle.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <a
              href="#contact"
              style={{
                padding: "0.875rem 1.75rem",
                background: isDark ? "#f59e0b" : "#d97706",
                color: isDark ? "#000" : "#fff",
                borderRadius: "9999px",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
              }}
            >
              Me contacter
            </a>
            <a
              href="#parcours"
              style={{
                padding: "0.875rem 1.75rem",
                border: isDark ? "1px solid rgba(245, 158, 11, 0.4)" : "1px solid rgba(0, 0, 0, 0.2)",
                color: isDark ? "#fef3c7" : "#1a1410",
                borderRadius: "9999px",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
              }}
            >
              Découvrir mon parcours
            </a>
          </div>
        </div>

        {/* Right side - Spline Robot */}
        <div
          style={{
            flex: 1,
            position: "relative",
            height: "100vh",
            minHeight: "500px",
          }}
        >
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full pointer-events-auto"
          />
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      >
        <a
          href="#a-propos"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            color: "#6b7280",
            textDecoration: "none",
          }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Scroll
          </span>
          <ChevronDown style={{ width: "20px", height: "20px" }} />
        </a>
      </div>
    </section>
  );
}
