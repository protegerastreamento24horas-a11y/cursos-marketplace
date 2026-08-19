"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/cursos", label: "Cursos" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0D0D0D]/90 backdrop-blur-md border-b border-[#1B1F2A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-[#FFC107] to-[#FF7A00] flex items-center justify-center">
              <span className="text-[#0D0D0D] font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-bold text-white">
              Cursos<span className="text-[#FFC107]">Pro</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#D0D5E6] hover:text-[#FFC107] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-[#D0D5E6]"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-[#1B1F2A]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 px-2 text-sm font-medium text-[#D0D5E6] hover:text-[#FFC107] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
