"use client";

import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import Carousel, { CarouselItem } from "@/components/Carousel";

export default function FeaturedCarousel() {
  const featured = courses.filter((c) => c.featured);

  return (
    <section className="py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1B1F2A]">
            <span className="text-gradient-gold">Destaques</span>
          </h2>
          <p className="text-xs text-gray-400 mt-1">Deslize para ver as ofertas</p>
        </div>
        <Carousel id="featured">
          {featured.map((course) => (
            <CarouselItem key={course.id}>
              <CourseCard course={course} compact />
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
