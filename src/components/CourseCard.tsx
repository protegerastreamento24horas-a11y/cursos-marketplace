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
    <div className="group relative bg-[#1B1F2A] rounded-2xl border border-[#2a2f3e] overflow-hidden shadow-lg hover:shadow-[0_8px_40px_rgba(255,193,7,0.2)] transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-[3/2] sm:aspect-[4/3] bg-[#0D0D0D] overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {course.originalPrice && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#FF4500] to-[#FF7A00] px-3 py-1 text-[10px] font-bold text-white shadow-lg uppercase tracking-wider">
              -{Math.round((1 - parseInt(course.price.replace(/[^0-9]/g, '')) / parseInt(course.originalPrice.replace(/[^0-9]/g, ''))) * 100)}% OFF
            </span>
          </div>
        )}
        {course.featured && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center rounded-full bg-[#FFC107] px-2.5 py-0.5 text-[10px] font-bold text-[#0D0D0D] shadow-lg">
              ⭐ DESTAQUE
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <PlatformBadge platform={course.platform} />
          <span className="text-[11px] text-[#D0D5E6]/70 uppercase tracking-wide">{course.category}</span>
        </div>

        <h3 className="text-[15px] font-bold text-white mb-1.5 line-clamp-2 group-hover:text-[#FFC107] transition-colors leading-tight">
          {course.title}
        </h3>

        <p className="text-[12px] text-[#D0D5E6]/80 mb-3 line-clamp-2 leading-relaxed">
          {course.description}
        </p>

        <div className="flex items-center gap-3 mb-3">
          {course.rating && <StarRating rating={course.rating} />}
          {course.students && (
            <span className="text-[11px] text-[#D0D5E6]/70">
              {course.students.toLocaleString("pt-BR")} alunos
            </span>
          )}
        </div>

        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-xl font-extrabold text-[#FFC107]">{course.price}</span>
          {course.originalPrice && (
            <span className="text-xs text-[#D0D5E6]/50 line-through">
              {course.originalPrice}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <a
            href={course.checkoutLink || course.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#FFC107] via-[#FFD633] to-[#FF7A00] px-4 py-2.5 text-[13px] font-bold text-[#0D0D0D] shadow-md hover:shadow-[0_0_25px_rgba(255,193,7,0.5)] transition-all duration-200 active:scale-95"
          >
            <svg className="mr-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Comprar Agora
          </a>
          <a
            href={course.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-[#3a3f4e] bg-[#0D0D0D]/50 px-4 py-2 text-[12px] font-medium text-[#D0D5E6] hover:border-[#FFC107] hover:text-[#FFC107] hover:bg-[#FFC107]/5 transition-all duration-200"
          >
            Ver Página do Curso
            <svg className="ml-1.5 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
