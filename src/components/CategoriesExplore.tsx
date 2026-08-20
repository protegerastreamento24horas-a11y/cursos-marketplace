"use client";

import Link from "next/link";
import { categories, courses } from "@/data/courses";
import Carousel, { CarouselItem } from "@/components/Carousel";

export default function CategoriesExplore() {
  const displayCategories = categories.filter((c) => c.id !== "Todos");

  return (
    <section className="py-8 sm:py-12 bg-[#1B1F2A]/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            <span className="text-gradient-gold">Explore por Categoria</span>
          </h2>
          <p className="text-xs text-[#D0D5E6]/40 mt-1">Encontre o curso ideal para voce</p>
        </div>
        <Carousel id="categories">
          {displayCategories.map((cat) => {
            const count = courses.filter((c) => c.category === cat.id).length;
            return (
              <CarouselItem key={cat.id}>
                <Link
                  href={`/cursos?cat=${encodeURIComponent(cat.id)}`}
                  className="group flex flex-col items-center gap-2 bg-[#1B1F2A]/60 border border-[#2a2f3e]/40 p-5 hover:border-[#FFC107]/20 hover:bg-[#1B1F2A] transition-all h-full"
                >
                  <span className="text-xs font-bold text-[#FFC107] bg-[#FFC107]/10 h-10 w-10 flex items-center justify-center">{cat.icon}</span>
                  <h3 className="text-xs font-bold text-white group-hover:text-[#FFC107] transition-colors text-center">
                    {cat.label}
                  </h3>
                  <p className="text-[10px] text-[#D0D5E6]/35">
                    {count} curso{count !== 1 ? "s" : ""}
                  </p>
                </Link>
              </CarouselItem>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}
