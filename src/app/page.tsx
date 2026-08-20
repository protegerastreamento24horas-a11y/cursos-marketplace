"use client";

import Hero from "@/components/Hero";
import RecentPurchases from "@/components/RecentPurchases";
import BenefitsBar from "@/components/BenefitsBar";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import TopSellingSection from "@/components/TopSellingSection";
import FlashOffersSection from "@/components/FlashOffersSection";
import FAQ from "@/components/FAQ";

export default function HomePage() {
  return (
    <div className="bg-[#0D0D0D] min-h-screen">
      <Hero />
      <RecentPurchases />
      <BenefitsBar />
      <FeaturedCarousel />
      <TopSellingSection />
      <FlashOffersSection />
      <FAQ />
    </div>
  );
}
