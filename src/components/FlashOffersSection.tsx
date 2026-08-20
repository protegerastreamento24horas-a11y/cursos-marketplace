"use client";

import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";

export default function FlashOffersSection() {
  const offers = courses
    .filter((c) => c.originalPrice && c.featured)
    .slice(0, 3);

  if (offers.length === 0) return null;

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            ⚡ <span className="text-gradient-gold">Ofertas em Destaque</span>
          </h2>
          <p className="text-sm text-[#D0D5E6]/50 mt-1">Confira oportunidades selecionadas</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {offers.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
