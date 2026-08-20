"use client";

import { categories } from "@/data/courses";

interface CategoryFilterProps {
  selected: string;
  onSelect: (category: string) => void;
  compact?: boolean;
}

export default function CategoryFilter({ selected, onSelect, compact }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`flex items-center gap-1.5 flex-shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-200 whitespace-nowrap ${
            selected === cat.id
              ? "bg-[#FFC107] text-[#0D0D0D] shadow-[0_0_12px_rgba(255,193,7,0.2)]"
              : "bg-[#1B1F2A]/60 text-[#D0D5E6]/70 border border-[#2a2f3e]/60 hover:border-[#FFC107]/30 hover:text-[#FFC107] hover:bg-[#FFC107]/5"
          }`}
        >
          {!compact && <span className="text-xs">{cat.icon}</span>}
          {cat.label}
        </button>
      ))}
    </div>
  );
}
