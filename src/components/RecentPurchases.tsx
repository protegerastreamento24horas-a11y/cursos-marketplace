"use client";

const purchases = [
  { name: "Carlos M.", course: "Marketing Digital 360", time: "2 min", platform: "KiwiFy" },
  { name: "Ana P.", course: "Trafego Pago Pro", time: "5 min", platform: "Hotmart" },
  { name: "Rafael S.", course: "IA para Empreendedores", time: "8 min", platform: "KiwiFy" },
  { name: "Juliana F.", course: "Pack de Edicao 3.0", time: "11 min", platform: "KiwiFy" },
  { name: "Lucas O.", course: "GLeads - Extrator de Leads", time: "14 min", platform: "KiwiFy" },
  { name: "Mariana T.", course: "Realizando Sonhos Online", time: "17 min", platform: "Hotmart" },
  { name: "Pedro H.", course: "Curso Videos Imobiliarios", time: "20 min", platform: "KiwiFy" },
  { name: "Fernanda L.", course: "Acesso aos Fornecedores", time: "23 min", platform: "KiwiFy" },
  { name: "Bruno K.", course: "Plano 10K Pro", time: "26 min", platform: "Hotmart" },
  { name: "Camila R.", course: "Mae de Milhoes", time: "29 min", platform: "KiwiFy" },
  { name: "Thiago A.", course: "Segredos da Gameplay", time: "32 min", platform: "KiwiFy" },
  { name: "Isabela N.", course: "Jogue como um Pro", time: "35 min", platform: "Hotmart" },
];

const platformColors: Record<string, string> = {
  KiwiFy: "from-green-500/20 to-green-600/10 border-green-500/20",
  Hotmart: "from-orange-500/20 to-orange-600/10 border-orange-500/20",
};

export default function RecentPurchases() {
  const items = [...purchases, ...purchases, ...purchases];

  return (
    <section className="py-5 border-y border-[#2a2f3e]/40 bg-gradient-to-b from-[#0D0D0D] via-[#1B1F2A]/10 to-[#0D0D0D] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          <p className="text-[10px] font-bold text-[#D0D5E6]/50 uppercase tracking-[0.2em]">
            Compras recentes ao vivo
          </p>
        </div>
      </div>

      <div className="relative" style={{ perspective: "800px" }}>
        <div className="overflow-hidden">
          <div className="flex gap-4 w-max animate-scroll py-2">
            {items.map((p, i) => (
              <div
                key={i}
                className="flex-shrink-0 group"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className="relative flex items-center gap-3 rounded-2xl border border-[#2a2f3e]/40 bg-gradient-to-br from-[#1B1F2A]/80 to-[#0D0D0D]/90 backdrop-blur-md px-5 py-3 transition-all duration-500 hover:border-[#FFC107]/30 hover:shadow-[0_0_30px_rgba(255,193,7,0.1)]"
                  style={{
                    transform: "rotateY(-2deg) rotateX(1deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

                  <div className={`h-9 w-9 rounded-xl bg-gradient-to-br ${platformColors[p.platform] || platformColors.KiwiFy} flex items-center justify-center shrink-0`}>
                    <svg className="h-4.5 w-4.5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-bold text-[#D0D5E6]/90 truncate">{p.name}</span>
                    <span className="text-[10px] text-[#D0D5E6]/40 truncate">
                      <span className="text-[#FFC107]/70 font-semibold">{p.course}</span>
                    </span>
                  </div>

                  <div className="flex flex-col items-end ml-2 shrink-0">
                    <span className="text-[8px] font-bold text-green-400/80 uppercase tracking-wider">Confirmado</span>
                    <span className="text-[8px] text-[#D0D5E6]/20">ha {p.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0D0D0D] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0D0D0D] to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
