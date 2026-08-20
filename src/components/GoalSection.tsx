"use client";

import Link from "next/link";
import { categoryGoals, courses, getCoursesByCategory } from "@/data/courses";

export default function GoalSection() {
  return (
    <section className="py-12 sm:py-16 bg-[#1B1F2A]/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            🎯 <span className="text-gradient-gold">O Que Voce Quer Aprender?</span>
          </h2>
          <p className="text-sm text-[#D0D5E6]/50 mt-1">Escolha por objetivo e encontre o curso ideal</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {categoryGoals.map((goal) => {
            const goalCourses = goal.categories.flatMap((cat) =>
              courses.filter((c) => c.category === cat)
            );
            const count = goalCourses.length;
            return (
              <Link
                key={goal.id}
                href={`/cursos?cat=${encodeURIComponent(goal.categories[0])}`}
                className="group flex items-center gap-4 bg-[#1B1F2A]/60 rounded-2xl border border-[#2a2f3e]/40 p-5 hover:border-[#FFC107]/20 hover:bg-[#1B1F2A] transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-[#FFC107]/10 flex items-center justify-center text-2xl shrink-0 group-hover:bg-[#FFC107]/15 transition-colors">
                  {goal.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-white group-hover:text-[#FFC107] transition-colors">
                    {goal.label}
                  </h3>
                  <p className="text-xs text-[#D0D5E6]/40 mt-0.5">
                    {count} curso{count !== 1 ? "s" : ""} disponivel{count !== 1 ? "eis" : ""}
                  </p>
                </div>
                <svg className="h-4 w-4 text-[#D0D5E6]/30 group-hover:text-[#FFC107] group-hover:translate-x-0.5 transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
