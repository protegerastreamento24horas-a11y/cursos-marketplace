"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/cursos", label: "Cursos" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0D0D0D]/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-[#FFC107]/10" : "bg-[#0D0D0D]/80 backdrop-blur-md border-b border-[#1B1F2A]"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#FFC107] via-[#FFD633] to-[#FF7A00] flex items-center justify-center shadow-[0_0_20px_rgba(255,193,7,0.3)] group-hover:shadow-[0_0_30px_rgba(255,193,7,0.5)] transition-shadow">
              <span className="text-[#0D0D0D] font-black text-lg">C</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-white leading-tight tracking-tight">
                Cursos<span className="text-[#FFC107]">Pro</span>
              </span>
              <span className="text-[10px] text-[#D0D5E6]/60 uppercase tracking-widest hidden sm:block">Marketplace de Cursos</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-semibold text-[#D0D5E6] hover:text-[#FFC107] transition-colors rounded-lg hover:bg-[#FFC107]/5"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cursos"
              className="ml-4 px-5 py-2.5 text-sm font-bold text-[#0D0D0D] bg-gradient-to-r from-[#FFC107] to-[#FF7A00] rounded-xl hover:shadow-[0_0_20px_rgba(255,193,7,0.4)] transition-all hover:scale-105 active:scale-95"
            >
              Ver Cursos
            </Link>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2.5 text-[#D0D5E6] hover:text-[#FFC107] hover:bg-[#FFC107]/10 rounded-xl transition-all"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-[#1B1F2A] mt-2 pt-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 px-4 text-sm font-semibold text-[#D0D5E6] hover:text-[#FFC107] hover:bg-[#FFC107]/5 rounded-xl transition-all"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cursos"
              onClick={() => setMenuOpen(false)}
              className="block py-3 px-4 text-sm font-bold text-[#0D0D0D] bg-gradient-to-r from-[#FFC107] to-[#FF7A00] rounded-xl text-center mt-2"
            >
              Ver Cursos
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
