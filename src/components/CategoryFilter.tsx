"use client";

import { categories } from "@/data/courses";

interface CategoryFilterProps {
  selected: string;
  onSelect: (category: string) => void;
}

export default function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
            selected === category
              ? "bg-gradient-to-r from-[#FFC107] to-[#FF7A00] text-[#0D0D0D] shadow-[0_0_15px_rgba(255,193,7,0.3)]"
              : "bg-[#0D0D0D]/50 text-[#D0D5E6] border border-[#2a2f3e] hover:border-[#FFC107] hover:text-[#FFC107] hover:bg-[#FFC107]/5"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
