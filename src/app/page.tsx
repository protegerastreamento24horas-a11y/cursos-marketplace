"use client";

import { Suspense, useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { courses, parsePrice } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import CategoryFilter from "@/components/CategoryFilter";
import SearchBar from "@/components/SearchBar";
import Hero from "@/components/Hero";
import BenefitsBar from "@/components/BenefitsBar";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import TopSellingSection from "@/components/TopSellingSection";
import UnderPriceSection from "@/components/UnderPriceSection";
import CategoriesExplore from "@/components/CategoriesExplore";
import GoalSection from "@/components/GoalSection";
import FlashOffersSection from "@/components/FlashOffersSection";
import WhyCursosPro from "@/components/WhyCursosPro";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

function HomePageContent() {
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

  const isFiltering = search !== "" || category !== "Todos";

  return (
    <div className="bg-[#0D0D0D] min-h-screen">
      <Hero />
      <BenefitsBar />

      {!isFiltering && (
        <>
          <FeaturedCarousel />
          <TopSellingSection />
          <UnderPriceSection />
          <CategoriesExplore />
          <GoalSection />
          <FlashOffersSection />
        </>
      )}

      <section id="cursos" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">
            {isFiltering ? (
              <>Resultados para <span className="text-gradient-gold">&ldquo;{search || category}&rdquo;</span></>
            ) : (
              <span className="text-gradient-gold">Todos os Cursos</span>
            )}
          </h2>
          <p className="text-sm text-[#D0D5E6]/50">
            {filteredCourses.length} curso{filteredCourses.length !== 1 ? "s" : ""} encontrado{filteredCourses.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="flex flex-col gap-3 mb-6">
          <SearchBar value={search} onChange={setSearch} />
          <CategoryFilter selected={category} onSelect={setCategory} />
        </div>

        <div className="flex items-center justify-end mb-6">
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#D0D5E6]/50 hidden sm:inline">Ordenar:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-lg border border-[#2a2f3e]/60 bg-[#1B1F2A]/80 px-3 py-2 text-xs text-[#D0D5E6]/80 outline-none transition-colors focus:border-[#FFC107]/60 cursor-pointer"
            >
              <option value="destaque">Destaques</option>
              <option value="menor-preco">Menor Preco</option>
              <option value="maior-preco">Maior Preco</option>
              <option value="melhor-avaliado">Melhor Avaliado</option>
              <option value="mais-alunos">Mais Alunos</option>
            </select>
          </div>
        </div>

        {filteredCourses.length === 0 ? (
          <div className="text-center py-16">
            <svg className="mx-auto h-10 w-10 text-[#D0D5E6]/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <p className="mt-4 text-sm text-[#D0D5E6]/50">Nenhum curso encontrado com esses filtros.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </section>

      {!isFiltering && (
        <>
          <WhyCursosPro />
          <Testimonials />
          <FAQ />
        </>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={
      <div className="bg-[#0D0D0D] min-h-screen flex items-center justify-center">
        <div className="text-sm text-[#D0D5E6]/50">Carregando...</div>
      </div>
    }>
      <HomePageContent />
    </Suspense>
  );
}
