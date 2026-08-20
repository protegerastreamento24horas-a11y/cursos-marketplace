"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const banners = [
  { src: "/banner1.png", alt: "CursosPro - Ofertas imperdiveis" },
  { src: "/banner2.png", alt: "CursosPro - Os Melhores Cursos Online" },
  { src: "/banner3.png", alt: "CursosPro - Aprenda com os melhores" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % banners.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative overflow-hidden bg-[#0D0D0D]">
      <div className="relative w-full" style={{ paddingTop: "46%" }}>
        {banners.map((banner, i) => (
          <Image
            key={banner.src}
            src={banner.src}
            alt={banner.alt}
            width={1920}
            height={960}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
            priority={i === 0}
            sizes="100vw"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />

<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${i === current ? "w-6 bg-[#FFC107]" : "w-2 bg-white/40 hover:bg-white/60"}`}
              aria-label={`Banner ${i + 1}`}
            />
          ))}
        </div>
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
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#2a2f3e] bg-[#1B1F2A]/50 px-6 py-3 text-sm font-semibold text-[#D0D5E6] hover:border-[#FFC107]/30 hover:text-[#FFC107] hover:bg-[#FFC107]/5 transition-all"
          >
            Ver Todos os Cursos
          </Link>
        </div>
      </div>
    </section>
  );
}
