export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 bg-[#1B1F2A]/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            ⭐ <span className="text-gradient-gold">Quem Ja Conhece o CursosPro</span>
          </h2>
          <p className="text-sm text-[#D0D5E6]/50 mt-1">Depoimentos reais de quem ja encontrou cursos por aqui</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-[#1B1F2A]/40 rounded-2xl border border-[#2a2f3e]/30 p-6 flex flex-col items-center text-center min-h-[180px] justify-center"
            >
              <div className="h-10 w-10 rounded-full bg-[#FFC107]/10 mb-3 flex items-center justify-center">
                <svg className="h-5 w-5 text-[#FFC107]/40" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h.01a1 1 0 010 2H6a1 1 0 01-1-1zm5 0a1 1 0 011-1h.01a1 1 0 010 2H11a1 1 0 01-1-1zm5 0a1 1 0 011-1h.01a1 1 0 010 2H16a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xs text-[#D0D5E6]/40 italic">
                Em breve, depoimentos reais aparecerao aqui.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
