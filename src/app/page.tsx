"use client";

import { useState, useMemo } from "react";
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
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
