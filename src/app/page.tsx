"use client";

import Hero from "@/components/Hero";
import BenefitsBar from "@/components/BenefitsBar";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import TopSellingSection from "@/components/TopSellingSection";
import FlashOffersSection from "@/components/FlashOffersSection";
import WhyCursosPro from "@/components/WhyCursosPro";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

function HomePageContent() {
  return (
    <div className="bg-[#0D0D0D] min-h-screen">
      <Hero />
      <BenefitsBar />
      <FeaturedCarousel />
      <TopSellingSection />
      <FlashOffersSection />
        <>
          <WhyCursosPro />
          <Testimonials />
          <FAQ />
        </>
      )}
    </div>
  );
}

export default function HomePage() {
  return <HomePageContent />;
}
