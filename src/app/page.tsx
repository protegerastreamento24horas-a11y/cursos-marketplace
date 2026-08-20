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
  const [sortBy, setSortBy] = useState("destaque");

  const featuredCourses = useMemo(() => {
    return courses.filter((c) => c.featured);
  }, []);

  const parsePrice = (price: string): number => {
    const match = price.replace(/[^\d,.]/g, '').replace(',', '.');
    return parseFloat(match) || 0;
  };

  const filteredCourses = useMemo(() => {
    let result = courses.filter((course) => {
      const matchesSearch =
        search === "" ||
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "Todos" || course.category === category;
      return matchesSearch && matchesCategory;
    });

    switch (sortBy) {
      case "menor-preco":
        result = [...result].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
        break;
      case "maior-preco":
        result = [...result].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
        break;
      case "melhor-avaliado":
        result = [...result].sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "mais-alunos":
        result = [...result].sort((a, b) => (b.students || 0) - (a.students || 0));
        break;
      case "destaque":
      default:
        result = [...result].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return result;
  }, [search, category, sortBy]);

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
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {category === "Todos" ? "Todos os Cursos" : category}
            </h2>
            <p className="text-[#D0D5E6]">
              {filteredCourses.length} curso{filteredCourses.length !== 1 ? "s" : ""} encontrado{filteredCourses.length !== 1 ? "s" : ""}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#D0D5E6]/70">Ordenar:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-xl border border-[#2a2f3e] bg-[#1B1F2A] px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-[#FFC107] cursor-pointer"
            >
              <option value="destaque">Destaques</option>
              <option value="menor-preco">Menor Preço</option>
              <option value="maior-preco">Maior Preço</option>
              <option value="melhor-avaliado">Melhor Avaliado</option>
              <option value="mais-alunos">Mais Alunos</option>
            </select>
          </div>
        </div>

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
