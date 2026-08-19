"use client";

import { useState, useMemo } from "react";
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

  return (
    <div className="bg-[#0D0D0D] min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0D0D0D] via-[#1B1F2A] to-[#0D0D0D]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,193,7,0.1)_0%,_transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Os{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC107] to-[#FF7A00]">
                Melhores
              </span>{" "}
              Cursos Online
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#D0D5E6] max-w-2xl mx-auto">
              Encontre cursos com desconto das principais plataformas. Hotmart, KiwiFy, Eduzz e muito mais.
            </p>
            <div className="mt-10 flex justify-center">
              <a
                href="#cursos"
                className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#FFC107] to-[#FF7A00] px-8 py-4 text-base font-semibold text-[#0D0D0D] shadow-[0_0_30px_rgba(255,193,7,0.3)] hover:shadow-[0_0_40px_rgba(255,193,7,0.5)] transition-all duration-300"
              >
                Ver Cursos
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#1B1F2A] border-b border-[#2a2f3e]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#FFC107]">{courses.length}+</div>
              <div className="text-sm text-[#D0D5E6] mt-1">Cursos Disponíveis</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FFC107]">5</div>
              <div className="text-sm text-[#D0D5E6] mt-1">Plataformas Parceiras</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FFC107]">50K+</div>
              <div className="text-sm text-[#D0D5E6] mt-1">Alunos Satisfeitos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FFC107]">Até 70%</div>
              <div className="text-sm text-[#D0D5E6] mt-1">Desconto nos Cursos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      {category === "Todos" && search === "" && featuredCourses.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            <span className="text-[#FFC107]">Destaques</span>
          </h2>
          <p className="text-[#D0D5E6] mb-8">Os cursos mais populares da nossa plataforma</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      )}

      {/* All Courses */}
      <section id="cursos" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          {category === "Todos" ? "Todos os Cursos" : category}
        </h2>
        <p className="text-[#D0D5E6] mb-6">
          {filteredCourses.length} curso{filteredCourses.length !== 1 ? "s" : ""} encontrado{filteredCourses.length !== 1 ? "s" : ""}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <SearchBar value={search} onChange={setSearch} />
        </div>

        <div className="mb-8">
          <CategoryFilter selected={category} onSelect={setCategory} />
        </div>

        {filteredCourses.length === 0 ? (
          <div className="text-center py-16">
            <svg className="mx-auto h-12 w-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <p className="mt-4 text-[#D0D5E6]">Nenhum curso encontrado com esses filtros.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
