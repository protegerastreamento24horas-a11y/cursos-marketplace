"use client";

import Link from "next/link";
import { categories, courses } from "@/data/courses";

export default function CategoriesExplore() {
  const displayCategories = categories.filter((c) => c.id !== "Todos");

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            📚 <span className="text-gradient-gold">Explore por Categoria</span>
          </h2>
          <p className="text-sm text-[#D0D5E6]/50 mt-1">Encontre o curso ideal para voce</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {displayCategories.map((cat) => {
            const count = courses.filter((c) => c.category === cat.id).length;
            return (
              <Link
                key={cat.id}
                href={`/cursos?cat=${encodeURIComponent(cat.id)}`}
                className="group flex flex-col items-center gap-3 bg-[#1B1F2A]/60 rounded-2xl border border-[#2a2f3e]/40 p-5 sm:p-6 hover:border-[#FFC107]/20 hover:bg-[#1B1F2A] transition-all"
              >
                <span className="text-3xl sm:text-4xl">{cat.icon}</span>
                <div className="text-center">
                  <h3 className="text-sm font-bold text-white group-hover:text-[#FFC107] transition-colors">
                    {cat.label}
                  </h3>
                  <p className="text-[10px] text-[#D0D5E6]/40 mt-1">
                    {count} curso{count !== 1 ? "s" : ""}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
