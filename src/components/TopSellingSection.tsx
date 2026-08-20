"use client";

import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";

export default function TopSellingSection() {
  const topSelling = courses
    .filter((c) => c.students && c.students >= 5000)
    .sort((a, b) => (b.students || 0) - (a.students || 0))
    .slice(0, 3);

  if (topSelling.length === 0) return null;

  const medals = ["🥇", "🥈", "🥉"];

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            🏆 <span className="text-gradient-gold">Mais Vendidos</span>
          </h2>
          <p className="text-sm text-[#D0D5E6]/50 mt-1">Os cursos que mais chamam atencao</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {topSelling.map((course, i) => (
            <div key={course.id} className="relative">
              <div className="absolute -top-2 -left-2 z-10 text-2xl">{medals[i]}</div>
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
