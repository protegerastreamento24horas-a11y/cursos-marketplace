"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  size?: "default" | "large";
}

export default function SearchBar({ value, onChange, placeholder = "O que voce quer aprender hoje?", size = "default" }: SearchBarProps) {
  return (
    <div className={`relative w-full ${size === "large" ? "max-w-2xl" : "max-w-md"}`}>
      <svg
        className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-xl border border-gray-200 bg-gray-50 ${size === "large" ? "py-4 pl-11 pr-4 text-base" : "py-3 pl-10 pr-4 text-sm"} text-[#1B1F2A] placeholder-gray-400 outline-none transition-all focus:border-[#FFC107]/60 focus:ring-2 focus:ring-[#FFC107]/10 focus:bg-white`}
      />
    </div>
  );
}
