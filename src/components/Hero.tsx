"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0D0D0D]">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFC107]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#FF7A00]/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFC107]/[0.02] rounded-full blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFC107]/10 border border-[#FFC107]/20 px-4 py-1.5 mb-6">
              <span className="text-sm">🔥</span>
              <span className="text-xs font-bold text-[#FFC107] uppercase tracking-wider">Ofertas Selecionadas</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
              <span className="text-white">OS MELHORES</span>
              <br />
              <span className="text-white">CURSOS </span>
              <span className="text-gradient-gold">ONLINE</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#D0D5E6]/70 mb-4 max-w-lg font-medium">
              Aprenda mais. Pague menos.
            </p>

            <p className="text-sm text-[#D0D5E6]/50 mb-8 max-w-md leading-relaxed">
              Encontre cursos selecionados das principais plataformas digitais em um so lugar.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/cursos"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FFC107] to-[#FF7A00] px-7 py-3.5 text-sm font-bold text-[#0D0D0D] shadow-[0_0_30px_rgba(255,193,7,0.2)] hover:shadow-[0_0_40px_rgba(255,193,7,0.35)] transition-all hover:scale-[1.02] active:scale-95"
              >
                Explorar Ofertas
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/cursos"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#2a2f3e] bg-[#1B1F2A]/50 px-7 py-3.5 text-sm font-semibold text-[#D0D5E6] hover:border-[#FFC107]/30 hover:text-[#FFC107] hover:bg-[#FFC107]/5 transition-all"
              >
                Ver Todos os Cursos
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:flex justify-center items-center animate-fade-in-up delay-200">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FFC107]/10 to-[#FF7A00]/5 border border-[#FFC107]/10 animate-float" />
              <div className="absolute inset-4 rounded-2xl bg-[#1B1F2A] border border-[#2a2f3e] overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-3 w-3 rounded-full bg-[#FF4500]" />
                    <div className="h-3 w-3 rounded-full bg-[#FFC107]" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-[#FFC107]/20 rounded w-3/4" />
                    <div className="h-2 bg-[#D0D5E6]/10 rounded w-full" />
                    <div className="h-2 bg-[#D0D5E6]/10 rounded w-2/3" />
                    <div className="h-8 bg-gradient-to-r from-[#FFC107]/20 to-[#FF7A00]/20 rounded-lg mt-4" />
                    <div className="h-2 bg-[#FF4500]/20 rounded w-1/3 mt-2" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#1B1F2A] border border-[#2a2f3e] rounded-xl p-3 shadow-xl animate-float delay-300">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-[#FFC107] to-[#FF7A00] flex items-center justify-center text-[#0D0D0D] text-sm font-bold">
                    %
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">-66% OFF</div>
                    <div className="text-[10px] text-[#D0D5E6]/50">Oferta do dia</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 h-16 w-16 bg-[#FFC107]/10 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
