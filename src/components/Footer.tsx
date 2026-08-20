import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-600 mt-auto border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="CursosPro"
                width={130}
                height={40}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
              CursosPro — Compare. Escolha. Aprenda.
            </p>
            <p className="text-xs text-gray-400 mt-3 max-w-xs">
              Encontre os melhores cursos online com desconto das principais plataformas digitais.
            </p>
          </div>

          <div>
            <h3 className="text-[#1B1F2A] font-bold mb-4 text-sm uppercase tracking-wider">Navegacao</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#FFC107] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/cursos" className="hover:text-[#FFC107] transition-colors">
                  Cursos
                </Link>
              </li>
              <li>
                <Link href="/cursos#ofertas" className="hover:text-[#FFC107] transition-colors">
                  Ofertas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#1B1F2A] font-bold mb-4 text-sm uppercase tracking-wider">Categorias</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/cursos?cat=Marketing+Digital" className="hover:text-[#FFC107] transition-colors">
                  Marketing Digital
                </Link>
              </li>
              <li>
                <Link href="/cursos?cat=Inteligencia+Artificial" className="hover:text-[#FFC107] transition-colors">
                  Inteligencia Artificial
                </Link>
              </li>
              <li>
                <Link href="/cursos?cat=Trafego+Pago" className="hover:text-[#FFC107] transition-colors">
                  Trafego Pago
                </Link>
              </li>
              <li>
                <Link href="/cursos?cat=Empreendedorismo" className="hover:text-[#FFC107] transition-colors">
                  Empreendedorismo
                </Link>
              </li>
              <li>
                <Link href="/cursos?cat=Design" className="hover:text-[#FFC107] transition-colors">
                  Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#1B1F2A] font-bold mb-4 text-sm uppercase tracking-wider">Plataformas</h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 shrink-0" />
                KiwiFy
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                Hotmart
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                Eduzz
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500 shrink-0" />
                Braip
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} CursosPro. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <svg className="h-3.5 w-3.5 text-[#FFC107]/60" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Pagamento Seguro
              </span>
              <span className="text-gray-300">|</span>
              <span>Este site contem links de afiliado.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
