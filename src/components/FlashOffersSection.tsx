"use client";

import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import Carousel, { CarouselItem } from "@/components/Carousel";

export default function FlashOffersSection() {
  const offers = courses
    .filter((c) => c.originalPrice && c.featured);

  if (offers.length === 0) return null;

  return (
    <section className="py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            <span className="text-gradient-gold">Ofertas em Destaque</span>
          </h2>
          <p className="text-xs text-[#D0D5E6]/40 mt-1">Confira oportunidades selecionadas</p>
        </div>
        <Carousel id="flash-offers">
          {offers.map((course) => (
            <CarouselItem key={course.id}>
              <CourseCard course={course} compact />
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
