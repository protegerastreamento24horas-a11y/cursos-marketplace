"use client";

import Link from "next/link";
import { categoryGoals, courses } from "@/data/courses";
import Carousel, { CarouselItem } from "@/components/Carousel";

export default function GoalSection() {
  return (
    <section className="py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1B1F2A]">
            <span className="text-gradient-gold">O Que Voce Quer Aprender?</span>
          </h2>
          <p className="text-xs text-gray-400 mt-1">Escolha por objetivo</p>
        </div>
        <Carousel id="goals">
          {categoryGoals.map((goal) => {
            const goalCourses = goal.categories.flatMap((cat) =>
              courses.filter((c) => c.category === cat)
            );
            const count = goalCourses.length;
            return (
              <CarouselItem key={goal.id}>
                <Link
                  href={`/cursos?cat=${encodeURIComponent(goal.categories[0])}`}
                  className="group flex items-center gap-3 bg-gray-50 rounded-2xl border border-gray-200 p-4 hover:border-[#FFC107]/20 hover:bg-white transition-all h-full"
                >
                  <div className="h-10 w-10 rounded-xl bg-[#FFC107]/10 flex items-center justify-center shrink-0 group-hover:bg-[#FFC107]/15 transition-colors">
                    <span className="text-xs font-bold text-[#FFC107]">{goal.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs font-bold text-[#1B1F2A] group-hover:text-[#FFC107] transition-colors leading-tight">
                      {goal.label}
                    </h3>
                    <p className="text-[10px] text-gray-400 mt-0.5">
                      {count} curso{count !== 1 ? "s" : ""}
                    </p>
                  </div>
                  <svg className="h-3.5 w-3.5 text-gray-300 group-hover:text-[#FFC107] transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </CarouselItem>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}
