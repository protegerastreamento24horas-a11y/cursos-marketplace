"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/cursos", label: "Cursos" },
  { href: "/cursos#ofertas", label: "Ofertas" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      router.push(`/cursos?q=${encodeURIComponent(searchValue.trim())}`);
      setSearchOpen(false);
      setSearchValue("");
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0D0D]/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.6)] border-b border-[#FFC107]/10"
          : "bg-[#0D0D0D]/80 backdrop-blur-md border-b border-[#1B1F2A]/50"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo.png"
              alt="CursosPro"
              width={120}
              height={36}
              className="h-8 sm:h-9 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[#D0D5E6]/80 hover:text-[#FFC107] transition-colors rounded-lg hover:bg-[#FFC107]/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2.5 text-[#D0D5E6]/70 hover:text-[#FFC107] hover:bg-[#FFC107]/10 rounded-xl transition-all"
              aria-label="Buscar"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <Link
              href="/cursos"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-[#0D0D0D] bg-gradient-to-r from-[#FFC107] to-[#FF7A00] rounded-xl hover:shadow-[0_0_20px_rgba(255,193,7,0.3)] transition-all hover:scale-[1.02] active:scale-95"
            >
              Ver Cursos
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2.5 text-[#D0D5E6]/70 hover:text-[#FFC107] hover:bg-[#FFC107]/10 rounded-xl transition-all"
              aria-label="Menu"
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
        </div>

        {searchOpen && (
          <form onSubmit={handleSearch} className="pb-4 animate-fade-in">
            <div className="relative">
              <svg className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#D0D5E6]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="O que voce quer aprender hoje?"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                autoFocus
                className="w-full rounded-xl border border-[#2a2f3e] bg-[#1B1F2A] py-3 pl-11 pr-4 text-sm text-white placeholder-[#D0D5E6]/40 outline-none transition-colors focus:border-[#FFC107] focus:ring-2 focus:ring-[#FFC107]/20"
              />
            </div>
          </form>
        )}

        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-[#1B1F2A]/50 mt-2 pt-3 space-y-1 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 px-4 text-sm font-medium text-[#D0D5E6]/80 hover:text-[#FFC107] hover:bg-[#FFC107]/5 rounded-xl transition-all"
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
