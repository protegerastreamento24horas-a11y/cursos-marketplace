const reasons = [
  { icon: "🔎", title: "CURADORIA", desc: "Cursos e ofertas organizados em um so lugar." },
  { icon: "💰", title: "OFERTAS", desc: "Encontre oportunidades e compare opcoes." },
  { icon: "⚡", title: "PRATICIDADE", desc: "Economize tempo procurando seu proximo curso." },
  { icon: "🔐", title: "TRANSPARENCIA", desc: "Informacoes claras sobre o produto e a plataforma responsavel." },
];

export default function WhyCursosPro() {
  return (
    <section className="py-12 sm:py-16 bg-[#1B1F2A]/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            💎 <span className="text-gradient-gold">Por Que Encontrar Seu Curso no CursosPro?</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-[#1B1F2A]/60 rounded-2xl border border-[#2a2f3e]/40 p-6 text-center hover:border-[#FFC107]/15 transition-colors"
            >
              <span className="text-3xl mb-3 block">{r.icon}</span>
              <h3 className="text-sm font-bold text-white mb-2">{r.title}</h3>
              <p className="text-xs text-[#D0D5E6]/50 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
