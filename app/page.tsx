"use client";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useTheme } from "./components/ThemeProvider";

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div style={{ background: isDark ? "#1a1410" : "#ffffff", minHeight: "100vh", transition: "background 0.5s ease" }}>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <div id="competences">
          <Skills />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
