"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative w-full">
        <Image
          src="/banner.png"
          alt="CursosPro - Os Melhores Cursos Online"
          width={1920}
          height={600}
          className="w-full h-auto object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="#cursos"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FFC107] to-[#FF7A00] px-6 py-3 text-sm font-bold text-[#0D0D0D] shadow-[0_0_20px_rgba(255,193,7,0.2)] hover:shadow-[0_0_30px_rgba(255,193,7,0.35)] transition-all hover:scale-[1.02] active:scale-95"
          >
            Explorar Ofertas
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
          <Link
            href="/cursos"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-6 py-3 text-sm font-semibold text-[#1B1F2A] hover:border-[#FFC107]/30 hover:text-[#FFC107] hover:bg-[#FFC107]/5 transition-all"
          >
            Ver Todos os Cursos
          </Link>
        </div>
      </div>
    </section>
  );
}
