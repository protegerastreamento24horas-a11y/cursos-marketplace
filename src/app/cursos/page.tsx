"use client";

import { useState, useMemo } from "react";
import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import CategoryFilter from "@/components/CategoryFilter";
import SearchBar from "@/components/SearchBar";

export default function CursosPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");

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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Todos os{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC107] to-[#FF7A00]">
              Cursos
            </span>
          </h1>
          <p className="mt-2 text-[#D0D5E6]">
            Explore nossa coleção completa de cursos com desconto
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <SearchBar value={search} onChange={setSearch} />
        </div>

        <div className="mb-8">
          <CategoryFilter selected={category} onSelect={setCategory} />
        </div>

        <p className="text-sm text-[#D0D5E6] mb-4">
          {filteredCourses.length} curso{filteredCourses.length !== 1 ? "s" : ""} encontrado{filteredCourses.length !== 1 ? "s" : ""}
        </p>

        {filteredCourses.length === 0 ? (
          <div className="text-center py-16">
            <svg className="mx-auto h-12 w-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <p className="mt-4 text-[#D0D5E6]">Nenhum curso encontrado.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
