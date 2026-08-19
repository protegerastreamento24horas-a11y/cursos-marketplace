export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  price: string;
  originalPrice?: string;
  affiliateLink: string;
  platform: "kiwify" | "hotmart" | "eduzz" | "braip" | "outro";
  rating?: number;
  students?: number;
  featured?: boolean;
}

export const categories = [
  "Todos",
  "Marketing Digital",
  "Programação",
  "Design",
  "Finanças",
  "Negócios",
  "Saúde",
  "Fitness",
  "Culinária",
  "Música",
  "Idiomas",
  "Desenvolvimento Pessoal",
] as const;

export type Category = (typeof categories)[number];

export const courses: Course[] = [
  {
    id: "1",
    title: "Exemplo: Curso de Marketing Digital",
    description: "Aprenda as melhores estratégias de marketing digital para impulsionar seus resultados online.",
    image: "/cursos/placeholder.svg",
    category: "Marketing Digital",
    price: "R$ 197,00",
    originalPrice: "R$ 497,00",
    affiliateLink: "https://example.com/affiliate/marketing",
    platform: "hotmart",
    rating: 4.8,
    students: 12500,
    featured: true,
  },
  {
    id: "2",
    title: "Exemplo: Curso de Programação Web",
    description: "Domine HTML, CSS, JavaScript e React para criar sites e aplicações modernas.",
    image: "/cursos/placeholder.svg",
    category: "Programação",
    price: "R$ 297,00",
    originalPrice: "R$ 697,00",
    affiliateLink: "https://example.com/affiliate/programacao",
    platform: "kiwify",
    rating: 4.9,
    students: 8300,
    featured: true,
  },
  {
    id: "3",
    title: "Exemplo: Design Gráfico Completo",
    description: "Do zero ao avançado em Photoshop, Illustrator e Figma para criar designs profissionais.",
    image: "/cursos/placeholder.svg",
    category: "Design",
    price: "R$ 177,00",
    originalPrice: "R$ 397,00",
    affiliateLink: "https://example.com/affiliate/design",
    platform: "hotmart",
    rating: 4.7,
    students: 6200,
  },
  {
    id: "4",
    title: "Exemplo: Investimentos para Iniciantes",
    description: "Aprenda a investir seu dinheiro com segurança e construa sua liberdade financeira.",
    image: "/cursos/placeholder.svg",
    category: "Finanças",
    price: "R$ 97,00",
    originalPrice: "R$ 297,00",
    affiliateLink: "https://example.com/affiliate/financas",
    platform: "kiwify",
    rating: 4.6,
    students: 15000,
    featured: true,
  },
  {
    id: "5",
    title: "Exemplo: Criação de Negócios Online",
    description: "Passo a passo para criar e escalar seu negócio online do zero.",
    image: "/cursos/placeholder.svg",
    category: "Negócios",
    price: "R$ 247,00",
    originalPrice: "R$ 597,00",
    affiliateLink: "https://example.com/affiliate/negocios",
    platform: "hotmart",
    rating: 4.8,
    students: 9800,
  },
  {
    id: "6",
    title: "Exemplo: Fitness e Nutrição",
    description: "Transforme seu corpo com treinos e alimentação personalizados.",
    image: "/cursos/placeholder.svg",
    category: "Fitness",
    price: "R$ 147,00",
    originalPrice: "R$ 347,00",
    affiliateLink: "https://example.com/affiliate/fitness",
    platform: "kiwify",
    rating: 4.5,
    students: 7400,
  },
];
