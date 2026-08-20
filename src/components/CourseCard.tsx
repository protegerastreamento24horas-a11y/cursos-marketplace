import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/data/courses";

function PlatformBadge({ platform }: { platform: Course["platform"] }) {
  const styles: Record<string, string> = {
    kiwify: "bg-green-900/40 text-green-400 border-green-800/60",
    hotmart: "bg-orange-900/40 text-orange-400 border-orange-800/60",
    eduzz: "bg-blue-900/40 text-blue-400 border-blue-800/60",
    braip: "bg-purple-900/40 text-purple-400 border-purple-800/60",
    outro: "bg-gray-800/40 text-gray-400 border-gray-700/60",
  };
  const labels: Record<string, string> = {
    kiwify: "KiwiFy",
    hotmart: "Hotmart",
    eduzz: "Eduzz",
    braip: "Braip",
    outro: "Outra",
  };
  return (
    <span className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${styles[platform]}`}>
      {labels[platform]}
    </span>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`h-3.5 w-3.5 ${star <= Math.round(rating) ? "text-[#FFC107]" : "text-gray-700"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-xs text-[#D0D5E6]/60 ml-1">{rating}</span>
    </div>
  );
}

function DiscountBadge({ price, originalPrice }: { price: string; originalPrice: string }) {
  const parse = (p: string) => {
    if (p.startsWith("$")) return parseFloat(p.replace(/[^\d.]/g, "")) * 5;
    return parseFloat(p.replace(/[^\d,]/g, "").replace(",", ".")) || 0;
  };
  const current = parse(price);
  const original = parse(originalPrice);
  if (!original || !current) return null;
  const pct = Math.round((1 - current / original) * 100);
  if (pct <= 0) return null;
  return (
    <span className="inline-flex items-center rounded-md bg-gradient-to-r from-[#FF4500] to-[#FF7A00] px-2 py-0.5 text-[10px] font-bold text-white shadow-lg">
      -{pct}% OFF
    </span>
  );
}

export default function CourseCard({ course, compact }: { course: Course; compact?: boolean }) {
  const link = `/curso/${course.slug}`;

  return (
    <Link href={link} className="group block">
      <div className="relative bg-[#1B1F2A] rounded-2xl border border-[#2a2f3e]/60 overflow-hidden shadow-lg hover:shadow-[0_8px_40px_rgba(255,193,7,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FFC107]/20">
        <div className={`relative ${compact ? "aspect-[16/9]" : "aspect-[3/2] sm:aspect-[4/3]"} bg-[#0D0D0D] overflow-hidden`}>
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, (max-width: 1200px) 25vw, 20vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/70 via-transparent to-transparent" />

          <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
            {course.originalPrice && <DiscountBadge price={course.price} originalPrice={course.originalPrice} />}
            {course.badge === "hot" && (
              <span className="inline-flex items-center rounded-md bg-[#FF4500] px-2 py-0.5 text-[10px] font-bold text-white">
                POPULAR
              </span>
            )}
            {course.badge === "bestseller" && (
              <span className="inline-flex items-center rounded-md bg-[#FFC107] px-2 py-0.5 text-[10px] font-bold text-[#0D0D0D]">
                MAIS VENDIDO
              </span>
            )}
          </div>
        </div>

        <div className="p-3.5 sm:p-4">
          <div className="flex items-center gap-1.5 mb-2">
            <PlatformBadge platform={course.platform} />
            <span className="text-[10px] text-[#D0D5E6]/40 uppercase tracking-wider truncate">{course.category}</span>
          </div>

          <h3 className="text-sm font-bold text-white mb-1.5 line-clamp-2 group-hover:text-[#FFC107] transition-colors leading-snug min-h-[2.5rem]">
            {course.title}
          </h3>

          {!compact && (
            <p className="text-xs text-[#D0D5E6]/50 mb-3 line-clamp-2 leading-relaxed">
              {course.description}
            </p>
          )}

          <div className="flex items-center gap-2 mb-3">
            {course.rating && <StarRating rating={course.rating} />}
            {course.students && (
              <span className="text-[10px] text-[#D0D5E6]/40">
                {course.students >= 1000 ? `${(course.students / 1000).toFixed(course.students % 1000 === 0 ? 0 : 1)}k` : course.students} alunos
              </span>
            )}
          </div>

          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-lg font-extrabold text-[#FFC107] leading-none">{course.price}</span>
            {course.originalPrice && (
              <span className="text-xs text-[#D0D5E6]/35 line-through">{course.originalPrice}</span>
            )}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#FFC107] group-hover:text-[#FFD700] transition-colors flex items-center gap-1">
              Ver Oferta
              <svg className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
