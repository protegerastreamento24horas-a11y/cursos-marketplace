"use client";

import { useEffect, useRef } from "react";

const purchases = [
  { name: "Carlos M.", course: "Marketing Digital 360", time: "2 min" },
  { name: "Ana P.", course: "Trafego Pago Pro", time: "5 min" },
  { name: "Rafael S.", course: "IA para Empreendedores", time: "8 min" },
  { name: "Juliana F.", course: "Pack de Edicao 3.0", time: "11 min" },
  { name: "Lucas O.", course: "GLeads - Extrator de Leads", time: "14 min" },
  { name: "Mariana T.", course: "Realizando Sonhos Online", time: "17 min" },
  { name: "Pedro H.", course: "Curso Videos Imobiliarios", time: "20 min" },
  { name: "Fernanda L.", course: "Acesso aos Fornecedores", time: "23 min" },
  { name: "Bruno K.", course: "Plano 10K Pro", time: "26 min" },
  { name: "Camila R.", course: "Mae de Milhoes", time: "29 min" },
  { name: "Thiago A.", course: "Segredos da Gameplay", time: "32 min" },
  { name: "Isabela N.", course: "Jogue como um Pro", time: "35 min" },
];

export default function RecentPurchases() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId: number;
    let speed = 0.5;

    const animate = () => {
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
        el.scrollLeft = 0;
      }
      el.scrollLeft += speed;
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    const handleEnter = () => (speed = 0);
    const handleLeave = () => (speed = 0.5);
    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      cancelAnimationFrame(animId);
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  const items = [...purchases, ...purchases];

  return (
    <section className="py-4 border-y border-[#2a2f3e]/40 bg-[#1B1F2A]/20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-2">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
          <p className="text-[11px] font-semibold text-[#D0D5E6]/60 uppercase tracking-widest">
            Compras recentes
          </p>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-hidden whitespace-nowrap px-4 sm:px-6 lg:px-8"
        style={{ scrollBehavior: "auto" }}
      >
        {items.map((p, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center gap-3 rounded-xl border border-[#2a2f3e]/50 bg-[#1B1F2A]/60 backdrop-blur-sm px-4 py-2.5"
          >
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#FFC107]/20 to-[#FF7A00]/20 border border-[#FFC107]/20 flex items-center justify-center shrink-0">
              <svg className="h-4 w-4 text-[#FFC107]/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-[#D0D5E6]/80">{p.name}</span>
              <span className="text-[10px] text-[#D0D5E6]/40">
                comprou <span className="text-[#FFC107]/60 font-medium">{p.course}</span>
              </span>
            </div>
            <span className="text-[9px] text-[#D0D5E6]/25 ml-2">ha {p.time}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
