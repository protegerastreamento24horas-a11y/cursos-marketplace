"use client";

import { useCallback, useRef } from "react";

interface CarouselProps {
  id: string;
  children: React.ReactNode;
}

export default function Carousel({ id, children }: CarouselProps) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = useCallback((dir: "left" | "right") => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -el.offsetWidth * 0.75 : el.offsetWidth * 0.75, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div className="flex gap-2 justify-end mb-4">
        <button onClick={() => scroll("left")} className="h-8 w-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:border-[#FFC107]/40 hover:text-[#FFC107] transition-all" aria-label="Anterior">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button onClick={() => scroll("right")} className="h-8 w-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:border-[#FFC107]/40 hover:text-[#FFC107] transition-all" aria-label="Proximo">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
      <div
        ref={ref}
        className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
      >
        {children}
      </div>
    </div>
  );
}

export function CarouselItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-shrink-0 w-[240px] sm:w-[280px] snap-start">
      {children}
    </div>
  );
}
