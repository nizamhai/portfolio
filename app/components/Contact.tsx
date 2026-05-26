"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, ExternalLink, MapPin, Phone } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  return (
    <section id="contact" className="relative py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className={`font-[family-name:var(--font-sora)] text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                Échangeons
              </h2>
              <div className="w-16 h-1 bg-amber-500" />
            </div>
            <p className={`text-lg leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Ouvert aux opportunités de collaboration et aux échanges autour de
              l&apos;excellence opérationnelle et du management de la relation client.
            </p>
            <div className="space-y-5 pt-4">
              <a
                href="mailto:nizamhai@gmail.com"
                className={`flex items-center gap-4 transition-colors group ${isDark ? "text-gray-300 hover:text-amber-400" : "text-gray-700 hover:text-amber-600"}`}
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-colors ${isDark ? "bg-[#211c16] border-[#3d3429] group-hover:border-amber-500/40" : "bg-white border-gray-200 group-hover:border-amber-500/40"}`}>
                  <Mail className="w-5 h-5" />
                </div>
                <span>nizamhai@gmail.com</span>
              </a>
              <a
                href="https://linkedin.com/in/nizam-hai-b9a208289"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 transition-colors group ${isDark ? "text-gray-300 hover:text-amber-400" : "text-gray-700 hover:text-amber-600"}`}
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-colors ${isDark ? "bg-[#211c16] border-[#3d3429] group-hover:border-amber-500/40" : "bg-white border-gray-200 group-hover:border-amber-500/40"}`}>
                  <ExternalLink className="w-5 h-5" />
                </div>
                <span>linkedin.com/in/nizam-hai-b9a208289</span>
              </a>
              <div className={`flex items-center gap-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${isDark ? "bg-[#211c16] border-[#3d3429]" : "bg-white border-gray-200"}`}>
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Île-de-France, France</span>
              </div>
              <div className={`flex items-center gap-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${isDark ? "bg-[#211c16] border-[#3d3429]" : "bg-white border-gray-200"}`}>
                  <Phone className="w-5 h-5" />
                </div>
                <span>Sur demande</span>
              </div>
            </div>
          </div>
          <form
            ref={formRef}
            className={`space-y-6 p-8 rounded-2xl border ${isDark ? "bg-[#1e1912] border-[#352e24]" : "bg-gray-50 border-gray-200"}`}
            onSubmit={(e: React.FormEvent) => {
              e.preventDefault();
              if (!formRef.current) return;
              setSending(true);
              setError("");
              setSent(false);
              emailjs
                .sendForm(
                  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
                  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
                  formRef.current,
                  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
                )
                .then(() => {
                  setSent(true);
                  setSending(false);
                  formRef.current?.reset();
                })
                .catch(() => {
                  setError("Erreur lors de l'envoi. Veuillez réessayer.");
                  setSending(false);
                });
            }}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className={`text-sm font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}>Nom</label>
                <input
                  type="text"
                  name="from_name"
                  className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:border-amber-500/50 transition-colors ${isDark ? "bg-[#14110d] border-[#3d3429] text-gray-100 placeholder:text-gray-600" : "bg-white border-gray-200 text-gray-900 placeholder:text-gray-400"}`}
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className={`text-sm font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}>Email</label>
                <input
                  type="email"
                  name="reply_to"
                  className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:border-amber-500/50 transition-colors ${isDark ? "bg-[#14110d] border-[#3d3429] text-gray-100 placeholder:text-gray-600" : "bg-white border-gray-200 text-gray-900 placeholder:text-gray-400"}`}
                  placeholder="votre@email.com"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className={`text-sm font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}>Sujet</label>
              <input
                type="text"
                name="subject"
                className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:border-amber-500/50 transition-colors ${isDark ? "bg-[#14110d] border-[#3d3429] text-gray-100 placeholder:text-gray-600" : "bg-white border-gray-200 text-gray-900 placeholder:text-gray-400"}`}
                placeholder="Objet de votre message"
                required
              />
            </div>
            <div className="space-y-2">
              <label className={`text-sm font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}>Message</label>
              <textarea
                rows={5}
                name="message"
                className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:border-amber-500/50 transition-colors resize-none ${isDark ? "bg-[#14110d] border-[#3d3429] text-gray-100 placeholder:text-gray-600" : "bg-white border-gray-200 text-gray-900 placeholder:text-gray-400"}`}
                placeholder="Votre message..."
                required
              />
            </div>
            {sent && (
              <p className="text-green-500 text-sm font-medium">Message envoyé avec succès !</p>
            )}
            {error && (
              <p className="text-red-500 text-sm font-medium">{error}</p>
            )}
            <button
              type="submit"
              disabled={sending}
              className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-black rounded-xl font-semibold text-base transition-all duration-300 hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? "Envoi en cours..." : "Envoyer le message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
