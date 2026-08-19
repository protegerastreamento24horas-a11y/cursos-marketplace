"use client";

import { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import CategoryFilter from "@/components/CategoryFilter";
import SearchBar from "@/components/SearchBar";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");

  const featuredCourses = useMemo(() => {
    return courses.filter((c) => c.featured);
  }, []);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        search === "" ||
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "Todos" || course.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const scrollCarousel = useCallback((id: string, direction: "left" | "right") => {
    const el = document.getElementById(`${id}-carousel`);
    if (!el) return;
    const scrollAmount = el.offsetWidth * 0.7;
    el.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-[#0D0D0D] min-h-screen">
      {/* Banner + Busca + Categorias */}
      <section className="relative w-full">
        <Image
          src="/banner.png"
          alt="Banner CursosPro"
          width={1920}
          height={600}
          className="w-full h-auto object-cover"
          priority
        />
        <div className="bg-[#1B1F2A] border-b border-[#2a2f3e]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col gap-3">
              <SearchBar value={search} onChange={setSearch} />
              <CategoryFilter selected={category} onSelect={setCategory} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#1B1F2A] border-b border-[#2a2f3e]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-4 bg-[#0D0D0D]/50 rounded-2xl p-5 border border-[#2a2f3e]">
              <div className="h-12 w-12 rounded-xl bg-[#FFC107]/10 flex items-center justify-center flex-shrink-0">
                <svg className="h-6 w-6 text-[#FFC107]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <div>
                <div className="text-2xl font-black text-white">{courses.length}+</div>
                <div className="text-[11px] text-[#D0D5E6]/70 uppercase tracking-wide">Cursos</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#0D0D0D]/50 rounded-2xl p-5 border border-[#2a2f3e]">
              <div className="h-12 w-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <div>
                <div className="text-2xl font-black text-white">5</div>
                <div className="text-[11px] text-[#D0D5E6]/70 uppercase tracking-wide">Plataformas</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#0D0D0D]/50 rounded-2xl p-5 border border-[#2a2f3e]">
              <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <div>
                <div className="text-2xl font-black text-white">50K+</div>
                <div className="text-[11px] text-[#D0D5E6]/70 uppercase tracking-wide">Alunos</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#0D0D0D]/50 rounded-2xl p-5 border border-[#2a2f3e]">
              <div className="h-12 w-12 rounded-xl bg-[#FF7A00]/10 flex items-center justify-center flex-shrink-0">
                <svg className="h-6 w-6 text-[#FF7A00]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
              </div>
              <div>
                <div className="text-2xl font-black text-white">Até 70%</div>
                <div className="text-[11px] text-[#D0D5E6]/70 uppercase tracking-wide">Desconto</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses - Carousel */}
      {category === "Todos" && search === "" && featuredCourses.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  <span className="text-[#FFC107]">Destaques</span>
                </h2>
                <p className="text-[#D0D5E6]">Deslize para ver as ofertas</p>
              </div>
              <div className="hidden sm:flex gap-2">
                <button
                  onClick={() => scrollCarousel("featured", "left")}
                  className="h-10 w-10 rounded-full border border-[#2a2f3e] bg-[#1B1F2A] flex items-center justify-center text-[#D0D5E6] hover:border-[#FFC107] hover:text-[#FFC107] transition-all"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button
                  onClick={() => scrollCarousel("featured", "right")}
                  className="h-10 w-10 rounded-full border border-[#2a2f3e] bg-[#1B1F2A] flex items-center justify-center text-[#D0D5E6] hover:border-[#FFC107] hover:text-[#FFC107] transition-all"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </div>
          <div
            id="featured-carousel"
            className="flex gap-4 overflow-x-auto pb-4 px-4 sm:px-[max(1rem,calc((100%-80rem)/2+1rem))] scrollbar-hide snap-x snap-mandatory"
          >
            {featuredCourses.map((course) => (
              <div key={course.id} className="flex-shrink-0 w-[280px] sm:w-[320px] snap-start">
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* All Courses */}
      <section id="cursos" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          {category === "Todos" ? "Todos os Cursos" : category}
        </h2>
        <p className="text-[#D0D5E6] mb-8">
          {filteredCourses.length} curso{filteredCourses.length !== 1 ? "s" : ""} encontrado{filteredCourses.length !== 1 ? "s" : ""}
        </p>

        {filteredCourses.length === 0 ? (
          <div className="text-center py-16">
            <svg className="mx-auto h-12 w-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <p className="mt-4 text-[#D0D5E6]">Nenhum curso encontrado com esses filtros.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
