import React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/features/home/hero-section";
import { CategoriesSection } from "@/features/home/categories-section";
import { LocalDiscoverySection } from "@/features/home/local-discovery-section";
import { ProductDiscoverySection } from "@/features/home/product-discovery-section";
import { RetailerCTASection } from "@/features/home/retailer-cta-section";
import { SystemStatus } from "@/components/shared/system-status";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CategoriesSection />
        <LocalDiscoverySection />
        <ProductDiscoverySection />
        <RetailerCTASection />
      </main>
      <Footer />
      <SystemStatus />
    </div>
  );
}
