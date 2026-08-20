"use client";

import { Suspense, useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { courses, parsePrice } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import CategoryFilter from "@/components/CategoryFilter";
import SearchBar from "@/components/SearchBar";

function CursosContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("cat") || "Todos";
  const initialQ = searchParams.get("q") || "";

  const [search, setSearch] = useState(initialQ);
  const [category, setCategory] = useState(initialCat);
  const [sortBy, setSortBy] = useState("destaque");

  useEffect(() => {
    if (initialCat !== "Todos") setCategory(initialCat);
    if (initialQ) setSearch(initialQ);
  }, [initialCat, initialQ]);

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

  return (
    <div className="bg-[#0D0D0D] min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Todos os{" "}
            <span className="text-gradient-gold">Cursos</span>
          </h1>
          <p className="mt-2 text-sm text-[#D0D5E6]/50">
            Explore nossa colecao completa de cursos com desconto
          </p>
        </div>

        <div className="flex flex-col gap-3 mb-6">
          <SearchBar value={search} onChange={setSearch} />
          <CategoryFilter selected={category} onSelect={setCategory} />
        </div>

        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-[#D0D5E6]/50">
            {filteredCourses.length} curso{filteredCourses.length !== 1 ? "s" : ""} encontrado{filteredCourses.length !== 1 ? "s" : ""}
          </p>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-[#2a2f3e]/60 bg-[#1B1F2A]/80 px-3 py-2 text-xs text-[#D0D5E6]/80 outline-none transition-colors focus:border-[#FFC107]/60 cursor-pointer"
          >
            <option value="destaque">Destaques</option>
            <option value="menor-preco">Menor Preco</option>
            <option value="maior-preco">Maior Preco</option>
            <option value="melhor-avaliado">Melhor Avaliado</option>
            <option value="mais-alunos">Mais Alunos</option>
          </select>
        </div>

        {filteredCourses.length === 0 ? (
          <div className="text-center py-16">
            <svg className="mx-auto h-10 w-10 text-[#D0D5E6]/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <p className="mt-4 text-sm text-[#D0D5E6]/50">Nenhum curso encontrado.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function CursosPage() {
  return (
    <Suspense fallback={
      <div className="bg-[#0D0D0D] min-h-screen flex items-center justify-center">
        <div className="text-sm text-[#D0D5E6]/50">Carregando...</div>
      </div>
    }>
      <CursosContent />
    </Suspense>
  );
}
