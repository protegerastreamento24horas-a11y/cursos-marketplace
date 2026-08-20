"use client";

import { useState } from "react";

const faqItems = [
  {
    q: "O CursosPro vende os cursos diretamente?",
    a: "Nao. O CursosPro e um marketplace que reune ofertas de cursos online de diversas plataformas. Quando voce clica em um curso, e redirecionado para a plataforma responsavel pela venda e entrega do produto.",
  },
  {
    q: "Como funciona a compra?",
    a: "Ao encontrar um curso de interesse, voce clica no botao de oferta e e redirecionado para a pagina de checkout da plataforma (KiwiFy, Hotmart, etc.). A compra e feita diretamente com a plataforma.",
  },
  {
    q: "Onde recebo acesso ao curso?",
    a: "Apos a compra, voce recebe o acesso diretamente pela plataforma que realizou a venda. Cada plataforma tem seu proprio metodo de entrega de conteudo.",
  },
  {
    q: "Quais plataformas estao disponiveis?",
    a: "Trabalhamos com as principais plataformas de cursos online do Brasil: KiwiFy, Hotmart, Eduzz, Braip e outras.",
  },
  {
    q: "Como encontro cursos em promocao?",
    a: "Navegue pela pagina inicial ou pela secao de Cursos para ver ofertas com desconto. Voce tambem pode ordenar por preco para encontrar as melhores oportunidades.",
  },
  {
    q: "O pagamento e seguro?",
    a: "Sim. Todas as compras sao processadas diretamente pelas plataformas parceiras, que possuem system de pagamento seguro e criptografia de dados.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            ❓ <span className="text-gradient-gold">Perguntas Frequentes</span>
          </h2>
        </div>
        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="bg-[#1B1F2A]/60 rounded-xl border border-[#2a2f3e]/40 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left"
              >
                <span className="text-sm font-semibold text-white pr-4">{item.q}</span>
                <svg
                  className={`h-5 w-5 text-[#FFC107] shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-4 sm:px-5 pb-4 sm:pb-5 animate-fade-in">
                  <p className="text-sm text-[#D0D5E6]/60 leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
