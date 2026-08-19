import Image from "next/image";
import type { Course } from "@/data/courses";

function PlatformBadge({ platform }: { platform: Course["platform"] }) {
  const styles: Record<string, string> = {
    kiwify: "bg-green-900/50 text-green-400 border border-green-800",
    hotmart: "bg-orange-900/50 text-orange-400 border border-orange-800",
    eduzz: "bg-blue-900/50 text-blue-400 border border-blue-800",
    braip: "bg-purple-900/50 text-purple-400 border border-purple-800",
    outro: "bg-gray-800/50 text-gray-400 border border-gray-700",
  };

  const labels: Record<string, string> = {
    kiwify: "KiwiFy",
    hotmart: "Hotmart",
    eduzz: "Eduzz",
    braip: "Braip",
    outro: "Outra",
  };

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[platform]}`}>
      {labels[platform]}
    </span>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`h-4 w-4 ${star <= Math.round(rating) ? "text-[#FFC107]" : "text-gray-700"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-sm text-[#D0D5E6] ml-1">{rating}</span>
    </div>
  );
}

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="group relative bg-[#1B1F2A] rounded-2xl border border-[#2a2f3e] overflow-hidden shadow-sm hover:shadow-[0_0_30px_rgba(255,193,7,0.15)] transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-video bg-[#0D0D0D] overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {course.originalPrice && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FFC107] px-3 py-1 text-xs font-bold text-[#0D0D0D] shadow-lg">
              OFERTA
            </span>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <PlatformBadge platform={course.platform} />
          <span className="text-xs text-[#D0D5E6]">{course.category}</span>
        </div>

        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-[#FFC107] transition-colors">
          {course.title}
        </h3>

        <p className="text-sm text-[#D0D5E6] mb-4 line-clamp-2">
          {course.description}
        </p>

        <div className="flex items-center gap-3 mb-4">
          {course.rating && <StarRating rating={course.rating} />}
          {course.students && (
            <span className="text-xs text-[#D0D5E6]">
              {course.students.toLocaleString("pt-BR")} alunos
            </span>
          )}
        </div>

        <div className="flex items-end justify-between">
          <div>
            <span className="text-2xl font-bold text-white">{course.price}</span>
            {course.originalPrice && (
              <span className="ml-2 text-sm text-[#D0D5E6] line-through">
                {course.originalPrice}
              </span>
            )}
          </div>

          <a
            href={course.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#FFC107] to-[#FF7A00] px-5 py-2.5 text-sm font-semibold text-[#0D0D0D] shadow-md hover:from-[#FFE600] hover:to-[#FFC107] transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,193,7,0.4)]"
          >
            Ver Curso
            <svg className="ml-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
