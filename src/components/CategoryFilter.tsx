"use client";

import { categories } from "@/data/courses";

interface CategoryFilterProps {
  selected: string;
  onSelect: (category: string) => void;
}

export default function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
            selected === category
              ? "bg-gradient-to-r from-[#FFC107] to-[#FF7A00] text-[#0D0D0D] shadow-[0_0_15px_rgba(255,193,7,0.3)]"
              : "bg-[#1B1F2A] text-[#D0D5E6] border border-[#2a2f3e] hover:border-[#FFC107] hover:text-[#FFC107]"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
