"use client";

import Hero from "@/components/Hero";
import BenefitsBar from "@/components/BenefitsBar";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import TopSellingSection from "@/components/TopSellingSection";
import FlashOffersSection from "@/components/FlashOffersSection";
import FAQ from "@/components/FAQ";

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <BenefitsBar />
      <FeaturedCarousel />
      <TopSellingSection />
      <FlashOffersSection />
      <FAQ />
    </div>
  );
}
