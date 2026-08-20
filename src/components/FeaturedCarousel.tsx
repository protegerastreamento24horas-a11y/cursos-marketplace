"use client";

import { useCallback } from "react";
import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";

export default function FeaturedCarousel() {
  const featured = courses.filter((c) => c.featured);

  const scroll = useCallback((dir: "left" | "right") => {
    const el = document.getElementById("featured-carousel");
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -el.offsetWidth * 0.7 : el.offsetWidth * 0.7, behavior: "smooth" });
  }, []);

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              <span className="text-gradient-gold">Destaques</span>
            </h2>
            <p className="text-sm text-[#D0D5E6]/50 mt-1">Deslize para ver as ofertas</p>
          </div>
          <div className="hidden sm:flex gap-2">
            <button onClick={() => scroll("left")} className="h-9 w-9 rounded-full border border-[#2a2f3e] bg-[#1B1F2A] flex items-center justify-center text-[#D0D5E6]/60 hover:border-[#FFC107]/40 hover:text-[#FFC107] transition-all" aria-label="Anterior">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={() => scroll("right")} className="h-9 w-9 rounded-full border border-[#2a2f3e] bg-[#1B1F2A] flex items-center justify-center text-[#D0D5E6]/60 hover:border-[#FFC107]/40 hover:text-[#FFC107] transition-all" aria-label="Proximo">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
      <div
        id="featured-carousel"
        className="flex gap-4 overflow-x-auto pb-4 px-4 sm:px-[max(1rem,calc((100%-80rem)/2+1rem))] scrollbar-hide snap-x snap-mandatory"
      >
        {featured.map((course) => (
          <div key={course.id} className="flex-shrink-0 w-[260px] sm:w-[300px] snap-start">
            <CourseCard course={course} compact />
          </div>
        ))}
      </div>
    </section>
  );
}
