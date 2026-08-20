import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { courses, getCourseBySlug } from "@/data/courses";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return { title: "Curso nao encontrado" };
  return {
    title: `${course.title} — CursosPro`,
    description: course.description,
    openGraph: {
      title: `${course.title} — CursosPro`,
      description: course.description,
      images: [{ url: course.image, width: 1200, height: 630 }],
    },
  };
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`h-5 w-5 ${star <= Math.round(rating) ? "text-[#FFC107]" : "text-gray-700"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-sm text-[#D0D5E6] ml-2">{rating}</span>
    </div>
  );
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const discount = course.originalPrice
    ? (() => {
        const parse = (p: string) => {
          if (p.startsWith("$")) return parseFloat(p.replace(/[^\d.]/g, "")) * 5;
          return parseFloat(p.replace(/[^\d,]/g, "").replace(",", ".")) || 0;
        };
        const curr = parse(course.price);
        const orig = parse(course.originalPrice!);
        return orig > 0 ? Math.round((1 - curr / orig) * 100) : 0;
      })()
    : null;

  const related = courses
    .filter((c) => c.category === course.category && c.id !== course.id)
    .slice(0, 4);

  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <nav className="mb-6 text-xs text-[#D0D5E6]/40">
          <Link href="/" className="hover:text-[#FFC107] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/cursos" className="hover:text-[#FFC107] transition-colors">Cursos</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D0D5E6]/60">{course.title}</span>
        </nav>

        <div className="grid lg:grid-cols-[1fr,380px] gap-8 lg:gap-12">
          <div>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#1B1F2A] mb-6">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
              {discount && discount > 0 && (
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-lg bg-gradient-to-r from-[#FF4500] to-[#FF7A00] px-3 py-1.5 text-sm font-bold text-white shadow-lg">
                    -{discount}% OFF
                  </span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center rounded-md border border-[#2a2f3e] bg-[#1B1F2A] px-2.5 py-1 text-xs font-semibold text-[#D0D5E6]/70 uppercase tracking-wider">
                {course.category}
              </span>
              <span className="inline-flex items-center rounded-md border border-[#2a2f3e] bg-[#1B1F2A] px-2.5 py-1 text-xs font-semibold text-[#D0D5E6]/70 uppercase tracking-wider">
                {course.platform}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
              {course.title}
            </h1>

            {course.rating && (
              <div className="mb-4">
                <StarRating rating={course.rating} />
              </div>
            )}

            {course.students && (
              <p className="text-sm text-[#D0D5E6]/50 mb-6">
                {course.students.toLocaleString("pt-BR")} alunos ja compra{course.students === 1 ? "" : "ram"} este curso
              </p>
            )}

            <div className="prose prose-invert max-w-none">
              <p className="text-[#D0D5E6]/70 leading-relaxed whitespace-pre-line">
                {course.longDescription || course.description}
              </p>
            </div>
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="bg-[#1B1F2A] rounded-2xl border border-[#2a2f3e]/60 p-6">
              <div className="mb-4">
                <span className="text-3xl font-extrabold text-[#FFC107]">{course.price}</span>
                {course.originalPrice && (
                  <span className="text-sm text-[#D0D5E6]/35 line-through ml-2">{course.originalPrice}</span>
                )}
              </div>

              {discount && discount > 0 && (
                <div className="mb-4">
                  <span className="inline-flex items-center rounded-lg bg-[#FF4500]/10 border border-[#FF4500]/20 px-3 py-1.5 text-xs font-bold text-[#FF4500]">
                    Economize {discount}%
                  </span>
                </div>
              )}

              <a
                href={course.checkoutLink || course.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-[#FFC107] to-[#FF7A00] px-6 py-4 text-base font-bold text-[#0D0D0D] shadow-[0_0_30px_rgba(255,193,7,0.2)] hover:shadow-[0_0_40px_rgba(255,193,7,0.35)] transition-all hover:scale-[1.01] active:scale-95"
              >
                Quero Acessar Essa Oferta
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {course.affiliateLink !== course.checkoutLink && (
                <a
                  href={course.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full mt-3 rounded-xl border border-[#2a2f3e] bg-[#0D0D0D]/50 px-6 py-3 text-sm font-medium text-[#D0D5E6]/70 hover:border-[#FFC107]/30 hover:text-[#FFC107] transition-all"
                >
                  Ver Pagina do Curso
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}

              {course.additionalLinks && course.additionalLinks.length > 0 && (
                <div className="mt-3 space-y-2">
                  {course.additionalLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full rounded-xl border border-[#2a2f3e]/60 bg-[#0D0D0D]/30 px-5 py-2.5 text-xs font-medium text-[#D0D5E6]/50 hover:border-[#FFC107]/20 hover:text-[#FFC107]/80 transition-all"
                    >
                      {link.label}
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ))}
                </div>
              )}

              <div className="mt-6 pt-5 border-t border-[#2a2f3e]/40 space-y-3">
                <div className="flex items-center gap-3 text-xs text-[#D0D5E6]/50">
                  <svg className="h-4 w-4 text-[#FFC107]/60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Voce sera redirecionado para a plataforma responsavel pela oferta.
                </div>
                <div className="flex items-center gap-3 text-xs text-[#D0D5E6]/50">
                  <svg className="h-4 w-4 text-[#FFC107]/60 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Compra segura processada pela plataforma.
                </div>
              </div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="text-xl font-bold text-white mb-6">
              Cursos <span className="text-gradient-gold">Relacionados</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {related.map((c) => (
                <Link
                  key={c.id}
                  href={`/curso/${c.slug}`}
                  className="group block bg-[#1B1F2A] rounded-xl border border-[#2a2f3e]/40 overflow-hidden hover:border-[#FFC107]/15 transition-all"
                >
                  <div className="relative aspect-[4/3] bg-[#0D0D0D] overflow-hidden">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="25vw"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-xs font-bold text-white line-clamp-2 group-hover:text-[#FFC107] transition-colors min-h-[2rem]">
                      {c.title}
                    </h3>
                    <span className="text-sm font-extrabold text-[#FFC107] mt-2 block">{c.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
