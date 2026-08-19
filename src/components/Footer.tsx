import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1B1F2A] text-[#D0D5E6] mt-auto border-t border-[#2a2f3e]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/logo.png"
                alt="CursosPro Logo"
                width={140}
                height={45}
                className="h-11 w-auto object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed text-[#D0D5E6]/80 max-w-sm">
              Encontre os melhores cursos online com desconto. Parceiros das principais plataformas de ensino do Brasil. Aprenda novas habilidades e transforme sua carreira.
            </p>
            <div className="flex gap-3 mt-5">
              <div className="flex items-center gap-2 text-xs text-[#D0D5E6]/60">
                <svg className="h-4 w-4 text-[#FFC107]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Pagamento Seguro
              </div>
              <div className="flex items-center gap-2 text-xs text-[#D0D5E6]/60">
                <svg className="h-4 w-4 text-[#FFC107]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Suporte 24h
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Navegação</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/" className="hover:text-[#FFC107] transition-colors flex items-center gap-2">
                  <svg className="h-4 w-4 text-[#FFC107]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                  Início
                </a>
              </li>
              <li>
                <a href="/cursos" className="hover:text-[#FFC107] transition-colors flex items-center gap-2">
                  <svg className="h-4 w-4 text-[#FFC107]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  Todos os Cursos
                </a>
              </li>
              <li>
                <a href="/cursos" className="hover:text-[#FFC107] transition-colors flex items-center gap-2">
                  <svg className="h-4 w-4 text-[#FFC107]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
                  Ofertas
                </a>
              </li>
            </ul>
          </div>

          {/* Plataformas */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Plataformas</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                KiwiFy
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                Hotmart
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                Eduzz
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                Braip
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#0D0D0D] mt-10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#D0D5E6]/60">
              &copy; {new Date().getFullYear()} CursosPro. Todos os direitos reservados.
            </p>
            <p className="text-[11px] text-[#D0D5E6]/40 text-center md:text-right max-w-md">
              Este site contém links de afiliado. Ao comprar através dos nossos links, você nos ajuda a manter o site sem custo adicional para você.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
