"use client";

import { courses, parsePrice } from "@/data/courses";
import Link from "next/link";
import Carousel, { CarouselItem } from "@/components/Carousel";

export default function UnderPriceSection() {
  const under50 = courses
    .filter((c) => {
      const price = parsePrice(c.price);
      return price > 0 && price <= 50 && !c.price.includes("/mes") && !c.price.includes("/ano");
    })
    .sort((a, b) => parsePrice(a.price) - parsePrice(b.price));

  if (under50.length === 0) return null;

  return (
    <section className="py-8 sm:py-12 bg-[#1B1F2A]/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            <span className="text-gradient-gold">Cursos Ate R$50</span>
          </h2>
          <p className="text-xs text-[#D0D5E6]/40 mt-1">Conhecimento que cabe no bolso</p>
        </div>
        <Carousel id="under-price">
          {under50.map((course) => (
            <CarouselItem key={course.id}>
              <Link
                href={`/curso/${course.slug}`}
                className="group block bg-[#1B1F2A] rounded-2xl border border-[#2a2f3e]/60 p-4 hover:border-[#FFC107]/20 hover:shadow-[0_4px_20px_rgba(255,193,7,0.08)] transition-all h-full"
              >
                <span className="text-[10px] font-semibold text-[#FFC107]/60 uppercase tracking-wider">{course.category}</span>
                <h3 className="text-sm font-bold text-white mt-2 mb-3 line-clamp-2 group-hover:text-[#FFC107] transition-colors leading-snug min-h-[2.5rem]">
                  {course.title}
                </h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-lg font-extrabold text-[#FFC107]">{course.price}</span>
                  {course.originalPrice && (
                    <span className="text-xs text-[#D0D5E6]/30 line-through">{course.originalPrice}</span>
                  )}
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#FFC107] group-hover:gap-2 transition-all">
                  Quero Aprender
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
