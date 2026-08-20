import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  title: "CursosPro — Os Melhores Cursos Online em Oferta",
  description:
    "Encontre cursos online, ofertas e oportunidades de aprendizado das principais plataformas digitais em um só lugar. Compare, escolha e aprenda.",
  keywords: [
    "cursos online",
    "cursos com desconto",
    "marketplace de cursos",
    "marketing digital",
    "inteligencia artificial",
    "trafego pago",
    "design",
    "empreendedorismo",
    "renda extra",
  ],
  openGraph: {
    title: "CursosPro — Os Melhores Cursos Online em Oferta",
    description:
      "Encontre cursos online, ofertas e oportunidades de aprendizado das principais plataformas digitais em um só lugar.",
    url: "https://cursos-marketplace.vercel.app",
    siteName: "CursosPro",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CursosPro — Os Melhores Cursos Online em Oferta",
    description:
      "Encontre cursos online, ofertas e oportunidades de aprendizado das principais plataformas digitais em um só lugar.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-full flex flex-col bg-[#0D0D0D] text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
