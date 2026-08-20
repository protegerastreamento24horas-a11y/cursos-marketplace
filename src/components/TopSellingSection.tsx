"use client";

import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import Carousel, { CarouselItem } from "@/components/Carousel";

export default function TopSellingSection() {
  const topSelling = courses
    .filter((c) => c.students && c.students >= 5000)
    .sort((a, b) => (b.students || 0) - (a.students || 0));

  if (topSelling.length === 0) return null;

  return (
    <section className="py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            🏆 <span className="text-gradient-gold">Mais Vendidos</span>
          </h2>
          <p className="text-xs text-[#D0D5E6]/40 mt-1">Os cursos que mais chamam atencao</p>
        </div>
        <Carousel id="top-selling">
          {topSelling.map((course, i) => (
            <CarouselItem key={course.id}>
              <div className="relative">
                {i < 3 && (
                  <div className="absolute -top-2 -left-1 z-10 text-lg">
                    {i === 0 ? "🥇" : i === 1 ? "🥈" : "🥉"}
                  </div>
                )}
                <CourseCard course={course} compact />
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
