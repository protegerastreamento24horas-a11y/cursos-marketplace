"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-md">
      <svg
        className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#D0D5E6]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        placeholder="Buscar cursos..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-[#2a2f3e] bg-[#1B1F2A] py-3 pl-10 pr-4 text-sm text-white placeholder-[#D0D5E6] outline-none transition-colors focus:border-[#FFC107] focus:ring-2 focus:ring-[#FFC107]/20"
      />
    </div>
  );
}
