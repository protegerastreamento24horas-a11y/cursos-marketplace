"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0D0D0D]">
      <div className="relative w-full">
        <Image
          src="/banner.png"
          alt="CursosPro - Os Melhores Cursos Online"
          width={1920}
          height={600}
          className="w-full h-auto object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/60 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-16">
          <div className="mx-auto max-w-7xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFC107]/10 border border-[#FFC107]/20 px-4 py-1.5 mb-4 animate-fade-in-up">
              <span className="text-sm">🔥</span>
              <span className="text-xs font-bold text-[#FFC107] uppercase tracking-wider">Ofertas Selecionadas</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight mb-3 animate-fade-in-up delay-100">
              <span className="text-white">OS MELHORES </span>
              <span className="text-gradient-gold">CURSOS ONLINE</span>
            </h1>

            <p className="text-base sm:text-lg text-[#D0D5E6]/80 mb-5 max-w-lg font-medium animate-fade-in-up delay-200">
              Aprenda mais. Pague menos.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up delay-300">
              <Link
                href="/cursos"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FFC107] to-[#FF7A00] px-6 py-3 text-sm font-bold text-[#0D0D0D] shadow-[0_0_30px_rgba(255,193,7,0.25)] hover:shadow-[0_0_40px_rgba(255,193,7,0.4)] transition-all hover:scale-[1.02] active:scale-95"
              >
                Explorar Ofertas
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/cursos"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-white hover:border-[#FFC107]/40 hover:text-[#FFC107] hover:bg-[#FFC107]/5 transition-all"
              >
                Ver Todos os Cursos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
