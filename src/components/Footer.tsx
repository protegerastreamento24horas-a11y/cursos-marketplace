export default function Footer() {
  return (
    <footer className="bg-[#1B1F2A] text-[#D0D5E6] mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#FFC107] to-[#FF7A00] flex items-center justify-center">
                <span className="text-[#0D0D0D] font-bold text-sm">C</span>
              </div>
              <span className="text-lg font-bold text-white">
                Cursos<span className="text-[#FFC107]">Pro</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Encontre os melhores cursos online com desconto. Parceiros das principais plataformas de ensino do Brasil.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-[#FFC107] transition-colors">Início</a>
              </li>
              <li>
                <a href="/cursos" className="hover:text-[#FFC107] transition-colors">Todos os Cursos</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Plataformas Parceiras</h3>
            <ul className="space-y-2 text-sm">
              <li>Hotmart</li>
              <li>KiwiFy</li>
              <li>Eduzz</li>
              <li>Braip</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#0D0D0D] mt-8 pt-8 text-center text-xs">
          <p className="text-[#D0D5E6]">&copy; {new Date().getFullYear()} CursosPro. Todos os direitos reservados.</p>
          <p className="mt-1 text-gray-500">
            Este site contém links de afiliado. Ao comprar através dos nossos links, você nos ajuda a manter o site.
          </p>
        </div>
      </div>
    </footer>
  );
}
